const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');
const elements = new Map();
function element(selector) {
  if (!elements.has(selector)) {
    const values = new Map();
    const item = {
      rect: {top: 2000, height: 120},
      style: {setProperty: (name, value) => values.set(name, Number(value))},
      getBoundingClientRect() {return this.rect;},
      value: name => values.get(name)
    };
    item.parentElement = item;
    elements.set(selector, item);
  }
  return elements.get(selector);
}
const code = source.slice(source.indexOf('const clamp ='), source.indexOf('function renderStory()'));
const {renderDetails} = vm.runInNewContext(code + '\n({renderDetails})', {document: {querySelector: element}});

for (const viewport of [680, 850, 1080]) {
  const route = element('.world-route');
  const place = center => {route.rect.top = viewport * center - route.rect.height / 2; renderDetails(viewport);};
  // The heading can already be on screen; the route itself must reach 68%.
  for (const center of [1.2, 1, .85, .69, .68]) {
    place(center);
    assert.equal(route.value('--route'), 0, `route started early at ${viewport}:${center}`);
  }
  place(.50); assert.equal(route.value('--route'), .5);
  place(.32); assert.equal(route.value('--route'), 1);
  place(-.2); assert.equal(route.value('--route'), 1);
  place(.85); assert.equal(route.value('--route'), 0, 'reverse scroll resets route');
}

const viewport = 1000;
const flow = element('.protocol-flow');
function flowAt(progress) {
  flow.rect.top = viewport * (.76 - progress * .38) - flow.rect.height / 2;
  renderDetails(viewport);
}
flowAt(.2);
assert.ok(flow.value('--flow-in') > 0);
assert.equal(flow.value('--flow-node'), 0);
assert.equal(flow.value('--flow-out'), 0);
flowAt(.5);
assert.equal(flow.value('--flow-in'), 1);
assert.ok(flow.value('--flow-node') > 0);
assert.equal(flow.value('--flow-out'), 0);
flowAt(1);
for (const key of ['--flow-in', '--flow-node', '--flow-out']) assert.equal(flow.value(key), 1);
flowAt(0);
for (const key of ['--flow-in', '--flow-node', '--flow-out']) assert.equal(flow.value(key), 0);

const mark = element('.principle-mark');
mark.rect.top = viewport * .62 - mark.rect.height / 2;
renderDetails(viewport);
const letters = [0, 1, 2, 3, 4, 5].map(i => mark.value(`--letter-${i}`));
assert.ok(letters.every((value, i) => i === 0 || value < letters[i - 1]), 'letters reveal in reading order');
assert.ok(mark.value('--name-reveal') > 0 && mark.value('--name-reveal') < 1);
mark.rect.top = 0; renderDetails(viewport);
assert.equal(mark.value('--name-reveal'), 1, 'Korean Proof expansion completes');
for (let i = 0; i < 6; i++) assert.equal(mark.value(`--letter-${i}`), 1);
console.log('PASS: route stays still until visible, forward/reverse and jump scrolling, viewport scaling, sequential proof flow and wordmark reveal.');
