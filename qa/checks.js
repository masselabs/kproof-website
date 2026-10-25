// Run only from the local site's DevTools console:
// await import('/qa/checks.js').then(module => module.checkSite())
export async function checkSite() {
  const frame = document.createElement('iframe');
  frame.style.cssText = 'position:fixed;left:0;top:0;height:900px;border:0;z-index:-1;visibility:hidden';
  frame.title = 'Local responsive quality check';
  frame.src = '/';
  const loaded = new Promise(resolve => frame.addEventListener('load', resolve, {once: true}));
  document.body.append(frame);
  await loaded;
  const win = frame.contentWindow;
  const doc = frame.contentDocument;
  await doc.fonts.ready;
  const results = [];
  try {
    for (const width of [360, 390, 768, 1024, 1440]) {
      frame.style.width = width + 'px';
      for (const lang of ['ko', 'en']) {
        win.setLanguage(lang);
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        const overflow = [...doc.querySelectorAll('body *')].filter(element => {
          const box = element.getBoundingClientRect();
          return box.width > 0 && (box.left < -1 || box.right > width + 1);
        }).map(element => element.className || element.tagName);
        const errors = [];
        if (doc.documentElement.lang !== lang) errors.push('html lang');
        if (!doc.title.includes('Korean Privacy ID')) errors.push('title');
        if ([...doc.querySelectorAll('[data-i18n]')].some(e => !e.textContent.trim() || e.textContent.includes('undefined'))) errors.push('translation');
        if ([...doc.querySelectorAll('a[href^="#"]')].some(e => !doc.getElementById(e.hash.slice(1)))) errors.push('anchor');
        if (doc.querySelector('a[href="#"],a[href=""],link[rel="canonical"]')) errors.push('placeholder link or invented canonical');
        if ([...doc.querySelectorAll('a[target="_blank"]')].some(e => !e.rel.includes('noopener') || !e.rel.includes('noreferrer'))) errors.push('external link rel');
        if ([...doc.querySelectorAll('[aria-disabled="true"]')].some(e => e.closest('a'))) errors.push('pending link is clickable');
        if (width <= 900) {
          const toggle = doc.querySelector('.menu-toggle');
          toggle.click();
          if (toggle.getAttribute('aria-expanded') !== 'true' || getComputedStyle(doc.querySelector('#main-nav')).display === 'none') errors.push('menu opening');
          doc.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'}));
          if (toggle.getAttribute('aria-expanded') !== 'false') errors.push('menu escape');
        }
        // Verify explanatory tabs, keyboard navigation, and translation after a state change.
        doc.querySelector('#tab-region').click();
        if (doc.querySelector('#result-display').textContent !== 'KR' || doc.querySelector('#proof-panel').getAttribute('aria-labelledby') !== 'tab-region') errors.push('region example');
        doc.querySelector('#tab-region').dispatchEvent(new win.KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true}));
        if (doc.querySelector('#tab-eligibility').getAttribute('aria-selected') !== 'true') errors.push('proof keyboard');
        win.setLanguage(lang);
        if (doc.querySelector('#proof-title').dataset.i18n !== 'proofEligibilityTitle' || doc.querySelector('#proof-title').textContent !== win.eval('translations')[lang].proofEligibilityTitle) errors.push('selected proof translation');
        doc.querySelector('#tab-age').click();
        for (let step = 0; step < 3; step++) {
          doc.querySelector('#step-tab-' + step).click();
          if (doc.querySelectorAll('[data-step-screen]:not([hidden])').length !== 1 || doc.querySelector('[data-step-screen="' + step + '"]').hidden) errors.push('journey step ' + step);
        }
        doc.querySelector('#step-tab-2').dispatchEvent(new win.KeyboardEvent('keydown', {key: 'Home', bubbles: true}));
        if (doc.querySelector('#step-tab-0').getAttribute('aria-selected') !== 'true') errors.push('journey keyboard');
        const summary = doc.querySelector('summary');
        summary.click();
        if (!summary.parentElement.open) errors.push('FAQ opening');
        summary.click();
        if (summary.parentElement.open) errors.push('FAQ closing');
        results.push({width,lang,scrollWidth:doc.documentElement.scrollWidth,overflow,errors});
      }
    }
    // Native scroll must scrub in both directions without locking the document.
    const story = doc.querySelector('.story');
    const scrollErrors = [];
    if (doc.documentElement.classList.contains('motion-enabled')) {
      const header = parseFloat(win.getComputedStyle(doc.documentElement).getPropertyValue('--header'));
      const start = story.getBoundingClientRect().top + win.scrollY - header;
      const distance = story.offsetHeight - doc.querySelector('.story-sticky').offsetHeight;
      for (const [progress, scene] of [[0, '0'], [.47, '1'], [.96, '2'], [0, '0']]) {
        win.scrollTo({top: start + distance * progress, behavior: 'instant'});
        win.dispatchEvent(new win.Event('scroll'));
        await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
        if (story.dataset.scene !== scene) scrollErrors.push('scroll scene ' + scene);
      }
    }
    results.push({width: 1440, lang: 'scroll', scrollWidth: doc.documentElement.scrollWidth, overflow: [], errors: scrollErrors});
    return {passed: results.every(result => !result.errors.length && !result.overflow.length && result.scrollWidth === result.width),results};
  } finally { frame.remove(); }
}
