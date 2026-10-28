# Verification - copy, identity and motion refinement, 2026-10-25

## Korean Proof, larger type and app walkthrough, 2026-10-28

- Made Korean Proof explicit in the hero, metadata, brand explanation and kit. Added a scroll reveal that expands K into Korean in the brand caption. Rebuilt the v1.1 kit with the larger shared type scale.
- Replaced the generic result with the concrete 19-or-older example and explained that date of birth is not sent. Updated both product GitHub links to masselabs/kproof and removed the two requested notices in KO/EN.
- Used the supplied Desktop/1.jpg unchanged as assets/app-flow.jpg. CSS crops expose its six app screens inside a phone frame; bilingual captions, tabs, keyboard selection and previous/next controls explain the flow. At 1280 x 548, the source has approximately 175 x 380 pixels per screen; enlarging it cannot restore original text detail.
- Source checks passed with 151 matching bilingual keys, including image alternatives. Node motion, JavaScript syntax and Git whitespace checks passed. Verified that the supplied JPEG and repository asset have identical SHA-256 hashes; the rebuilt brand ZIP passed CRC checks.
- Safari passed 10 layout/control groups: KO/EN at 360, 390, 768, 1024 and 1440px, all six app stages, boundary controls, keyboard selection, menus and FAQ, with no page overflow. Intentional image overflow inside the clipped screen viewport is excluded from overflow reporting.
- Inspected the 390px hero and cropped app screen in native Safari and operated the app next-step control. Checked hero introduction/card and closing copy/control geometry at all five widths in both languages, at 900px viewport height. Fixed closing-copy overlap by anchoring it above the controls and moving the card upward during the final scene.
- Browser layout checks used a temporary visible iframe with parent-window timer waits; geometry checks invoked the existing render function directly. Native animation-frame waits stall in this Safari session, so these checks do not certify the complete scroll scheduling/reduced-motion browser suite. Node checks verify name reveal and forward/reverse motion calculations. Short screens keep the app walkthrough in document flow; scroll pinning requires at least 901 x 1100px.
- No hosting, domain, authentication or data-collection changes.

## Brand kit and shared website tokens, 2026-10-27

- Added a Korean brand guide at `brand/index.html`: identity and clear space, minimum sizes, color roles, typography, layout/motion rules, voice, and downloadable assets. Homepage brand/footer links are translated in KO/EN.
- Added 14 SVG exports, an offline guide, Pretendard WOFF2/OFL, CSS/JSON tokens and a deterministic ZIP builder with no third-party dependencies. The 1200 x 630 social templates retain editable text; app/social platform raster exports are not included.
- The homepage and guide share generated CSS tokens. Applied the logo blue/red to primary actions and result emphasis, unified surface radii, moved existing type scales into shared tokens, and kept the existing motion sequences with shared durations.
- Source checks passed with 136 bilingual keys; Node motion checks, JavaScript syntax and Git whitespace checks passed. Parsed all 14 SVGs, checked guide/homepage anchors and resource paths, and confirmed the kit wordmark matches its canonical source.
- Verified ZIP CRC and every offline HTML/CSS resource path. The HTTP-downloaded ZIP matched the generated file byte for byte. Blue/white, red/white, muted/white and on-dark/black contrast ratios are 8.72, 5.19, 6.01 and 11.12 respectively.
- Safari passed 10 homepage layout/control groups (KO/EN at 360, 390, 768, 1024, 1440px) and six guide widths (320, 360, 390, 768, 1024, 1440px), with no page overflow or missing SVGs. The guide loaded the shared brand token at every width. Used a temporary parent-timer layout harness because the previously recorded iframe animation-frame waits stalled; the full scroll timing suite was not rerun.
- Visually reviewed the 390px guide hero, 1120px palette, and 360px downloads/social templates. Native Safari confirmed successful HEX copying and loaded the extracted offline guide via file URL. Rebuilding produced an identical ZIP hash. Removed temporary QA files and stopped the owned preview server. No OS settings or hosting/domain configuration were changed.

## KProof brand update, 2026-10-27

