const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const data = vm.runInNewContext(js.split('const storageKey')[0] + '\n({translations, pendingUrls})');
assert.deepEqual(Object.keys(data.translations.ko).sort(), Object.keys(data.translations.en).sort());
for (const match of html.matchAll(/data-i18n(?:-aria|-alt)?="([^"]+)"/g)) {
  for (const language of ['ko', 'en']) assert.ok(data.translations[language][match[1]], `Missing ${language}:${match[1]}`);
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML id');
for (const match of html.matchAll(/href="#([^"]*)"/g)) assert.ok(ids.includes(match[1]), `Unresolved anchor ${match[1]}`);
for (const match of html.matchAll(/(?:href|src)="((?:css|js|assets)\/[^"#]+)"/g)) assert.ok(fs.existsSync(path.join(root, match[1])), `Missing asset ${match[1]}`);
for (const tag of html.matchAll(/<a\b[^>]+target="_blank"[^>]*>/g)) assert.ok(tag[0].includes('rel="noopener noreferrer"'));
assert.ok(Object.values(data.pendingUrls).every(value => value === ''));
assert.ok(!/href="(?:#|)"/.test(html));
const origin = `https://${fs.readFileSync(path.join(root, 'CNAME'), 'utf8').trim()}/`;
assert.ok(html.includes(`<link rel="canonical" href="${origin}">`));
const meta = (name, attribute = 'property') => {
  const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => match[0]);
  const matches = tags.filter(tag => tag.includes(`${attribute}="${name}"`));
  assert.equal(matches.length, 1, `Expected one ${name} meta tag`);
  const content = matches[0].match(/\bcontent="([^"]*)"/);
  assert.ok(content && content[1], `Missing ${name} content`);
  return content[1];
};
assert.equal(meta('og:url'), origin);
assert.equal(meta('og:image'), `${origin}assets/og-image.png`);
assert.equal(meta('og:image:secure_url'), meta('og:image'));
assert.equal(meta('og:image:type'), 'image/png');
assert.equal(meta('og:image:width'), '1200');
assert.equal(meta('og:image:height'), '630');
assert.ok(meta('og:image:alt'));
assert.equal(meta('twitter:card', 'name'), 'summary_large_image');
assert.equal(meta('twitter:image', 'name'), meta('og:image'));
assert.equal(meta('twitter:title', 'name'), meta('og:title'));
assert.equal(meta('twitter:description', 'name'), meta('og:description'));
assert.equal(meta('twitter:image:alt', 'name'), meta('og:image:alt'));
const assertPng = (bytes, width, height) => {
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(bytes.readUInt32BE(16), width);
  assert.equal(bytes.readUInt32BE(20), height);
};
for (const [file, width, height] of [['assets/og-image.png', 1200, 630], ['assets/favicon-96.png', 96, 96], ['apple-touch-icon.png', 180, 180]]) {
  const bytes = fs.readFileSync(path.join(root, file));
  assertPng(bytes, width, height);
  assert.ok(bytes.length < 1000000, `Oversized preview asset: ${file}`);
}
assert.ok(html.includes('rel="icon" href="/assets/favicon-96.png" type="image/png" sizes="96x96"'));
assert.ok(html.includes('rel="icon" href="/favicon.ico"'));
assert.ok(html.includes('rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"'));
const ico = fs.readFileSync(path.join(root, 'favicon.ico'));
assert.equal(ico.readUInt16LE(0), 0);
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 4);
for (const [index, size] of [16, 32, 48, 256].entries()) {
  const entry = 6 + index * 16;
  assert.equal(ico[entry] || 256, size);
  assert.equal(ico[entry + 1] || 256, size);
  const length = ico.readUInt32LE(entry + 8);
  const offset = ico.readUInt32LE(entry + 12);
  assert.ok(offset + length <= ico.length);
  assertPng(ico.subarray(offset, offset + length), size, size);
}
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/<details>/g) || []).length, 4);
assert.ok(html.includes('<html lang="ko">'));
assert.ok(fs.readFileSync(path.join(root, 'assets/fonts/OFL.txt'), 'utf8').includes('SIL OPEN FONT LICENSE'));
console.log(`PASS: ${Object.keys(data.translations.ko).length} bilingual keys; anchors, assets, external links, pending URLs, semantics, font license, canonical URL, social metadata and PNG/ICO dimensions.`);
