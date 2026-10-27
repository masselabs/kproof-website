#!/usr/bin/env python3
"""Build KProof's reusable vector exports, shared CSS tokens and offline kit. No dependencies."""
from pathlib import Path
import json
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / 'brand'
ASSETS = BRAND / 'assets'
ASSETS.mkdir(exist_ok=True)
tokens = json.loads((BRAND / 'tokens.json').read_text())
css = ['/* Generated from brand/tokens.json by scripts/build-brand-kit.py. */', ':root {']
for group, values in tokens.items():
    if group == 'mobileType':
        continue
    for name, value in values.items():
        prefix = 'type' if group == 'type' else f'kp-{group}'
        css.append(f'  --{prefix}-{name}: {value};')
css += ['}', '@media (max-width: 900px) { :root { --kp-layout-section: 96px; } }', '@media (max-width: 600px) {', '  :root {', '    --kp-layout-section: 80px;']
css += [f'    --type-{name}: {value};' for name, value in tokens['mobileType'].items()]
css += ['  }', '}', '']
(ROOT / 'css/tokens.css').write_text('\n'.join(css))

wordmark = (ROOT / 'assets/logo.svg').read_text()
inverse = (ROOT / 'assets/logo-inverse.svg').read_text()
black = tokens['color']['black']
for name, content in {
    'wordmark-color.svg': wordmark,
    'wordmark-inverse.svg': inverse,
    'wordmark-black.svg': re.sub(r'#[0-9A-Fa-f]{6}', black, wordmark),
    'wordmark-white.svg': re.sub(r'#[0-9A-Fa-f]{6}', '#FFFFFF', wordmark)
}.items():
    (ASSETS / name).write_text(content)

k_paths = re.search(r'<g transform="translate\(0\)">(.*?)</g>', wordmark).group(1)
for name, body, accent in [('color', '#0047A0', '#CD2E3A'), ('inverse', '#FFFFFF', '#CD2E3A'), ('black', black, black), ('white', '#FFFFFF', '#FFFFFF')]:
    paths = k_paths.replace('#CD2E3A', accent)
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 144" role="img" aria-label="KProof K symbol"><g fill="{body}">{paths}</g></svg>\n'
    (ASSETS / f'symbol-{name}.svg').write_text(svg)

(ASSETS / 'app-icon.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="KProof app icon"><rect width="512" height="512" fill="{black}"/><g transform="translate(137.2 126.4) scale(1.8)" fill="#FFFFFF">{k_paths}</g></svg>\n')
wordmark_paths = re.search(r'(<g fill=.*)</svg>', inverse).group(1)
for variant, background, foreground, muted in [('dark', black, '#FFFFFF', '#BFC1CE'), ('light', '#FFFFFF', black, '#62626E')]:
    paths = wordmark_paths if variant == 'dark' else re.search(r'(<g fill=.*)</svg>', wordmark).group(1)
    template = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="KProof — Prove what matters">
<rect width="1200" height="630" fill="{background}"/>
<g transform="translate(72 64) scale(.31)">{paths}</g>
<text x="72" y="302" fill="{foreground}" font-family="Pretendard, Arial, sans-serif" font-size="76" font-weight="650" letter-spacing="-3">Prove what matters.</text>
<text x="76" y="364" fill="{muted}" font-family="Pretendard, Arial, sans-serif" font-size="27">Korea + Proof. Privacy by design.</text>
<path d="M880 630C720 480 1050 430 1200 520" fill="none" stroke="#0047A0" stroke-width="3"/>
<path d="M990 630C870 505 1110 490 1200 552" fill="none" stroke="#CD2E3A" stroke-width="3"/>
<path d="M72 518H1128" stroke="{muted}" stroke-opacity=".35"/>
<text x="72" y="564" fill="{muted}" font-family="Pretendard, Arial, sans-serif" font-size="18">KProof</text>
<text x="1128" y="564" text-anchor="end" fill="{muted}" font-family="Pretendard, Arial, sans-serif" font-size="18">Masse Labs</text>
</svg>'''
    (ASSETS / f'social-{variant}.svg').write_text(template)
for name in ['ambient-red.svg', 'ambient-blue.svg', 'favicon.svg']:
    (ASSETS / name).write_bytes((ROOT / 'assets' / name).read_bytes())

guide = (BRAND / 'index.html').read_text()
offline_guide = guide.replace('href="../index.html"', 'href="index.html"').replace('홈페이지로', '브랜드 가이드')
offline_guide = offline_guide.replace('href="kproof-brand-kit.zip" download', 'href="#downloads"').replace('브랜드 킷 다운로드', '로고 파일 살펴보기')
files = { 'brand/index.html': offline_guide.encode() }
for relative in ['brand/guide.css', 'brand/guide.js', 'brand/README.txt', 'brand/tokens.json', 'css/tokens.css', 'assets/fonts/PretendardVariable.woff2', 'assets/fonts/OFL.txt']:
    files[relative] = (ROOT / relative).read_bytes()
for path in sorted(ASSETS.iterdir()):
    if path.is_file(): files[path.relative_to(ROOT).as_posix()] = path.read_bytes()
files['README.txt'] = 'KProof Brand Kit v1.0\n\nOpen brand/index.html in a browser.\nVector exports: brand/assets/\nDesign tokens: brand/tokens.json and css/tokens.css\nFont and SIL OFL license: assets/fonts/\nUsage notes: brand/README.txt\n'.encode()
with zipfile.ZipFile(BRAND / 'kproof-brand-kit.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
    for name, content in sorted(files.items()):
        info = zipfile.ZipInfo('KProof-Brand-Kit/' + name, (2026, 10, 27, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        archive.writestr(info, content)
print(f'Built shared CSS tokens, {len(list(ASSETS.glob("*.svg")))} SVG exports and {len(files)} archive files.')
