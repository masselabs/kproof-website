"use strict";
// TODO: Set each URL only after its dedicated Korean Privacy ID resource is published.
const pendingUrls = Object.freeze({ sdk: "", developerDocs: "", appStore: "", googlePlay: "", apiReference: "", repository: "", privacyPolicy: "", termsOfService: "" });
const translations = {
  "ko": {
    "skip": "본문 바로가기",
    "nav": "주요 메뉴",
    "overview": "서비스 소개",
    "how": "이용 방법",
    "uses": "활용 사례",
    "dev": "개발자",
    "language": "언어 선택",
    "koLabel": "한국어로 보기",
    "enLabel": "영어로 보기",
    "menuOpen": "메뉴 열기",
    "menuClose": "메뉴 닫기",
    "home": "Korean Privacy ID 홈",
    "status": "출시 준비 중",
    "heroHeading": "모바일 신분증으로,\n필요한 사실만 증명하세요.",
    "intro": "한국 모바일 신분증으로, 필요한 사실만.\n개인정보 보호의 새로운 방식을 준비합니다.",
    "learn": "서비스 알아보기",
    "contact": "기술 문의",
    "by": "Masse Labs가 만드는 프라이버시ID",
    "example": "화면 예시",
    "exampleCaption": "이용 흐름을 설명하기 위한 콘셉트 화면입니다.",
    "appBrand": "프라이버시ID",
    "request": "확인 요청",
    "requestDesc": "서비스에 전달할 내용을 확인하세요.",
    "checkItem": "확인 항목",
    "age": "만 18세 이상",
    "requester": "요청 서비스",
    "shared": "전달할 정보",
    "ageResult": "연령 조건 충족 여부",
    "notShared": "전달하지 않을 정보",
    "name": "이름",
    "birth": "생년월일",
    "idNumber": "신분증 번호",
    "result": "확인 결과",
    "met": "조건 충족",
    "resultNote": "서비스에는 확인 결과만 전달",
    "featuresTitle": "모든 정보 말고.\n필요한 답 하나.",
    "featuresIntro": "무엇을 확인할지 선택해 보세요. 서비스에 전달할 증명 결과의 예시입니다.",
    "feature1": "생년월일 대신, 성인 여부.",
    "feature1Text": "생년월일 공개 없이 요청한 연령 기준을 충족하는지 증명하는 기능을 준비합니다.",
    "feature2": "필요한 자격만, 정확하게.",
    "feature2Text": "지역과 자격 조건을 필요한 범위에서 확인하도록 준비합니다. 지원 범위는 출시 시 안내합니다.",
    "feature3": "나의 정보는, 나의 영역에.",
    "feature3Text": "서비스에 제공하는 정보를 요청된 증명 결과 중심으로 제한하도록 설계합니다.",
    "howTitle": "복잡한 기술은 뒤로.\n경험은 간결하게.",
    "howIntro": "출시 후 제공할 예정인 이용 흐름입니다.",
    "step1": "증명 요청",
    "step1Text": "서비스에서 확인하려는 조건을 요청합니다.",
    "step2": "모바일 신분증 연계",
    "step2Text": "앱에서 요청 내용을 확인하고 모바일 신분증을 이용해 증명을 생성합니다.",
    "step3": "결과 확인",
    "step3Text": "서비스가 증명을 검증하고 필요한 조건의 충족 여부를 확인합니다.",
    "service": "이용 서비스",
    "userApp": "사용자 앱",
    "verification": "서비스의 검증",
    "usesTitle": "한국에서 시작해.\n경계 너머로.",
    "usesIntro": "한국 모바일 신분증 기반의 증명을 국내외 서비스에서 활용할 수 있도록 설계하고 있습니다.",
    "usesNote": "해당 서비스가 증명 방식과 자격을 수용하는 경우에 이용할 수 있습니다.",
    "use1": "성인 인증",
    "use1Text": "생년월일 대신 성인 여부 확인",
    "use2": "연령 제한 서비스",
    "use2Text": "서비스가 정한 연령 기준 확인",
    "use3": "온라인 서비스 이용 자격",
    "use3Text": "가입·이용에 필요한 조건 확인",
    "use4": "Web3 및 커뮤니티 참여",
    "use4Text": "참여에 필요한 자격 조건 확인",
    "use5": "외부 자격 검증 시스템",
    "use5Text": "외부 서비스와 증명 결과 연계",
    "passportNote": "Human Passport와 같은 외부 자격 검증 생태계는 활용 방향의 예시이며, 현재 공식 연동 관계를 의미하지 않습니다.",
    "devTitle": "다음 인증 경험을,\n함께 만듭니다.",
    "devIntro": "한국 모바일 신분증 기반의 증명을 검증하는 개발자 통합 인터페이스를 준비하고 있습니다.",
    "techTitle": "필요한 조건을 검증하는 기술",
    "techText": "ZKProofport의 영지식증명(Zero-Knowledge Proof) 기술을 기반으로, 원본 개인정보 공개를 줄이면서 요청된 조건을 검증하도록 설계합니다.",
    "docs": "개발자 문서",
    "api": "API 문서",
    "soon": "준비 중",
    "github": "ZKProofport GitHub",
    "devNote": "SDK, API 및 개발자 문서는 아직 제공되지 않습니다.",
    "faqTitle": "자주 묻는 질문",
    "q1": "어떤 신분증을 사용할 수 있나요?",
    "a1": "한국 모바일 신분증 연계를 준비하고 있습니다. 지원 신분증 종류와 이용 조건은 출시 시 안내합니다.",
    "q2": "개인정보를 모두 제출해야 하나요?",
    "a2": "이름이나 생년월일 대신 요청된 조건의 충족 여부를 전달하도록 설계합니다. 실제 제공 정보와 처리 범위는 출시 시 안내합니다.",
    "q3": "해외 서비스에서도 사용할 수 있나요?",
    "a3": "해외 서비스에서도 활용할 수 있도록 설계하고 있습니다. 해당 서비스가 이 증명 방식과 자격을 수용해야 하며, 국가별 법적 효력을 보장하지 않습니다.",
    "q4": "일반 모바일 신분증 앱과 어떤 차이가 있나요?",
    "a4": "신분증을 발급하는 앱이 아니라, 모바일 신분증을 활용해 필요한 조건을 증명하는 독립 서비스입니다.",
    "operator": "개발 및 운영:",
    "support": "제품 지원",
    "policy": "개인정보처리방침 · 준비 중",
    "terms": "이용약관 · 준비 중",
    "official": "모바일 신분증 공식 안내",
    "independent": "Korean Privacy ID는 Masse Labs가 개발·운영하는 독립 서비스이며, 정부의 공식 신분증 발급 앱이 아닙니다.",
    "footerNav": "서비스 관련 링크",
    "title": "Korean Privacy ID | 프라이버시ID",
    "description": "한국 모바일 신분증으로 이름이나 생년월일 대신 필요한 조건을 증명하는 프라이버시ID. Masse Labs가 출시를 준비하고 있습니다.",
    "languageChanged": "한국어로 변경되었습니다.",
    "privateLabel": "개인정보는 비공개",
    "proofOnly": "필요한 사실 하나만.",
    "heroLine1": "나를 드러내지 않고.",
    "heroLine2": "나를 증명하다.",
    "storyEndLabel": "공개하는 것은 줄이고",
    "storyEndTitle": "필요한 사실만, 남기다.",
    "storyEndText": "이름과 생년월일 대신, 요청된 조건의 충족 여부를 전달하도록 설계합니다.",
    "scrollHint": "스크롤하며 알아보기",
    "sceneNav": "이야기 장면 선택",
    "scene1": "나의 정보",
    "scene2": "공개 최소화",
    "scene3": "필요한 사실",
    "conceptShort": "이용 흐름 콘셉트",
    "proofTabs": "증명 예시 선택",
    "proofAge": "연령",
    "proofRegion": "지역",
    "proofEligibility": "자격",
    "proofAgeTitle": "생년월일 대신, 연령 조건.",
    "proofAgeText": "요청한 연령 기준을 충족하는지만 증명하는 기능을 준비합니다.",
    "proofRegionTitle": "주소 대신, 지역 조건.",
    "proofRegionText": "서비스가 요청한 지역 조건을 필요한 범위에서 증명하도록 준비합니다.",
    "proofEligibilityTitle": "신분 정보 대신, 이용 자격.",
    "proofEligibilityText": "가입이나 참여에 필요한 자격을 충족하는지 확인하도록 설계합니다.",
    "explorerNote": "설명용 예시이며 실제 인증이 아닙니다. 지원 신분증과 증명 범위는 출시 시 안내합니다.",
    "journeyTabs": "이용 단계 선택",
    "generateCaption": "요청을 확인한 뒤, 필요한 조건에 대한 증명을 생성합니다.",
    "markLabel": "하나의 심벌, 두 가지 약속",
    "markTitle": "지키는 방패.\n증명하는 체크.",
    "markText": "바깥의 방패는 개인정보를 보호하는 경계. 안쪽의 체크는 그 경계를 넘어 전달되는 증명 결과. 붉은색과 푸른색에 한국에서 시작하는 정체성을 담았습니다."
  },
  "en": {
    "skip": "Skip to content",
    "nav": "Main navigation",
    "overview": "Overview",
    "how": "How It Works",
    "uses": "Use Cases",
    "dev": "Developers",
    "language": "Select language",
    "koLabel": "View in Korean",
    "enLabel": "View in English",
    "menuOpen": "Open menu",
    "menuClose": "Close menu",
    "home": "Korean Privacy ID home",
    "status": "In development",
    "heroHeading": "Verify eligibility without\nrevealing your identity.",
    "intro": "Prove only what’s needed with Korean Mobile ID.\nA new approach to privacy, in development.",
    "learn": "How it works",
    "contact": "Technical inquiries",
    "by": "A product in development by Masse Labs",
    "example": "Illustrative screen",
    "exampleCaption": "A concept screen illustrating the planned experience.",
    "appBrand": "Korean Privacy ID",
    "request": "Verification request",
    "requestDesc": "Review what will be shared with the service.",
    "checkItem": "Requirement",
    "age": "Age 18 or older",
    "requester": "Requested by",
    "shared": "Information shared",
    "ageResult": "Whether the age requirement is met",
    "notShared": "Information not shared",
    "name": "Name",
    "birth": "Date of birth",
    "idNumber": "ID number",
    "result": "Verification result",
    "met": "Requirement met",
    "resultNote": "Only the result is shared with the service",
    "featuresTitle": "Not every detail.\nJust the answer.",
    "featuresIntro": "Choose a requirement. Explore the proof result a service would receive.",
    "feature1": "Your age. Not your birthday.",
    "feature1Text": "We’re developing a way to prove an age requirement is met without revealing a date of birth.",
    "feature2": "Your eligibility. Simply proven.",
    "feature2Text": "Location and eligibility checks, limited to what’s needed. Supported requirements will be announced at launch.",
    "feature3": "Your details. Yours to keep.",
    "feature3Text": "Designed to limit the information a service receives to the results of the requested checks.",
    "howTitle": "Complex technology.\nSimple experience.",
    "howIntro": "The planned experience, once the service launches.",
    "step1": "Request a proof",
    "step1Text": "A service requests proof of the condition it needs to verify.",
    "step2": "Use Korean Mobile ID",
    "step2Text": "Review the request in the app and create a proof using your mobile ID.",
    "step3": "Verify the result",
    "step3Text": "The service verifies the proof and checks that its requirement is met.",
    "service": "Requesting service",
    "userApp": "User’s app",
    "verification": "Service verification",
    "usesTitle": "Starting in Korea.\nThinking beyond.",
    "usesIntro": "We’re designing proofs based on Korean Mobile ID for services in Korea and around the world.",
    "usesNote": "Availability depends on each service accepting the proof method and the underlying eligibility criteria.",
    "use1": "Adult eligibility",
    "use1Text": "Check adult status instead of date of birth",
    "use2": "Age-restricted services",
    "use2Text": "Verify a service’s chosen age threshold",
    "use3": "Online service eligibility",
    "use3Text": "Check requirements for access or registration",
    "use4": "Web3 and communities",
    "use4Text": "Verify conditions for participation",
    "use5": "External credential systems",
    "use5Text": "Connect proof results to other services",
    "passportNote": "Ecosystems such as Human Passport illustrate potential use cases. No current official integration or partnership is implied.",
    "devTitle": "Build the next\nverification experience.",
    "devIntro": "We’re preparing developer interfaces to verify proofs based on Korean Mobile ID.",
    "techTitle": "Technology for eligibility checks",
    "techText": "Built on ZKProofport’s Zero-Knowledge Proof technology, the service is designed to verify requested conditions while reducing disclosure of the underlying personal information.",
    "docs": "Developer docs",
    "api": "API Reference",
    "soon": "Coming soon",
    "github": "ZKProofport GitHub",
    "devNote": "The SDK, API and developer documentation are not yet available.",
    "faqTitle": "Frequently asked questions",
    "q1": "Which IDs will be supported?",
    "a1": "We’re preparing integration with Korean Mobile ID. Supported ID types and usage requirements will be announced at launch.",
    "q2": "Do I need to submit all my personal information?",
    "a2": "The service is designed to share whether a requirement is met, instead of your name or date of birth. Details of the information shared and processed will be provided at launch.",
    "q3": "Can I use it with services outside Korea?",
    "a3": "We’re designing for international use where a service accepts the proof method and eligibility criteria. Legal validity across jurisdictions is not guaranteed.",
    "q4": "How is this different from a mobile ID app?",
    "a4": "This independent service uses a mobile ID to prove specific conditions. It does not issue government identity documents.",
    "operator": "Developed and operated by",
    "support": "Product support",
    "policy": "Privacy policy · Coming soon",
    "terms": "Terms of service · Coming soon",
    "official": "Official Korean Mobile ID website",
    "independent": "Korean Privacy ID is an independent service developed and operated by Masse Labs. It is not an official government ID issuance app.",
    "footerNav": "Service links",
    "title": "Korean Privacy ID | Private eligibility verification",
    "description": "Korean Privacy ID is being developed by Masse Labs to prove age and eligibility using Korean Mobile ID while reducing personal information disclosure.",
    "languageChanged": "Language changed to English.",
    "privateLabel": "Personal details stay private",
    "proofOnly": "Just the fact that matters.",
    "heroLine1": "Your identity.",
    "heroLine2": "Only yours.",
    "storyEndLabel": "LESS TO REVEAL",
    "storyEndTitle": "Only the fact remains.",
    "storyEndText": "Designed to share whether a requirement is met, instead of your name or date of birth.",
    "scrollHint": "Scroll to discover",
    "sceneNav": "Choose a story scene",
    "scene1": "Your details",
    "scene2": "Less disclosure",
    "scene3": "Just the proof",
    "conceptShort": "Illustrative concept",
    "proofTabs": "Choose a proof example",
    "proofAge": "Age",
    "proofRegion": "Region",
    "proofEligibility": "Eligibility",
    "proofAgeTitle": "Age. Not your birthday.",
    "proofAgeText": "We’re preparing a way to prove an age threshold is met without sharing your date of birth.",
    "proofRegionTitle": "Region. Not your address.",
    "proofRegionText": "We’re preparing proofs limited to the regional conditions a service requests.",
    "proofEligibilityTitle": "Eligibility. Not your details.",
    "proofEligibilityText": "Designed to confirm whether the requirements for access or participation are met.",
    "explorerNote": "An illustration, not live verification. Supported IDs and proof types will be announced at launch.",
    "journeyTabs": "Choose a step",
    "generateCaption": "Review the request, then create a proof of the required condition.",
    "markLabel": "ONE SYMBOL. TWO PROMISES.",
    "markTitle": "A shield to protect.\nA check to prove.",
    "markText": "The shield defines a boundary around personal information. The check represents the proof that crosses it. Red and blue express our Korean roots."
  }
};
const storageKey = "korean-privacy-id-language";
let language = "ko";
try { if (localStorage.getItem(storageKey) === "en") language = "en"; } catch { /* Storage may be unavailable in private or restricted browsing. */ }
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
function closeMenu(returnFocus = false) {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", translations[language].menuOpen);
  nav.classList.remove("is-open");
  if (returnFocus) menu.focus();
}
function setLanguage(next, announce = false) {
  language = next === "en" ? "en" : "ko";
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = copy[element.dataset.i18n];
    const lines = value.split("\n");
    element.replaceChildren();
    lines.forEach((line, index) => {
      if (index) element.append(document.createTextNode(" "), document.createElement("br"));
      element.append(document.createTextNode(line));
    });
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", copy[element.dataset.i18nAria]));
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector('meta[property="og:locale"]').content = language === "ko" ? "ko_KR" : "en_US";
  menu.setAttribute("aria-label", copy[menu.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"]);
  if (announce) {
    try { localStorage.setItem(storageKey, language); } catch { /* The current page still switches without persistence. */ }
    document.querySelector("#language-status").textContent = copy.languageChanged;
  }
}
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang, true)));
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", translations[language][open ? "menuClose" : "menuOpen"]);
  nav.classList.toggle("is-open", open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu()));
