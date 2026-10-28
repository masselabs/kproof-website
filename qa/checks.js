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
        if (!doc.title.includes('KProof')) errors.push('title');
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
        for (let step = 0; step < 6; step++) {
          doc.querySelector('#step-tab-' + step).click();
          if (doc.querySelectorAll('[data-step-screen]:not([hidden])').length !== 1 || doc.querySelector('[data-step-screen="' + step + '"]').hidden) errors.push('journey step ' + step);
          const screen = doc.querySelector('[data-step-screen="' + step + '"] .demo-screen');
          const bounds = screen.getBoundingClientRect();
          if (screen.scrollHeight > screen.clientHeight + 1 || screen.scrollWidth > screen.clientWidth + 1) errors.push('app viewport overflow ' + step);
          for (const element of screen.querySelectorAll('*')) {
            const rect = element.getBoundingClientRect();
            if (rect.width && (rect.left < bounds.left - 1 || rect.right > bounds.right + 1 || rect.top < bounds.top - 1 || rect.bottom > bounds.bottom + 1)) {
              errors.push('app content clipped ' + step + ': ' + element.className);
              break;
            }
          }

        }
        doc.querySelector('#step-tab-2').dispatchEvent(new win.KeyboardEvent('keydown', {key: 'Home', bubbles: true}));
        if (doc.querySelector('#step-tab-0').getAttribute('aria-selected') !== 'true') errors.push('journey keyboard');
        doc.querySelector('[data-step-next]').click();
        if (doc.querySelector('#journey-panel').dataset.step !== '1') errors.push('next app screen');
        doc.querySelector('[data-step-prev]').click();
        if (doc.querySelector('#journey-panel').dataset.step !== '0' || !doc.querySelector('[data-step-prev]').disabled) errors.push('previous app screen boundary');
        doc.querySelector('#step-tab-5').click();
        if (!doc.querySelector('[data-step-next]').disabled) errors.push('last app screen boundary');
        doc.querySelector('#step-tab-0').click();
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
    if (doc.documentElement.classList.contains('motion-enabled')) {
      const section = doc.querySelector('.how-section');
      const pinned = doc.querySelector('.journey-sticky');
      const header = parseFloat(win.getComputedStyle(doc.documentElement).getPropertyValue('--header'));
      const start = section.getBoundingClientRect().top + win.scrollY - header;
      const distance = section.offsetHeight - pinned.offsetHeight;
      if (win.getComputedStyle(pinned).position === 'sticky') {
        win.eval('journeyManualAt = null; journeyAutoStep = -1');
        for (const [progress, step] of [[0, '0'], [.5, '3'], [.95, '5'], [0, '0']]) {
          win.scrollTo({top: start + distance * progress, behavior: 'instant'});
          win.dispatchEvent(new win.Event('scroll'));
          await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
          if (doc.querySelector('#journey-panel').dataset.step !== step) scrollErrors.push('journey scroll ' + step);
        }
        // A direct tab choice stays selected until scroll advances meaningfully.
        doc.querySelector('#step-tab-2').click();
        win.dispatchEvent(new win.Event('scroll'));
        await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
        if (doc.querySelector('#journey-panel').dataset.step !== '2') scrollErrors.push('manual journey preserved');
      }
      for (const selector of ['.overview','.use-section','.brand-story','.developer-section']) {
        const chapter = doc.querySelector(selector);
        const y = chapter.getBoundingClientRect().top + win.scrollY;
        const values = [];
        for (const offset of [-win.innerHeight, 0]) {
          win.scrollTo({top:y + offset, behavior:'instant'});
          win.dispatchEvent(new win.Event('scroll'));
          await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
          values.push(Number(chapter.style.getPropertyValue('--fx')));
        }
        if (!(values[1] > values[0])) scrollErrors.push('chapter animation ' + selector);
      }
    }
    results.push({width: 1440, lang: 'scroll', scrollWidth: doc.documentElement.scrollWidth, overflow: [], errors: scrollErrors});
    const timingErrors = [];
    if (doc.documentElement.classList.contains('motion-enabled')) {
      const route = doc.querySelector('.world-route');
      // Isolate the scrub timing from the generic entry transition.
      route.classList.add('is-visible');
      route.style.transition = 'none';
      route.style.transform = 'none';
      const center = route.getBoundingClientRect().top + win.scrollY + route.offsetHeight / 2;
      for (const [position, expected] of [[.85, 0], [.69, 0], [.50, .5], [.32, 1], [.85, 0]]) {
        win.scrollTo({top: center - win.innerHeight * position, behavior: 'instant'});
        win.dispatchEvent(new win.Event('scroll'));
        await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
        const actual = Number(route.style.getPropertyValue('--route'));
        if (Math.abs(actual - expected) > .015) timingErrors.push(`route ${position}: ${actual}`);
        const badge = doc.querySelector('.route-proof').getBoundingClientRect();
        const track = doc.querySelector('.route-track').getBoundingClientRect();
        if (badge.left < track.left - 1 || badge.right > track.right + 1) timingErrors.push('route badge escaped track');
      }
      route.style.removeProperty('transition');
      route.style.removeProperty('transform');
    }
    results.push({width: 1440, lang: 'motion timing', scrollWidth: doc.documentElement.scrollWidth, overflow: [], errors: timingErrors});
    // The small-viewport fallback shares the static reset path with reduced motion.
    frame.style.height = '600px';
    await new Promise(resolve => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
    win.configureMotion();
    const fallbackErrors = [];
    if (doc.documentElement.classList.contains('motion-enabled')) fallbackErrors.push('motion remains enabled');
    if (Number(win.getComputedStyle(doc.querySelector('.world-route')).getPropertyValue('--route')) !== 1) fallbackErrors.push('route not complete');
    for (const letter of doc.querySelectorAll('.wordmark-letter')) {
      const style = win.getComputedStyle(letter);
      if (style.opacity !== '1' || style.transform !== 'none') fallbackErrors.push('letter not static');
    }
    for (const line of doc.querySelectorAll('.protocol-flow>i')) {
      if (win.getComputedStyle(line).transform !== 'none') fallbackErrors.push('protocol not static');
    }
    results.push({width: 1440, lang: 'static fallback', scrollWidth: doc.documentElement.scrollWidth, overflow: [], errors: fallbackErrors});
    return {passed: results.every(result => !result.errors.length && !result.overflow.length && result.scrollWidth === result.width),results};
  } finally { frame.remove(); }
}
