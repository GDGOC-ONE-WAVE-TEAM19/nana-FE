# StepIn

> **취업 준비 과정을 오픈소스처럼 공유하는 플랫폼**
>
> ONE WAVE 해커톤 프로젝트 — 취업난 x 검증

<br/>

## 한 줄 소개

"네카라쿠배 간 선배한테 물어보면 '그냥 열심히 했어'밖에 안 나와요. 구체적으로 **뭘, 어떤 순서로, 얼마나** 했는지가 궁금한 건데... 그 과정을 깃허브 레포 보듯이 열어볼 수 있으면 좋겠어요."

StepIn은 합격자의 취업 준비 과정을 **커밋 히스토리처럼 투명하게 공개**하고, 취준생이 그 로드맵을 **내 일정으로 복사해 실행**할 수 있는 플랫폼입니다.

<br/>

## 목차

- [페르소나](#페르소나)
- [Pain Points](#pain-points)
- [핵심 기능](#핵심-기능)
- [기능 간 관계도](#기능-간-관계도)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [라우팅](#라우팅)
- [디자인 토큰](#디자인-토큰)
- [API](#api)
- [상태 관리](#상태-관리)
- [코드 컨벤션](#코드-컨벤션)
- [향후 확장](#향후-확장)

<br/>

---

## 페르소나

> 초기 타겟: **개발(SW Engineer) 직무 취준생**

| 항목 | 내용 |
|------|------|
| 이름 (가상) | 이준호 |
| 나이 | 23세 (4학년 1학기) |
| 전공 | 컴퓨터공학 |
| 기술 스택 | React, Spring Boot (중급), AWS (입문) |
| 목표 기업군 | 네이버 · 카카오 · 토스 등 IT 대기업 / 유망 시리즈B 스타트업 |
| 취업 준비 기간 | 약 8개월째 |
| 사용 중인 도구 | GitHub, 노션(포트폴리오), 프로그래머스, 에브리타임 |

### 감정 상태

| 감정 | 상세 |
|------|------|
| 막막함 | "코테 · 프로젝트 · CS 공부 · 이력서... 할 건 많은데 **뭐부터 해야 할지 모르겠다**" |
| 비교 불안 | 인스타 · 링크드인에 올라오는 합격 후기 — 결과만 보이고 과정은 안 보임 |
| 정보 비대칭 | 같은 학교 선배도 "나는 좀 특수 케이스라..."로 말을 아낌 |
| 자격지심 | 대외활동 · 인턴 경험이 없어서 쓸 거리 자체가 부족하다고 느낌 |
| 나태함과의 싸움 | 혼자 준비하니 페이스 조절이 안 됨 |

### 목표

| 단기 (3개월) | 중기 (6개월) | 장기 (1년) |
|-------------|------------|-----------|
| 목표 기업 3곳 설정, 기업별 준비 루틴 시작 | 코테 통과 + 포트폴리오 프로젝트 2개 완성 | 목표 기업 중 1곳 이상 합격 |
| 비슷한 출발선 합격자의 과정 벤치마킹 | 모의 면접 · CS 스터디 완료 | 입사 후 직무 미스매치 없이 정착 |

<br/>

---

## Pain Points

| # | Pain Point | 상세 |
|---|-----------|------|
| P1 | **취뽀까지의 세부 과정을 모른다** | "6개월 안에 네카라 갈 수 있다"는 말은 많은데, 월별 · 주별로 뭘 해야 하는지 구체적인 로드맵이 없다. |
| P2 | **성공 과정이 오픈소스처럼 공개되지 않는다** | GitHub은 코드를 오픈하지만, 취뽀 과정은 블랙박스다. 합격자 후기는 "결과 스냅샷"이지 "커밋 히스토리"가 아니다. |
| P3 | **내 현재 위치를 객관적으로 모른다** | 코테 · 프로젝트 · CS · 포트폴리오 등 종합적인 준비 상태를 측정할 기준이 없다. |
| P4 | **정보가 파편화되어 있다** | 코테는 프로그래머스, 이력서는 노션, 후기는 블로그, 질문은 오픈카톡 — 하나의 맥락으로 엮어주는 곳이 없다. |
| P5 | **혼자서는 페이스를 유지하기 어렵다** | 강제성이 없어 잘하고 있는 건지, 늦어지고 있는 건지 실시간 감각이 없다. |

<br/>

---

## 핵심 기능

> P1 → 기능 1, P2 → 기능 2, P3 → 기능 3, P5 → 기능 4
> P4는 기능 1~4가 하나의 플랫폼에 통합되면서 자연스럽게 해소

### 기능 1. 합격자 투두 묶음 (메인)

> 목표 기업을 설정하면, 실제 합격자의 준비 과정이 타임라인 + 투두 리스트로 펼쳐진다.

**유저 플로우**

```
온보딩 → 기업/직무 선택
  → 합격자 번들 리스트 ("네이버 백엔드 합격자 3명의 준비 과정")
    → 번들 상세 (월별 투두 묶음)
      → 내 플랜에 복사 & 커스텀
        → 투두 체크하며 진행 → 대시보드에 반영
```

**시드 데이터 예시** — 네이버 백엔드 6개월 과정

```
Month 1  기초 다지기     코테 실버 50문제 / CS 자료구조 7가지 / 사이드 프로젝트 주제 선정
Month 2  코테 집중       골드 진입 30문제 / 유형별 정리 / 네트워크 TCP·UDP·HTTP
Month 3  프로젝트 본격화  Redis 캐싱 + API 성능 개선 / Docker 컨테이너화 / OS 핵심 정리
Month 4  포트폴리오 정리  트러블슈팅 문서화 / README + 아키텍처 다이어그램 / 이력서 수치화
Month 5  서류 + 면접     지원서 작성 + 피드백 / CS Top 50 모의 답변 / 실전 모의고사
Month 6  실전           코테 응시 → 1차 기술면접 → 2차 임원면접 → 합격
```

### 기능 2. 취뽀 과정 오픈소스

> 합격자의 준비 과정을 GitHub 커밋 로그처럼 시간순으로 투명하게 탐색할 수 있다.

```
2025.03 ── 시작     "6개월 플랜 세움. 백준 실버부터 시작."
2025.04 ── 전환점   "코테만 하다 프로젝트 시작 — 면접에서 할 말이 없을 것 같아서"
2025.06 ── 몰입     "Redis 도입하면서 성장 체감. 캐시 무효화 삽질 3일 → 면접 최다 질문 주제"
2025.08 ── 서류     "이력서 3번 갈아엎음. 멘토 피드백 후 성과 수치화"
2025.09 ── 합격     "되돌아보면 Month 3~4가 가장 중요했다"
```

사용자가 쌓은 활동 로그는 합격 후 자동으로 다음 취준생의 오픈소스 타임라인이 된다. (**선순환 구조**)

### 기능 3. 내 준비 상태 대시보드

> 합격자 평균과 내 현재 진행률을 비교하여 한눈에 보여준다.

```
전체 진행률  ████████░░░░  62%  (합격자 평균 이 시점: 71%)

카테고리별
  코테       ████████████░  85%   합격자 avg 70%
  프로젝트   █████░░░░░░░   40%   합격자 avg 65%  ⚠
  CS         ██████░░░░░░   50%   합격자 avg 55%
  이력서     ██░░░░░░░░░░   15%   합격자 avg 25%

활동 히트맵 (최근 3개월)
  ░░█░██░█████░░██████░██░░░█████

💡 "프로젝트가 평균 대비 25%p 부족해요. 이번 주 프로젝트 투두에 집중해보세요"
```

### 기능 4. 고스트 페이스메이커 (Ghost Pacemaker)

> 마리오 카트의 '고스트' 모드처럼, 과거 합격자의 기록과 실시간으로 경주한다.

합격자의 활동 로그가 **상대 날짜(D+N)** 기준으로 내 타임라인에 오버레이된다.

```
오늘: 내 취준 D+90

👻 고스트 "코딩왕준혁" D+90 기록:
  ✅ 백준 골드2 문제 3개 풀이
  ✅ Spring Boot 프로젝트 Redis 캐싱 구현
  📝 "DP 감 잡히기 시작. 이제 그래프로 넘어가야겠다"
```

| 상태 | 표시 |
|------|------|
| 고스트보다 앞서 있을 때 | "준혁님의 D+90보다 2일 앞서가고 있어요!" |
| 고스트와 비슷할 때 | "준혁님의 페이스와 나란히 달리고 있어요" |
| 고스트보다 뒤처졌을 때 | "준혁님은 이 시점에 코테 85% 완료였어요. 따라잡아볼까요?" |

<br/>

---

## 기능 간 관계도

```
기능 1 합격자 투두 묶음              기능 2 오픈소스 타임라인
  (합격자 로드맵 복사)                 (합격자 과정 열람)
        │                                  │
        │ 투두 체크 데이터                   │ 합격 후 로그가
        │ 실시간 반영                        │ 자동 오픈소스화
        ▼                                  ▼
기능 3 대시보드          ◄────►     기능 4 고스트 페이스메이커
  (내 진행률 vs                      (합격자 D+N 기록과
   합격자 평균)                       실시간 병주)
        │                                  │
        └──────────────┬───────────────────┘
                       ▼
                📊 통합 인사이트
         "어디가 부족한지 + 지금 뭘 해야 하는지"
```

- **1 → 3** : 투두를 체크하면 대시보드 진행률이 자동 갱신
- **1 → 4** : 선택한 합격자 번들이 고스트의 원본 데이터
- **3 ↔ 4** : 대시보드에 고스트 진행률이 마커로 오버레이
- **1 → 2** : 사용자가 합격하면, 쌓인 활동 로그가 다음 취준생의 오픈소스 타임라인이 됨

<br/>

---

## 기술 스택

| Category | Tool | Version |
|----------|------|---------|
| Framework | React | 19 |
| Language | TypeScript | 5.8 |
| Build | Vite | 6 |
| Styling | Tailwind CSS | 4 (`@import "tailwindcss"`) |
| Server State | TanStack React Query | 5 |
| Client State | Zustand | 5 |
| HTTP | Axios + OpenAPI Generated Client | 1.x |
| Routing | React Router | 7 |
| Lint | ESLint (flat config) | 9 |

<br/>

---

## 시작하기

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# VITE_API_URL 값 설정

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# ESLint
npm run lint

# OpenAPI 클라이언트 생성
npm run generate-api
```

<br/>

---

## 프로젝트 구조

```
src/
├── app/                        # 앱 진입점
│   ├── App.tsx                 # QueryClientProvider + RouterProvider
│   └── routes.tsx              # React Router v7 라우트 설정
│
├── pages/                      # 라우트별 페이지
│   ├── LandingPage.tsx         # 랜딩 (7개 섹션)
│   ├── OnboardingPage.tsx      # 온보딩 플로우
│   ├── BundlePage.tsx          # 합격자 번들 목록
│   ├── RoadmapDetailPage.tsx   # 번들 상세 (로드맵)
│   ├── DashboardPage.tsx       # 대시보드 + 투두
│   └── MyPlanPage.tsx          # 내 플랜
│
├── features/                   # 기능 단위 모듈 (Feature-Sliced)
│   ├── onboarding/             # 온보딩 — StepIndicator, FieldSelector, CompanySelector
│   ├── bundle/                 # 번들 목록 — BundleCard, Filters, Pagination, CopyButton
│   ├── bundle-detail/          # 번들 상세 — RoadmapHero, RoadmapStep, RoadmapCTA
│   ├── dashboard/              # 대시보드 — ProgressSection, TodayPlanCard, WeeklyBalance, TodoList
│   ├── landing/                # 랜딩 — Header, Hero, Stats, CoreFeatures, HowItWorks, Persona, Footer
│   └── my-plan/                # 내 플랜 — TodoList, TodoItem, FilterSidebar
│
└── shared/                     # 공유 모듈
    ├── api/                    # OpenAPI 자동생성 클라이언트
    ├── components/
    │   ├── layout/             # MainLayout, DashboardLayout, Sidebar, BottomNav, MainNav, Footer
    │   └── ui/                 # Button, Card, Badge, Modal, ProgressBar, InitialAvatar
    ├── lib/                    # api.ts, endpoints.ts, constants.ts, utils.ts
    └── types/                  # domain.ts, api.ts, common.ts
```

<br/>

---

## 라우팅

| Path | Page | Layout |
|------|------|--------|
| `/` | LandingPage | 없음 (자체 Header/Footer) |
| `/onboarding` | OnboardingPage | 없음 |
| `/bundles` | BundlePage | MainLayout |
| `/bundles/:authorId` | RoadmapDetailPage | MainLayout |
| `/dashboard` | DashboardPage | DashboardLayout |
| `/my-plan` | MyPlanPage | MainLayout |

### 랜딩 페이지 섹션 흐름

```
LandingHeader → HeroSection → StatsSection → CoreFeaturesSection → HowItWorksSection → PersonaSection → LandingFooter
```

스토리텔링: **Hook → Problem → Solution → How → Proof → CTA**

<br/>

---

## 디자인 토큰

| Token | Value |
|-------|-------|
| Primary | `#5048e5` |
| Primary Light | `#7B4EFF` |
| Gradient | `from-[#5048e5] to-[#7B4EFF]` |
| Shadow | `shadow-[#5048e5]/30` |
| Card shadow | `shadow-[0_4px_20px_rgba(0,0,0,0.05)]` |
| Border radius | `rounded-2xl` (cards), `rounded-full` (buttons) |
| Max width | `max-w-7xl` |

### 카테고리 색상

| Category | Background | Text |
|----------|-----------|------|
| 코테 | `bg-[#E3F2FD]` | `text-blue-600` |
| CS | `bg-[#F3E5F5]` | `text-purple-700` |
| 프로젝트 | `bg-[#E0F2F1]` | `text-teal-700` |

<br/>

---

## API

- **Base URL**: `VITE_API_URL` 환경변수
- **클라이언트**: `src/shared/api/` — OpenAPI Generator로 자동생성
- **Axios 인스턴스**: `src/shared/lib/api.ts` — timeout 10s, error interceptor
- **엔드포인트 상수**: `src/shared/lib/endpoints.ts` — `ENDPOINTS` 객체
- **Dev Proxy**: `/v1/*` → `https://stepin.jeje.work`

<br/>

---

## 상태 관리

| 구분 | 도구 | 사용처 |
|------|------|--------|
| 서버 상태 | React Query | `useQuery` / `useMutation`, staleTime 5분, retry 1 |
| 클라이언트 상태 | Zustand | feature별 stores/ 디렉토리 |

**Query Key 컨벤션**: `['bundles']`, `['todos']`, `['dashboard']` 등

<br/>

---

## 코드 컨벤션

| 규칙 | 설명 |
|------|------|
| 세미콜론 | 없음 (no semicolons) |
| 컴포넌트/페이지 | `export default function` |
| 훅 | `export function` + `use` 접두사 |
| 스토어 | `use` + `Store` (예: `useTodoStore`) |
| 상수 | `UPPER_SNAKE_CASE` |
| 파일명 | 컴포넌트 PascalCase, 훅 camelCase |
| 아키텍처 | Feature-Sliced — feature 간 직접 import 지양, shared를 통해 공유 |
| Tailwind | v4 `@import "tailwindcss"` + `@tailwindcss/vite` 플러그인 |
| 애니메이션 | CSS-only (외부 라이브러리 없음) — `useInView` + `useCountUp` 커스텀 훅 |
| 타입 | `as const` assertion으로 상수 객체 타입 보장 |

<br/>

---

## 향후 확장

> 초기 MVP는 **개발 직무**에 집중하되, 플랫폼 구조는 직무 확장이 가능하도록 설계

| 직무 | 투두 묶음 예시 | 시기 |
|------|-------------|------|
| UX/UI 디자인 | 피그마 포트폴리오, 디자인 챌린지, 사용성 테스트 기록 | Phase 2 |
| PM/기획 | PRD 작성 연습, 데이터 분석 프로젝트, 사용자 인터뷰 기록 | Phase 2 |
| 데이터 분석 | SQL · Python 분석 프로젝트, 캐글 대회, 대시보드 제작 | Phase 2 |
| 마케팅 | 퍼포먼스 마케팅 캠페인, GA 분석, 콘텐츠 기획안 | Phase 3 |

각 직무의 합격자 투두 묶음이 축적될수록 **플랫폼의 데이터 해자(moat)**가 깊어지는 구조.

<br/>

---

## Merged PRs

| PR | Description |
|----|-------------|
| #1~3 | 온보딩 + 번들 + 랜딩 초기 구현 |
| #7~8 | 대시보드 + 레이아웃 |
| #9 | API 연동 (bundle, bundle-detail, my-plan) |
| #10 | 버그수정 (온보딩 CTA, 스토어 연동) |
| #12 | 라우터 연결 수정 |
| #13 | 랜딩 페이지 UI/UX 전면 리팩토링 (5→7 섹션) |
| #14 | 디테일 페이지 리팩토링 |
| #15 | 대시보드 UI 개선 + 네비게이션 라우팅 연결 + CORS 설정 |

<br/>

---

<p align="center">
  <strong>StepIn</strong> — 합격자의 과정을 오픈소스로, 나의 취뽀를 커밋으로.
</p>
