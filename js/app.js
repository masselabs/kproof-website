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
    "heroHeading": "모바일 신분증으로\n필요한 자격을 증명하세요",
    "intro": "한국 모바일 신분증으로 연령이나 거주 지역 등의 조건을 증명할 수 있습니다.\n이용하는 서비스에는 신분증 원본 대신 영지식 증명을 전달합니다.",
    "learn": "KProof 알아보기",
    "contact": "기술 문의",
    "by": "Masse Labs가 개발하는 KProof",
    "example": "화면 예시",
    "exampleCaption": "KProof 이용 과정을 설명하는 예시 화면입니다.",
    "appBrand": "KProof",
    "request": "증명 요청",
    "requestDesc": "서비스가 요청한 조건과 전달할 정보를 확인합니다.",
    "checkItem": "증명 항목",
    "age": "만 19세 이상",
    "requester": "증명을 요청한 서비스",
    "shared": "서비스가 확인하는 내용",
    "ageResult": "만 19세 이상 여부",
    "notShared": "서비스에 공개하지 않는 정보",
    "name": "이름",
    "birth": "생년월일",
    "idNumber": "신분증 번호",
    "result": "검증 결과",
    "met": "조건 충족",
    "resultNote": "생년월일을 공개하지 않고\n만 19세 이상임을 증명합니다.",
    "featuresTitle": "어떤 정보를 증명할 수 있나요?",
    "featuresIntro": "연령이나 거주 지역 등 서비스에서 필요한 조건을 증명할 수 있습니다.",
    "feature1": "SDK 연동",
    "feature1Text": "모바일 신분증 시스템을 직접 연계하지 않고 SDK로 증명을 요청할 수 있습니다.",
    "feature2": "온체인·오프체인 검증",
    "feature2Text": "스마트 컨트랙트나 호환 검증기로 증명을 검증합니다.",
    "howTitle": "KProof 이용 방법",
    "howIntro": "신분증 등록부터 증명 완료까지의 과정을 살펴보세요.",
    "step1": "요청 내용 확인",
    "step1Text": "서비스가 요청한 조건과 전달할 정보를 확인합니다.",
    "step2": "휴대폰에서 증명 생성",
    "step2Text": "등록한 모바일 신분증을 기반으로 휴대폰에서 영지식 증명을 생성합니다.",
    "step3": "서비스에서 증명 검증",
    "step3Text": "서비스는 전달받은 증명을 검증해 조건 충족 여부를 확인합니다.",
    "service": "증명을 요청한 서비스",
    "userApp": "KProof 앱",
    "verification": "증명 검증",
    "usesTitle": "한국 모바일 신분증 인증을\n외부 서비스에 연결합니다",
    "usesIntro": "외부 서비스는 한국 모바일 신분증 시스템을 직접 연계하지 않고도 KProof를 통해 필요한 자격을 검증할 수 있습니다.",
    "use1": "해외 서비스의 가입·이용 조건 확인",
    "use1Text": "해외 서비스도 한국 모바일 신분증에 기반한 증명으로 가입·이용 조건을 확인할 수 있습니다.",
    "use3": "스마트 컨트랙트에서 자격 검증",
    "use3Text": "영지식 증명을 스마트 컨트랙트에서 검증해 참여 자격을 확인할 수 있습니다.",
    "devTitle": "모바일 신분증 직접 연계 없이\nKProof SDK로 인증을 추가하세요",
    "devIntro": "KProof가 모바일 신분증 시스템과의 연계를 담당합니다. 개발자는 SDK로 증명을 요청하고, 서비스에서 결과를 검증할 수 있습니다.",
    "techTitle": "서버와 스마트 컨트랙트에서 검증",
    "techText": "ZKProofport의 검증 기술을 기반으로 합니다. 증명은 서버에서 검증하거나 EVM 스마트 컨트랙트에서 직접 확인할 수 있습니다.",
    "docs": "개발자 문서",
    "api": "API 문서",
    "soon": "준비 중",
    "github": "KProof GitHub",
    "devNote": "SDK, 소스 코드, 개발자 문서와 데모의 공개 링크를 준비 중입니다.",
    "faqTitle": "자주 묻는 질문",
    "q1": "모바일 신분증과 KProof는 어떻게 다른가요?",
    "a1": "모바일 신분증으로 신원을 확인하거나 필요한 정보만 선택해 제공할 수 있습니다. KProof는 모바일 신분증을 기반으로 영지식 증명을 생성합니다. 외부 서비스와 스마트 컨트랙트는 신분증 원본을 받지 않고도 필요한 조건을 검증할 수 있습니다.",
    "q2": "개발자가 모바일 신분증 시스템을 직접 연동해야 하나요?",
    "a2": "아니요. KProof의 증명·검증 기능을 이용하는 서비스는 별도의 모바일 신분증 연계 시스템을 구축할 필요가 없습니다. KProof SDK로 증명을 요청하고 결과를 검증하면 됩니다.",
    "q4": "서비스에는 어떤 정보가 전달되나요?",
    "a4": "서비스에는 요청한 조건에 대한 영지식 증명과 검증에 필요한 공개 데이터가 전달됩니다. 신분증 원본은 제공하지 않습니다.",
    "operator": "개발 및 운영:",
    "support": "제품 지원",
    "policy": "개인정보처리방침 · 준비 중",
    "terms": "이용약관 · 준비 중",
    "official": "모바일 신분증 공식 안내",
    "footerNav": "서비스 관련 링크",
    "title": "KProof | Korean Proof",
    "description": "KProof는 한국 모바일 신분증으로 연령·거주 지역 등의 조건을 증명합니다. 서비스에는 신분증 원본 대신 영지식 증명을 전달합니다.",
    "languageChanged": "한국어로 표시합니다.",
    "privateLabel": "서비스에 신분증 원본을 전달하지 않습니다",
    "proofOnly": "요청한 조건의 영지식 증명",
    "heroLine1": "모바일 신분증으로",
    "heroLine2": "필요한 자격을 증명하세요",
    "storyEndLabel": "연령 조건 확인",
    "storyEndTitle": "생년월일을 공개하지 않고\n성인 여부를 확인합니다",
    "storyEndText": "서비스는 만 19세 이상인지 확인할 수 있습니다. 이름이나 생년월일 등의 신분증 정보는 전달되지 않습니다.",
    "scrollHint": "스크롤하여 살펴보기",
    "sceneNav": "증명 과정 선택",
    "scene1": "신분증 정보",
    "scene2": "정보 보호",
    "scene3": "증명 결과",
    "proofTabs": "증명 항목 선택",
    "proofAge": "연령",
    "proofRegion": "거주 지역",
    "proofEligibility": "이용 자격",
    "proofAgeTitle": "성인 여부 확인",
    "proofAgeText": "생년월일을 공개하지 않고 서비스가 정한 연령 조건을 충족하는지 증명합니다.",
    "proofRegionTitle": "거주 지역 확인",
    "proofRegionText": "상세 주소를 공개하지 않고 서비스가 지정한 지역에 거주하는지 증명합니다.",
    "proofEligibilityTitle": "이용 자격 확인",
    "proofEligibilityText": "회원 가입이나 행사 참여에 필요한 자격 조건을 충족하는지 증명합니다.",
    "journeyTabs": "이용 단계 선택",
    "generateCaption": "등록한 모바일 신분증을 기반으로 휴대폰에서 영지식 증명을 생성합니다.",
    "markLabel": "브랜드 소개",
    "markText": "KProof는 Korean Proof의 줄임말입니다. 한국 모바일 신분증을 이용해 필요한 조건을 증명할 수 있도록 개발하고 있습니다.",
    "mobileID": "모바일 신분증",
    "cardSample": "화면 예시",
    "cardCaption": "설명을 위해 재구성한 모바일 신분증 이미지",
    "flowLabel": "증명 요청과 검증 과정",
    "protocolLabel": "증명 요청과 검증 흐름",
    "protocolRequest": "증명 요청",
    "protocolProof": "증명 생성",
    "protocolVerify": "증명 검증",
    "brandTagline": "한국 모바일 신분증으로 필요한 조건을 증명합니다.",
    "brandKit": "브랜드 자료",
    "brandGuide": "브랜드 가이드",
    "heroResult": "만 19세 이상입니다",
    "previousStep": "이전 단계",
    "nextStep": "다음 단계",
    "appStepStatus": "현재 이용 단계",
    "appStep1": "잠금 해제",
    "appStep1Text": "Face ID로 앱 잠금을 해제합니다. 등록된 신분증을 확인할 수 있습니다.",
    "appStep2": "등록된 신분증",
    "appStep2Text": "처음 이용할 때 모바일 신분증 앱에서 신분증을 가져와 등록합니다. 이후 증명에 사용할 신분증을 선택할 수 있습니다.",
    "appStep3": "증명 항목 선택",
    "appStep3Text": "본인 확인, 나이, 거주 시·도 중 증명할 항목을 선택합니다. QR 코드로 서비스의 증명 요청을 받을 수도 있습니다.",
    "appStep4": "증명 요청 확인",
    "appStep4Text": "서비스가 확인하려는 조건과 전달할 정보를 확인한 뒤 승인합니다.",
    "appStep5": "증명 생성",
    "appStep5Text": "등록한 신분증으로 휴대폰에서 영지식 증명을 생성합니다. 신분증 원본은 요청한 서비스에 전달하지 않습니다.",
    "appStep6": "증명 전달",
    "appStep6Text": "요청한 서비스에 증명과 검증에 필요한 공개 데이터를 전달합니다. 서비스는 이를 검증해 조건 충족 여부를 확인합니다.",
    "uiLockIntro": "저장된 신분증을 보려면\n앱 잠금을 해제하세요.",
    "uiUnlock": "Face ID로 잠금 해제",
    "uiPasscode": "기기 암호로 잠금 해제",
    "uiLockNote": "앱을 열거나 다른 앱을 1분 넘게 사용한 뒤 돌아오면 잠금 해제가 필요해요.",
    "uiWalletSummary": "이 신분증으로 확인할 수 있는 항목 3가지",
    "uiExpand": "펼치기",
    "uiDriver": "모바일 운전면허증",
    "uiVeteran": "모바일 국가보훈등록증",
    "uiResident": "모바일 외국인등록증",
    "uiNational": "모바일 주민등록증",
    "uiLicense": "면허",
    "uiVeteranTag": "보훈",
    "uiResidentTag": "외국인",
    "uiIDTag": "주민",
    "uiHolder": "홍길동",
    "uiAddress": "주소",
    "uiCity": "전북특별자치도 전주시",
    "uiIssuer": "정부 전자서명 확인 완료",
    "uiIssued": "모바일 신분증 앱에서 발급 · 2026.10.27",
    "uiHide": "정보 가리기",
    "uiProve": "증명하기",
    "uiWallet": "신분증",
    "uiProof": "증명",
    "uiHistory": "기록",
    "uiSettings": "설정",
    "uiProofIntro": "증명할 항목을 선택하세요. 신분증 원본은 서비스에 전달하지 않아요.",
    "uiQR": "증명 요청 QR 스캔",
    "uiQRNote": "서비스 화면의 QR 코드를 스캔하세요",
    "uiCanProve": "증명할 수 있는 항목",
    "uiIdentity": "본인 확인",
    "uiIdentityNote": "유효한 모바일 신분증을 가지고 있는지 확인해요",
    "uiAge": "나이",
    "uiAgeNote": "생년월일 공개 없이 연령 조건을 증명해요",
    "uiRegion": "거주 시·도",
    "uiRegionNote": "상세 주소를 공개하지 않고 거주 시·도를 증명해요",
    "uiIDSource": "주민등록증",
    "uiProofFoot": "기본 신분증을 설정하면 다음에도 같은 신분증이 선택돼요.",
    "uiRequest": "증명 요청",
    "uiTimeLeft": "4:52 남음",
    "uiDemo": "KProof 데모",
    "uiRequestTitle": "만 19세 이상인지\n확인해 주세요",
    "uiSource": "모바일 주민등록증으로 증명",
    "uiChange": "바꾸기",
    "uiShared": "서비스가 확인하는 내용",
    "uiAgeFact": "만 19세 이상 여부",
    "uiPrivate": "서비스에 공개하지 않는 정보",
    "uiLicenseNumber": "면허 번호",
    "uiPhoto": "사진",
    "uiApprove": "Face ID로 확인하고 증명",
    "uiDecline": "요청 거절",
    "uiCreating": "증명을 생성하고 있어요",
    "uiCreatingNote": "휴대폰에서 영지식 증명을 생성하고 있어요.\n신분증 원본은 요청한 서비스에 전달되지 않아요.",
    "uiSignature": "정부 전자서명 확인",
    "uiAgeCheck": "만 19세 이상 여부 확인",
    "uiZK": "영지식 증명 생성",
    "uiSend": "KProof 데모로 증명 전송",
    "uiViewOriginal": "내 신분증 정보 보기",
    "uiCancel": "취소",
    "uiSent": "증명을 전송했어요",
    "uiSentNote": "KProof 데모에 연령 증명과 검증에 필요한 데이터를 전송했어요.",
    "uiRecipient": "요청한 서비스",
    "uiVerified": "증명 항목",
    "uiDuration": "증명 생성 시간",
    "uiDurationValue": "6.1초",
    "uiWhen": "전송 일시",
    "uiReturn": "서비스로 돌아가기",
    "uiViewHistory": "기록에서 보기",
    "sdk": "SDK",
    "source": "소스 코드",
    "demo": "데모"
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
    "heroHeading": "Prove your eligibility\nwith Korean Mobile ID.",
    "intro": "Use Korean Mobile ID to prove conditions such as age or region of residence.\nServices receive zero-knowledge proofs instead of the original ID.",
    "learn": "How it works",
    "contact": "Technical inquiries",
    "by": "KProof, developed by Masse Labs",
    "example": "Illustrative screen",
    "exampleCaption": "A concept screen illustrating the planned experience.",
    "appBrand": "KProof",
    "request": "Proof request",
    "requestDesc": "Review the requested conditions and the information to be shared.",
    "checkItem": "Proof type",
    "age": "Age 19 or older",
    "requester": "Requested by",
    "shared": "What the service checks",
    "ageResult": "Whether you are 19 or older",
    "notShared": "Information not shared with the service",
    "name": "Name",
    "birth": "Date of birth",
    "idNumber": "ID number",
    "result": "Verification result",
    "met": "Requirement met",
    "resultNote": "Share that you are 19 or older,\nwithout your date of birth.",
    "featuresTitle": "What can you prove?",
    "featuresIntro": "Prove the conditions a service needs, such as age or region of residence.",
    "feature1": "SDK integration",
    "feature1Text": "Request proofs through the SDK without integrating directly with the Mobile ID system.",
    "feature2": "Onchain and offchain verification",
    "feature2Text": "Verify proofs with smart contracts or compatible verifiers.",
    "howTitle": "How to use KProof",
    "howIntro": "Follow the steps from importing your ID to completing a proof.",
    "step1": "Review the request",
    "step1Text": "Review the conditions the service requests and the information to be shared.",
    "step2": "Create a proof on your phone",
    "step2Text": "Create a proof on your phone using your imported Mobile ID.",
    "step3": "Verify the proof",
    "step3Text": "The service verifies the proof and checks that its requirement is met.",
    "service": "Requesting service",
    "userApp": "User’s app",
    "verification": "Service verification",
    "usesTitle": "Use Korean Mobile ID\nwith external services",
    "usesIntro": "External services can verify eligibility through KProof without integrating directly with the Korean Mobile ID system.",
    "use1": "Eligibility checks for international services",
    "use1Text": "International services can verify registration and access requirements using proofs based on Korean Mobile ID.",
    "use3": "Eligibility checks in smart contracts",
    "use3Text": "Verify zero-knowledge proofs in smart contracts to check participation requirements.",
    "devTitle": "Add identity checks with KProof SDK.\nNo direct Mobile ID integration needed.",
    "devIntro": "KProof handles integration with the Mobile ID system. Developers request proofs through the SDK and verify them in their services.",
    "techTitle": "Verify on servers and in smart contracts",
    "techText": "Built on ZKProofport’s verification technology. Verify proofs on a server or directly in EVM smart contracts.",
    "docs": "Developer docs",
    "api": "API Reference",
    "soon": "Coming soon",
    "github": "KProof GitHub",
    "devNote": "Public links for the SDK, source code, documentation and demo are being prepared.",
    "faqTitle": "Frequently asked questions",
    "q1": "How is KProof different from Korean Mobile ID?",
    "a1": "Korean Mobile ID provides identity credentials and lets users share selected information. KProof generates zero-knowledge proofs from those credentials. External services and smart contracts can verify the required conditions without receiving the original ID.",
    "q2": "Do developers need to integrate Korean Mobile ID directly?",
    "a2": "No. Services using KProof’s proof generation and verification features do not need a separate Mobile ID integration. Use KProof SDK to request proofs and verify the results.",
    "q4": "What information is shared with applications?",
    "a4": "Services receive a zero-knowledge proof of the requested condition and the public data needed to verify it. The original ID is not shared.",
    "operator": "Developed and operated by",
    "support": "Product support",
    "policy": "Privacy policy · Coming soon",
    "terms": "Terms of service · Coming soon",
    "official": "Official Korean Mobile ID website",
    "footerNav": "Service links",
    "title": "KProof | Korean Proof",
    "description": "KProof generates zero-knowledge proofs of age, region and other eligibility requirements from Korean Mobile ID. Services receive proofs instead of the original ID.",
    "languageChanged": "Language changed to English.",
    "privateLabel": "The original ID is not shared with the service",
    "proofOnly": "A zero-knowledge proof of the requested condition",
    "heroLine1": "Prove your eligibility",
    "heroLine2": "with Korean Mobile ID.",
    "storyEndLabel": "AGE REQUIREMENT",
    "storyEndTitle": "Verify adult status\nwithout disclosing a date of birth.",
    "storyEndText": "The service can verify that you are 19 or older. ID details such as your name and date of birth are not shared.",
    "scrollHint": "Scroll to discover",
    "sceneNav": "Choose a story scene",
    "scene1": "ID details",
    "scene2": "Privacy",
    "scene3": "Proof result",
    "proofTabs": "Choose a proof example",
    "proofAge": "Age",
    "proofRegion": "Region",
    "proofEligibility": "Eligibility",
    "proofAgeTitle": "Adult eligibility",
    "proofAgeText": "Prove that you meet the service’s age requirement without sharing your date of birth.",
    "proofRegionTitle": "Region of residence",
    "proofRegionText": "Prove that you meet the service’s regional requirement without sharing your full address.",
    "proofEligibilityTitle": "Service eligibility",
    "proofEligibilityText": "Prove that you meet the requirements for access or participation.",
    "journeyTabs": "Choose a step",
    "generateCaption": "Create a proof on your phone using your imported Mobile ID.",
    "markLabel": "ABOUT KPROOF",
    "markText": "KProof is short for Korean Proof. We’re developing it to prove eligibility requirements using Korean Mobile ID.",
    "mobileID": "Mobile identity",
    "cardSample": "Illustrative sample",
    "cardCaption": "Illustrative mobile identity card",
    "flowLabel": "From request to verification",
    "protocolLabel": "Service integration flow",
    "protocolRequest": "Request",
    "protocolProof": "Prove",
    "protocolVerify": "Verify",
    "brandTagline": "Prove the required conditions with Korean Mobile ID.",
    "brandKit": "Brand kit",
    "brandGuide": "Brand guidelines",
    "heroResult": "Age 19 or older",
    "previousStep": "Previous step",
    "nextStep": "Next step",
    "appStepStatus": "Current step",
    "appStep1": "Unlock",
    "appStep1Text": "Unlock the app with Face ID to view your registered IDs.",
    "appStep2": "Registered IDs",
    "appStep2Text": "Import and register your ID from the Mobile ID app when you first get started. You can then select an ID to use for proofs.",
    "appStep3": "Choose a proof",
    "appStep3Text": "Choose identity, age or region of residence, or scan a QR code to receive a service’s proof request.",
    "appStep4": "Review request",
    "appStep4Text": "Review the requested condition and what the service will receive, then approve.",
    "appStep5": "Create proof",
    "appStep5Text": "Generate a zero-knowledge proof on your phone using your registered ID. The original ID is not shared with the requesting service.",
    "appStep6": "Proof sent",
    "appStep6Text": "Send the proof and the public data needed to verify it to the requesting service. The service verifies the proof to check that its conditions are met.",
    "uiLockIntro": "Unlock the app\nto view your stored ID.",
    "uiUnlock": "Unlock with Face ID",
    "uiPasscode": "Use device passcode",
    "uiLockNote": "Unlock the app when you open it or return after more than a minute in another app.",
    "uiWalletSummary": "3 things you can prove with this ID",
    "uiExpand": "Expand",
    "uiDriver": "Mobile driver’s license",
    "uiVeteran": "Mobile veteran ID",
    "uiResident": "Mobile residence card",
    "uiNational": "Mobile national ID",
    "uiLicense": "License",
    "uiVeteranTag": "Veteran",
    "uiResidentTag": "Resident",
    "uiIDTag": "ID",
    "uiHolder": "Gildong Hong",
    "uiAddress": "Address",
    "uiCity": "Jeonju, Jeonbuk",
    "uiIssuer": "Korean government signature verified",
    "uiIssued": "Issued via Mobile ID · 2026.10.27",
    "uiHide": "Hide details",
    "uiProve": "Prove",
    "uiWallet": "Wallet",
    "uiProof": "Proof",
    "uiHistory": "History",
    "uiSettings": "Settings",
    "uiProofIntro": "Choose a condition to prove. The original ID is not shared with the service.",
    "uiQR": "Scan a request QR",
    "uiQRNote": "Scan the QR code shown by the service",
    "uiCanProve": "What you can prove",
    "uiIdentity": "Identity",
    "uiIdentityNote": "That you hold a valid mobile ID",
    "uiAge": "Age",
    "uiAgeNote": "That you meet the age requirement. Your birth date stays private.",
    "uiRegion": "Region",
    "uiRegionNote": "That you live in a given region. Your address stays private.",
    "uiIDSource": "National ID",
    "uiProofFoot": "Set a default ID to use the same ID for future requests.",
    "uiRequest": "Proof request",
    "uiTimeLeft": "4:52 left",
    "uiDemo": "KProof demo",
    "uiRequestTitle": "Confirm you are\n19 or older",
    "uiSource": "Prove with your national ID",
    "uiChange": "Change",
    "uiShared": "What the service checks",
    "uiAgeFact": "Whether you are 19 or older",
    "uiPrivate": "Not shared with the service",
    "uiLicenseNumber": "License number",
    "uiPhoto": "Photo",
    "uiApprove": "Confirm with Face ID and prove",
    "uiDecline": "Decline",
    "uiCreating": "Creating your proof",
    "uiCreatingNote": "Generating a zero-knowledge proof on your phone.\nThe original ID is not shared with the requesting service.",
    "uiSignature": "Verify the Korean government signature",
    "uiAgeCheck": "Check that you are 19 or older",
    "uiZK": "Create a zero-knowledge proof",
    "uiSend": "Send to KProof demo",
    "uiViewOriginal": "View original details (not shared)",
    "uiCancel": "Cancel",
    "uiSent": "Proof sent",
    "uiSentNote": "KProof demo received the age proof and the inputs needed to verify it.",
    "uiRecipient": "Requesting service",
    "uiVerified": "Proof type",
    "uiDuration": "Proof time",
    "uiDurationValue": "6.1 seconds",
    "uiWhen": "Sent at",
    "uiReturn": "Return to the service",
    "uiViewHistory": "View in history",
    "sdk": "SDK",
    "source": "Source code",
    "demo": "Demo"
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
  document.querySelectorAll("[data-i18n-alt]").forEach(element => element.alt = copy[element.dataset.i18nAlt]);
  document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", copy[element.dataset.i18nAria]));
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector('meta[property="og:locale"]').content = language === "ko" ? "ko_KR" : "en_US";
  document.querySelector('meta[name="twitter:title"]').content = copy.title;
  document.querySelector('meta[name="twitter:description"]').content = copy.description;
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
  age: {title: 'proofAgeTitle', description: 'proofAgeText', glyph: '19', suffix: '+'},
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
  if (index < 0 || index >= 6) return;
  const panel = document.querySelector('#journey-panel');
  panel.dataset.step = String(index);
  document.querySelector('.app-step-counter').textContent = `${String(index + 1).padStart(2, "0")} / 06`;
  document.querySelector('[data-step-prev]').disabled = index === 0;
  document.querySelector('[data-step-next]').disabled = index === 5;
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
document.querySelector('[data-step-prev]').addEventListener('click', () => selectStep(Number(document.querySelector('#journey-panel').dataset.step) - 1));
document.querySelector('[data-step-next]').addEventListener('click', () => selectStep(Number(document.querySelector('#journey-panel').dataset.step) + 1));

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
  motionDetails.mark.parentElement.style.setProperty('--name-reveal', ramp(mark, .15, .85).toFixed(4));
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
    motionDetails.mark.parentElement.style.removeProperty('--name-reveal');
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
  const nextStep = Math.min(5, Math.floor(journeyProgress * 6));
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
