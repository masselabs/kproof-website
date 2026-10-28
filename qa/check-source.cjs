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
assert.ok(!/rel="canonical"/.test(html));
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/<details>/g) || []).length, 4);
assert.ok(html.includes('<html lang="ko">'));
assert.ok(fs.readFileSync(path.join(root, 'assets/fonts/OFL.txt'), 'utf8').includes('SIL OPEN FONT LICENSE'));
console.log(`PASS: ${Object.keys(data.translations.ko).length} bilingual keys; anchors, assets, external links, pending URLs, semantics, and font license.`);