- Replaced KPID with KProof in Korean/English copy, accessible names, title and Open Graph metadata. Added the Korea + Proof name explanation and a proof-focused hero/tagline. Kept the previous language-storage key to preserve existing preferences.
- Created a six-letter vector wordmark, inverse version and a red/blue K favicon. Adjusted all five image placements, the inline brand illustration and the six-letter reveal timing for the longer name.
- Source checks passed with 134 matching bilingual keys. JavaScript syntax, Git whitespace, SVG parsing, intrinsic image dimensions and matching inline/external geometry passed. Node motion checks passed forward/reverse progress, early-start boundaries, six-letter order and completion.
- Safari passed the 10 layout/control groups (360, 390, 768, 1024 and 1440px, KO/EN), with no horizontal overflow and working menus, tabs, keyboard controls and FAQ. A temporary visible-frame harness used parent-window timer waits because animation-frame callbacks stalled in this Safari session. The complete scroll/timing/static-fallback browser suite did not finish; these results do not certify its three motion groups.
- Visually inspected the vector identity board, 360px Korean hero, 1440px English hero, and 390px route/app wordmark placements in Safari. The new marks fit their containers. In-frame animation transitions remained incomplete during this review, so motion validation for this change is limited to the Node checks above.
- Removed temporary review files and stopped the owned HTTP preview server. No hosting or domain changes were made.

## Expanded name and illustration-led motion, 2026-10-26

- Added Korean Privacy ID to the hero and footer, and made the brand caption explicitly read KPID · Korean Privacy ID.
- The use-case route now waits until its own center reaches 68% of the viewport, then completes at 32%. Added sequential use-case labels, upright letter reveals, proof-result confirmation and request/prove/verify flow; FAQ expansion is a progressive CSS enhancement.
- Source, JavaScript syntax and whitespace checks passed. The new Node motion check passes early-start boundaries at three heights, forward/reverse and jump scrolling, letter order and sequential protocol stages. SVG structure and original letter geometry were also checked.
- Safari passed all 13 browser groups: KO/EN at 360, 390, 768, 1024 and 1440px, existing controls/scroll interactions, route timing and badge containment, and the static reset at a 600px viewport height. This last check exercises the same reset path as reduced motion; the OS motion preference was not changed.
- Reviewed Safari screenshots of the 390px hero, use-case route and protocol diagram, and the 1120px brand section. The expanded name, original wordmark proportions and wider route badge remained legible without overlap. This also verifies the previous wordmark integration in these views.
- Retrieved the official ZKPassport and Linear homepages and relevant styles to reference staged product explanations and disclosure transitions. Browser access to those external sites through the Chrome connector timed out; no claim is made that all external animations were watched live.

## Selected KPID wordmark integration, 2026-10-26

- Applied the approved first wordmark to all five image placements and the inline brand-story SVG. Both external SVGs match the selected source files exactly; the inline paths match the same geometry. The favicon uses the selected wordmark's i at a legible square-icon scale.
- Updated KO/EN product names, accessible labels and metadata to KPID, retaining Korean Privacy ID as the expanded name. Removed redundant text beside the header, footer and app-preview wordmarks.
- Added proportional desktop/mobile sizes and bounded the wider animated route badge within its track. Kept the existing brand-dot animation and reduced-motion rules.
- Passed the existing source check (133 matching bilingual keys, assets, anchors and semantics), JavaScript syntax and Git whitespace checks. Parsed all three SVG assets and checked intrinsic dimensions across all five image placements. Local HTTP preview returned 200.
- Browser verification is incomplete: native Chrome reloaded the updated page title, but the browser connector failed and native interaction was interrupted by user activity. A separate Safari attempt timed out. The full responsive suite and updated page screenshots were not completed; the earlier browser results below do not certify this change. Removed the temporary review page and stopped the owned preview server.

## More dynamic curve motion, 2026-10-26

- Shortened red/blue cycles from 30/38s to 18/23s. Added intermediate travel positions, increased translation/rotation, and subtle nonuniform scaling. Loop endpoints match for seamless repetition.
- Mobile travel and rotation use smaller values. Existing opacity, clipping, offscreen/hidden-tab pausing and reduced-motion rules are preserved.
- Source and Git whitespace checks passed. Refreshed the local site in native Chrome and inspected the desktop rendering. This CSS-only adjustment did not rerun the full responsive/interaction suite recorded below.