document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") closeMenu(true); });
document.addEventListener("click", event => { if (!event.target.closest(".site-header")) closeMenu(); });
const desktop = window.matchMedia("(min-width: 901px)");
desktop.addEventListener("change", event => { if (event.matches) closeMenu(); });
setLanguage(language);

// Explanatory controls only. They do not authenticate, collect or transmit data.
const proofExamples = {
  age: {title: 'proofAgeTitle', description: 'proofAgeText', glyph: '18', suffix: '+'},
  region: {title: 'proofRegionTitle', description: 'proofRegionText', glyph: 'KR', suffix: ''},
  eligibility: {title: 'proofEligibilityTitle', description: 'proofEligibilityText', glyph: '✓', suffix: ''}
};
function selectProof(key) {
  const example = proofExamples[key];
  if (!example) return;
  const explorer = document.querySelector('.proof-explorer');
  const panel = document.querySelector('#proof-panel');
  explorer.dataset.proof = key;
  panel.setAttribute('aria-labelledby', `tab-${key}`);
  document.querySelectorAll('.proof-tabs [role="tab"]').forEach(tab => {
    const selected = tab.dataset.proof === key;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  const title = document.querySelector('#proof-title');
  const description = document.querySelector('#proof-description');
  title.dataset.i18n = example.title;
  description.dataset.i18n = example.description;
  title.textContent = translations[language][example.title];
  description.textContent = translations[language][example.description];
  const display = document.querySelector('#result-display');
  display.replaceChildren(document.createTextNode(example.glyph));
  if (example.suffix) {
    const suffix = document.createElement('span');
    suffix.textContent = example.suffix;
    display.append(suffix);
  }
  panel.classList.remove('is-switching');
  void panel.offsetWidth;
  panel.classList.add('is-switching');
}
function selectStep(index) {
  if (index < 0 || index > 2) return;
  const panel = document.querySelector('#journey-panel');
  panel.dataset.step = String(index);
  panel.setAttribute('aria-labelledby', `step-tab-${index}`);
  document.querySelectorAll('.journey-steps [role="tab"]').forEach(tab => {
    const selected = Number(tab.dataset.step) === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelectorAll('[data-step-screen]').forEach(screen => {
    screen.hidden = Number(screen.dataset.stepScreen) !== index;
  });
}
function wireTabs(selector, activate, vertical = false) {
  const tabs = [...document.querySelectorAll(`${selector} [role="tab"]`)];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) next = (index + 1) % tabs.length;
      else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
}
wireTabs('.proof-tabs', tab => selectProof(tab.dataset.proof));
wireTabs('.journey-steps', tab => selectStep(Number(tab.dataset.step)), true);

const story = document.querySelector('.story');
const sticky = story.querySelector('.story-sticky');
const sceneButtons = [...document.querySelectorAll('[data-scene-target]')];
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const motionViewport = matchMedia('(min-height: 680px)');
let motionActive = false;
let scrollQueued = false;
let revealObserver;
const clamp = value => Math.max(0, Math.min(1, value));
const ramp = (value, start, end) => clamp((value - start) / (end - start));
function renderStory() {
  scrollQueued = false;
  if (!motionActive) return;
  const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header'));
  const rect = story.getBoundingClientRect();
  const progress = clamp((top - rect.top) / Math.max(1, story.offsetHeight - sticky.offsetHeight));
  const hide = ramp(progress, .12, .43);
  const reveal = ramp(progress, .42, .70);
  const outro = ramp(progress, .64, .88);
  story.style.setProperty('--progress', progress.toFixed(4));
  story.style.setProperty('--hide', hide.toFixed(4));
  story.style.setProperty('--reveal', reveal.toFixed(4));
  story.style.setProperty('--intro', (1 - ramp(progress, .08, .34)).toFixed(4));
  story.style.setProperty('--outro', outro.toFixed(4));
  const scene = progress < .28 ? 0 : progress < .64 ? 1 : 2;
  story.dataset.scene = String(scene);
  sceneButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === scene)));
}
function queueStory() {
  if (!scrollQueued && motionActive) {
    scrollQueued = true;
    requestAnimationFrame(renderStory);
  }
}
function configureMotion() {
  motionActive = !motionPreference.matches && motionViewport.matches;
  document.documentElement.classList.toggle('motion-enabled', motionActive);
  revealObserver?.disconnect();
  if (motionActive && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold: .08});
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    renderStory();
  } else {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
    story.removeAttribute('style');
    story.dataset.scene = '0';
    sceneButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === 0)));
  }
}
sceneButtons.forEach((button, index) => button.addEventListener('click', () => {
  if (!motionActive) return;
  const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header'));
  const progress = [0, .47, .94][index];
  window.scrollTo({top: story.getBoundingClientRect().top + window.scrollY - top + (story.offsetHeight - sticky.offsetHeight) * progress, behavior: 'smooth'});
}));
window.addEventListener('scroll', queueStory, {passive: true});
window.addEventListener('resize', queueStory, {passive: true});
motionPreference.addEventListener('change', configureMotion);
motionViewport.addEventListener('change', configureMotion);
configureMotion();
