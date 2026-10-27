"use strict";
// TODO: Set each URL only after its dedicated KProof resource is published.
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
    "home": "KProof 홈",
    "status": "출시 준비 중",
    "heroHeading": "개인정보는 지키고\n필요한 사실만 증명",
    "intro": "한국 모바일 신분증으로 연령과 이용 자격을 증명합니다.\n서비스에는 확인에 필요한 결과만 전달합니다.",
    "learn": "서비스 알아보기",
    "contact": "기술 문의",
    "by": "Masse Labs가 만드는 KProof",
    "example": "화면 예시",
    "exampleCaption": "서비스 이용 과정을 보여주는 예시 화면입니다.",
    "appBrand": "KProof",
    "request": "확인 요청",
    "requestDesc": "요청한 조건과 제공할 정보를 확인합니다.",
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
    "featuresTitle": "확인할 조건에 따라\n공개 범위를 최소화합니다",
    "featuresIntro": "연령부터 이용 자격까지. 신분증의 전체 정보가 아닌, 서비스에서 확인해야 할 조건을 증명합니다.",
    "feature1": "연령 확인",
    "feature1Text": "생년월일을 공개하지 않고 연령 기준 충족 여부를 확인합니다.",
    "feature2": "자격 확인",
    "feature2Text": "서비스 이용에 필요한 지역·자격 조건을 확인합니다.",
    "feature3": "정보 공개 최소화",
    "feature3Text": "서비스에 제공하는 정보를 요청한 조건의 증명 결과로 제한합니다.",
    "howTitle": "모바일 신분증에서\n서비스 인증까지",
    "howIntro": "개발 중인 서비스의 이용 예시입니다.",
    "step1": "요청 내용 확인",
    "step1Text": "서비스에서 요청한 인증 조건과 제공할 정보를 확인합니다.",
    "step2": "모바일 신분증으로 증명",
    "step2Text": "모바일 신분증의 정보를 바탕으로 요청한 조건에 대한 증명을 생성합니다.",
    "step3": "서비스에서 검증",
    "step3Text": "서비스는 전달받은 증명으로 조건 충족 여부를 확인합니다.",
    "service": "이용 서비스",
    "userApp": "사용자 앱",
    "verification": "서비스의 검증",
    "usesTitle": "국내외 서비스를 잇는\n새로운 인증 방식",
    "usesIntro": "한국 모바일 신분증을 기반으로 온라인 서비스, 커뮤니티 등 다양한 환경에서 활용할 수 있는 인증을 준비합니다.",
    "usesNote": "이용 가능 여부는 각 서비스의 증명 방식 및 자격 기준 수용 여부에 따라 달라집니다.",
    "use1": "연령 확인",
    "use1Text": "요청한 연령 기준 충족 여부 확인",
    "use2": "연령 제한 서비스",
    "use2Text": "서비스가 정한 연령 기준 확인",
    "use3": "온라인 서비스 가입",
    "use3Text": "가입·이용에 필요한 조건 확인",
    "use4": "Web3·커뮤니티",
    "use4Text": "참여에 필요한 자격 조건 확인",
    "use5": "외부 자격 검증",
    "use5Text": "외부 서비스와 증명 결과 연계",
    "passportNote": "Human Passport는 활용 가능한 외부 생태계의 예시입니다. 현재 공식 연동 또는 제휴 관계는 없습니다.",
    "devTitle": "개인정보 보호를\n서비스의 기본으로",
    "devIntro": "모바일 신분증 기반 증명을 서비스에 연결할 수 있도록 SDK와 검증 API를 준비하고 있습니다.",
    "techTitle": "영지식증명 기반 검증",
    "techText": "ZKProofport의 영지식증명 기술을 활용합니다. 원본 신원정보의 공개를 최소화하면서 서비스가 요청한 조건을 검증하는 구조입니다.",
    "docs": "개발자 문서",
    "api": "API 문서",
    "soon": "준비 중",
    "github": "ZKProofport GitHub",
    "devNote": "SDK, API 및 개발자 문서는 아직 제공되지 않습니다.",
    "faqTitle": "자주 묻는 질문",
    "q1": "어떤 신분증을 사용할 수 있나요?",
    "a1": "한국 모바일 신분증과의 연동을 준비하고 있습니다. 지원하는 신분증 종류와 이용 조건은 출시 시 안내합니다.",
    "q2": "어떤 개인정보가 서비스에 전달되나요?",
    "a2": "서비스가 요청한 조건의 충족 여부를 전달하는 방식으로 개발하고 있습니다. 구체적인 제공 항목과 개인정보 처리 범위는 출시 시 안내합니다.",
    "q3": "해외 서비스에서도 사용할 수 있나요?",
    "a3": "해외 서비스와의 연동을 고려해 개발하고 있습니다. 실제 이용 여부는 각 서비스의 지원 범위에 따라 달라지며, 국가별 법적 효력을 보장하지는 않습니다.",
    "q4": "일반 모바일 신분증 앱과 어떤 차이가 있나요?",
    "a4": "모바일 신분증의 정보를 바탕으로 서비스에 필요한 조건을 증명합니다. 신분증을 발급하는 정부 공식 앱과는 별개의 서비스입니다.",
    "operator": "개발 및 운영:",
    "support": "제품 지원",
    "policy": "개인정보처리방침 · 준비 중",
    "terms": "이용약관 · 준비 중",
    "official": "모바일 신분증 공식 안내",
    "independent": "KProof는 Masse Labs가 개발·운영하는 독립 서비스이며, 정부의 공식 신분증 발급 앱이 아닙니다.",
    "footerNav": "서비스 관련 링크",
    "title": "KProof | 필요한 사실만 증명하세요",
    "description": "KProof는 한국 모바일 신분증을 바탕으로 연령과 이용 자격을 증명하는 프라이버시 서비스입니다. Masse Labs에서 개발하고 있습니다.",
    "languageChanged": "한국어로 변경되었습니다.",
    "privateLabel": "원본 정보 비공개",
    "proofOnly": "조건 충족 여부만 전달",
    "heroLine1": "개인정보는 지키고",
    "heroLine2": "필요한 사실만 증명",
    "storyEndLabel": "SELECTIVE DISCLOSURE",
    "storyEndTitle": "인증에 필요한 결과만",
    "storyEndText": "이름이나 생년월일을 전달하는 대신, 요청한 조건을 충족하는지 증명합니다.",
    "scrollHint": "스크롤하여 살펴보기",
    "sceneNav": "인증 과정 살펴보기",
    "scene1": "신원정보",
    "scene2": "정보 보호",
    "scene3": "증명 결과",
    "conceptShort": "서비스 이용 예시",
    "proofTabs": "증명 예시 선택",
    "proofAge": "연령",
    "proofRegion": "지역",
    "proofEligibility": "자격",
    "proofAgeTitle": "연령 기준 충족 여부",
    "proofAgeText": "생년월일을 전달하지 않고, 서비스가 정한 연령 기준을 충족하는지 증명합니다.",
    "proofRegionTitle": "지역 조건 충족 여부",
    "proofRegionText": "상세 주소 대신, 서비스에서 요구하는 지역 조건의 충족 여부를 증명합니다.",
    "proofEligibilityTitle": "서비스 이용 자격",
    "proofEligibilityText": "가입이나 참여에 필요한 자격 조건을 충족하는지 증명합니다.",
    "explorerNote": "설명용 예시입니다. 지원 신분증과 증명 항목은 출시 시 확정하여 안내합니다.",
    "journeyTabs": "이용 단계 선택",
    "generateCaption": "모바일 신분증을 기반으로 요청한 조건에 대한 증명을 생성합니다.",
    "markLabel": "PRIVACY BY DESIGN",
    "markTitle": "개인정보 보호,\n증명의 설계부터",
    "markText": "KProof는 한국을 뜻하는 K와 증명을 뜻하는 Proof를 결합한 이름입니다. 한국 모바일 신분증을 바탕으로, 필요한 조건의 충족 여부만 증명합니다.",
    "mobileID": "모바일 신분증",
    "cardSample": "설명용 예시",
    "cardCaption": "모바일 신분증을 재구성한 예시 이미지",
    "flowLabel": "인증 요청부터 검증까지",
    "protocolLabel": "서비스 연동 구조",
    "protocolRequest": "조건 요청",
    "protocolProof": "증명 생성",
    "protocolVerify": "결과 검증",
    "brandTagline": "필요한 사실만 증명하세요.",
    "brandKit": "브랜드 킷",
    "brandGuide": "브랜드 가이드"
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
    "home": "KProof home",
    "status": "In development",
    "heroHeading": "Keep your privacy.\nProve what matters.",
    "intro": "Prove age and eligibility with Korean Mobile ID.\nShare only the result the service needs.",
    "learn": "How it works",
    "contact": "Technical inquiries",
    "by": "A product in development by Masse Labs",
    "example": "Illustrative screen",
    "exampleCaption": "A concept screen illustrating the planned experience.",
    "appBrand": "KProof",
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
    "featuresTitle": "Verify the requirement.\nLimit the disclosure.",
    "featuresIntro": "Choose a requirement. Explore the proof result a service would receive.",
    "feature1": "Your age. Not your birthday.",
    "feature1Text": "We’re developing a way to prove an age requirement is met without revealing a date of birth.",
    "feature2": "Your eligibility. Simply proven.",
    "feature2Text": "Location and eligibility checks, limited to what’s needed. Supported requirements will be announced at launch.",
    "feature3": "Your details. Yours to keep.",
    "feature3Text": "Designed to limit the information a service receives to the results of the requested checks.",
    "howTitle": "From mobile identity\nto service verification.",
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
    "independent": "KProof is an independent service developed and operated by Masse Labs. It is not an official government ID issuance app.",
    "footerNav": "Service links",
    "title": "KProof | Prove what matters",
    "description": "KProof is a privacy-preserving service for proving age and eligibility with Korean Mobile ID. In development by Masse Labs.",
    "languageChanged": "Language changed to English.",
    "privateLabel": "Personal details stay private",
    "proofOnly": "Just the fact that matters.",
    "heroLine1": "Keep your privacy.",
    "heroLine2": "Prove what matters.",
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
    "markLabel": "PRIVACY BY DESIGN",
    "markTitle": "Privacy, built into\nevery proof.",
    "markText": "KProof combines K for Korea with Proof. Built on Korean Mobile ID, it proves that you meet a requirement while limiting the personal information you share.",
    "mobileID": "Mobile identity",
    "cardSample": "Illustrative sample",
    "cardCaption": "Illustrative mobile identity card",
    "flowLabel": "From request to verification",
    "protocolLabel": "Service integration flow",
    "protocolRequest": "Request",
    "protocolProof": "Prove",
    "protocolVerify": "Verify",
    "brandTagline": "Prove what matters.",
    "brandKit": "Brand kit",
    "brandGuide": "Brand guidelines"
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
  // Translation can reflow the illustration before the next scroll event.
  requestAnimationFrame(queueStory);
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
let journeyManualAt = null;
let journeyProgress = 0;
let journeyAutoStep = -1;
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
function selectStep(index, source = "manual") {
  if (source === "manual") { journeyManualAt = journeyProgress; journeyAutoStep = -1; }
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
// Start from the illustration's own visible center, not its chapter heading.
function viewportProgress(rect, viewport, start = .72, end = .36) {
  const center = rect.top + rect.height / 2;
  return clamp((viewport * start - center) / (viewport * (start - end)));
}
const motionDetails = {
  route: document.querySelector('.world-route'),
  proof: document.querySelector('.proof-panel'),
  mark: document.querySelector('.principle-mark'),
  flow: document.querySelector('.protocol-flow')
};
function renderDetails(viewport) {
  const route = viewportProgress(motionDetails.route.getBoundingClientRect(), viewport, .68, .32);
  motionDetails.route.style.setProperty('--route', route.toFixed(4));
  document.querySelector('.use-pills').style.setProperty('--cases', route.toFixed(4));
  const proof = viewportProgress(motionDetails.proof.getBoundingClientRect(), viewport, .80, .44);
  document.querySelector('.proof-panel').style.setProperty('--proof', proof.toFixed(4));
  const mark = viewportProgress(motionDetails.mark.parentElement.getBoundingClientRect(), viewport, .80, .44);
  for (let index = 0; index < 6; index++) {
    motionDetails.mark.style.setProperty(`--letter-${index}`, ramp(mark, index * .08, .60 + index * .08).toFixed(4));
  }
  const flow = viewportProgress(motionDetails.flow.getBoundingClientRect(), viewport, .76, .38);
  motionDetails.flow.style.setProperty('--flow-in', ramp(flow, 0, .40).toFixed(4));
  motionDetails.flow.style.setProperty('--flow-node', ramp(flow, .30, .65).toFixed(4));
  motionDetails.flow.style.setProperty('--flow-out', ramp(flow, .60, 1).toFixed(4));
}
function renderStory() {
  scrollQueued = false;
  if (!motionActive) return;
  renderChapters();
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
    document.querySelectorAll('.overview,.how-section,.use-section,.brand-story,.developer-section').forEach(section => { section.style.removeProperty('--fx'); section.style.removeProperty('--journey-progress'); });
    motionDetails.route.style.removeProperty('--route');
    document.querySelector('.use-pills').style.removeProperty('--cases');
    document.querySelector('.proof-panel').style.removeProperty('--proof');
    for (let index = 0; index < 6; index++) motionDetails.mark.style.removeProperty(`--letter-${index}`);
    ['--flow-in', '--flow-node', '--flow-out'].forEach(name => motionDetails.flow.style.removeProperty(name));
    journeyManualAt = null;
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
document.fonts.ready.then(queueStory);

// One animation frame updates all visible chapters. Effects are tied to native
// scroll position, reversible, and disabled with the user's motion preference.
function renderChapters() {
  const viewport = window.innerHeight;
  renderDetails(viewport);
  document.querySelectorAll('.overview,.how-section,.use-section,.brand-story,.developer-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    const progress = clamp((viewport * .88 - rect.top) / (rect.height * .48 + viewport * .16));
    section.style.setProperty('--fx', progress.toFixed(4));
  });
  const journey = document.querySelector('.how-section');
  const pinned = journey.querySelector('.journey-sticky');
  if (getComputedStyle(pinned).position !== 'sticky') return;
  const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header'));
  journeyProgress = clamp((header - journey.getBoundingClientRect().top) / Math.max(1, journey.offsetHeight - pinned.offsetHeight));
  journey.style.setProperty('--journey-progress', journeyProgress.toFixed(4));
  const nextStep = Math.min(2, Math.floor(journeyProgress * 3));
  if (journeyManualAt !== null && Math.abs(journeyProgress - journeyManualAt) < .12) return;
  journeyManualAt = null;
  if (nextStep !== journeyAutoStep) {
    journeyAutoStep = nextStep;
    selectStep(nextStep, 'scroll');
  }
}

// Decorative curves animate in CSS; no extra per-frame JavaScript work.
// Offscreen chapters and hidden tabs keep their current animation phase.
const ambientFields = document.querySelectorAll('.ambient-field');
if ('IntersectionObserver' in window) {
  const ambientObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-active', entry.isIntersecting));
  }, {rootMargin: '120px 0px'});
  ambientFields.forEach(field => ambientObserver.observe(field));
}
function syncAmbientVisibility() {
  document.documentElement.classList.toggle('page-hidden', document.hidden);
}
document.addEventListener('visibilitychange', syncAmbientVisibility);
syncAmbientVisibility();
