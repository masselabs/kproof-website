# Verification — interactive redesign, 2026-10-25

## Current revision

- Source checks passed: 125 KO/EN translation keys, anchors, local assets, external link protections, empty unpublished URLs, one h1, four FAQs, and local font license.
- JavaScript syntax check passed.
- Chrome executed `qa/checks.js`: all 11 checks passed. These cover 360, 390, 768, 1024, 1440px × Korean/English and a forward/backward native-scroll sequence. No horizontal overflow, missing translation, broken anchor, clickable unpublished resource, menu/Escape failure, or FAQ toggle failure.
- Each width/language combination also exercises proof selection, arrow-key navigation, translation after selection, all three journey screens, and Home-key navigation.
- Native scrolling produced scene states 0 → 1 → 2 → 0 as expected. No wheel/touch interception is used.
- Native Chrome screenshots inspected: desktop Korean hero, final proof scene, English proof comparison and journey, and 360px mobile Korean/English hero and final scene. The final proof and heading were adjusted to avoid overlap.
- Chrome's reduced-motion emulation confirmed `reduced: true`, `motion: false`, sticky panel `position: relative`, and zero hidden reveal elements. The emulation was then removed.
- Browser console warnings came from the installed MetaMask extension. One malformed manually entered QA expression caused a console SyntaxError; the corrected expression executed successfully. This was not an application script error.

No site publication, account changes, authentication API integration, or domain setup was performed.
