# Verification — visual redesign, 2026-10-22

## Current revision

- Source checks passed: 98 KO/EN translation keys, anchors, local assets, external link protections, empty unpublished URLs, one h1, four FAQs, and local font license.
- JavaScript syntax check passed.
- Chrome browser executed `qa/checks.js` against the current redesign. All 10 combinations passed: 360, 390, 768, 1024, 1440px × Korean/English. No horizontal overflow, missing translation, broken anchor, clickable unpublished resource, menu/Escape failure, or FAQ toggle failure.
- Initial run found the rotated privacy card slightly outside the viewport at small widths. Its inset was corrected and the full check passed.
- Native Chrome screenshots inspected: desktop Korean hero and feature graphics, 390px mobile layout and English product composition.
- English switch was exercised through the actual language control. Browser accessibility tree confirmed translated headings, navigation labels, document title, FAQ and footer.
- An older preview tab retained a 4× pinch zoom. This was identified through `visualViewport.scale`; a fresh preview tab was used for visual review at normal scale. Site zoom remains enabled for accessibility.
- The fresh browser profile showed no console messages. Warnings in the other profile were attributed to its MetaMask extension's contentscript.

No site publication, account changes, authentication API integration, or domain setup was performed.