## Ambient red/blue curves, 2026-10-25

- Added decorative backgrounds to eight areas: hero, overview, journey, use cases, brand, developers, FAQ and footer. Each uses local SVG curves with CSS transform animations behind the content.
- Source, JavaScript syntax and whitespace checks passed. All 11 existing browser check groups passed, including KO/EN at five widths, controls and scroll effects.
- Chrome confirmed changing transforms for the visible hero background, paused animation for all seven offscreen fields, and pointer-events:none for every field. Reduced-motion emulation disabled both animations on all fields.
- Reviewed desktop hero, overview, journey, use cases and developer screens, plus Korean and English mobile screens. Adjusted mobile background positions after the first capture and lowered the curve opacity behind left-aligned text; rechecked those views and the animation lifecycle.
- No dependencies, external assets or per-frame animation JavaScript were added.

## Typography hierarchy and readability, 2026-10-25

- Added a shared typography scale with smaller display headings, larger lead/body copy, more legible supporting text and stronger emphasis for result labels, journey steps and actions. Adjusted paragraph widths, spacing and app-preview height with the text sizes.
- Source checks, Git whitespace checks and all 11 existing browser check groups passed: five viewport widths (360, 390, 768, 1024, 1440px), KO/EN, controls and scroll effects.
- At each width in both languages, all three app-preview states fit their frame and the hero introduction cleared the identity card (850px viewport height). No clipping or collision was found.
- Inspected Chrome screenshots of desktop hero, overview, journey, use cases and developers; Korean mobile hero, overview and brand section; English 360px hero and 390px journey. Reduced-motion emulation still disables the brand-mark transform.
- This change affects presentation only; product copy, logo geometry and authentication behavior are unchanged.

## Selected iD logo integration, 2026-10-25

- Replaced the P mark with the approved D enclosing an i in all five image placements, the inline brand-story mark, and favicon. Dark surfaces use the white/red version; the favicon follows the browser color scheme.
- Source checks and Git whitespace checks passed. Existing browser checks passed all 11 groups, including KO/EN at 360, 390, 768, 1024 and 1440px and forward/reverse scroll effects.
- All logo images loaded and retained their 6:7 aspect ratio. Reviewed Chrome captures of the 1440px brand section and 390px mobile header. Reduced-motion emulation produced no transform on the brand mark.
- Browser capture used local Chrome via CDP because the connected Chrome and in-app browser surfaces were unavailable. No hosting or domain changes were made.

## Previous copy, identity and motion verification

- Source checks passed: 133 matching KO/EN keys, anchors, assets, external links, pending URLs, document structure and font license. JavaScript syntax and Git whitespace checks passed.
- Chrome executed the expanded qa/checks.js: 11 result groups passed. Responsive checks cover 360, 390, 768, 1024 and 1440px in Korean and English, with no horizontal overflow.
- Menu/Escape, FAQ, proof tabs and keyboard navigation, translated selected states, and journey tabs all passed.
- Forward/reverse hero scenes and sticky journey stages both passed 0 > 1 > 2 > 0. Manual journey selection remained active without further scrolling.
- Overview, international use, privacy principle and developer sections each produced increasing effect progress when entering the viewport.
- Native Chrome screenshots reviewed: Korean desktop hero and redesigned credential; 360 x 900 mobile hero; desktop middle journey stage with miniature credential. No text/graphic collision was observed in these views.
- Reduced-motion emulation returned reduced:true, motion:false, journey position:relative, zero hidden reveal elements, scan display:none, and logo path transform:none. Emulation was removed after checking.
- Chrome emitted MetaMask extension warnings. DevTools also listed a CSP eval issue without a source location; the application contains no eval or dynamic code execution. QA uses an isolated same-origin iframe and eval only to inspect its lexical test state.

The credential is an original explanatory illustration, not a functional identity document. No authentication or data collection was added. No hosting or domain changes were made.
