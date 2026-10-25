# Verification - copy, identity and motion refinement, 2026-10-25

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
