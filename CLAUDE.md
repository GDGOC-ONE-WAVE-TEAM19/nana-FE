# StepIn Frontend (nana-FE)

> ONE WAVE 해커톤 프로젝트 — 취업 준비 과정 공유 플랫폼

## Tech Stack

| Category | Tool | Version |
|----------|------|---------|
| Framework | React | 19 |
| Language | TypeScript | 5.8 |
| Build | Vite | 6 |
| Styling | Tailwind CSS | 4 (v4 `@import "tailwindcss"`) |
| Server State | TanStack React Query | 5 |
| Client State | Zustand | 5 |
| HTTP | Axios + OpenAPI Generated Client | 1.x |
| Routing | React Router | 7 |
| Lint | ESLint (flat config) | 9 |

## Commands

```bash
npm run dev       # 개발 서버 (Vite)
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # 프로덕션 빌드 프리뷰
```

## Project Structure

```
src/
├── app/                    # 앱 진입점 (App.tsx, routes.tsx)
├── pages/                  # 라우트별 페이지 컴포넌트
│   ├── LandingPage.tsx
│   ├── OnboardingPage.tsx
│   ├── BundlePage.tsx
│   ├── RoadmapDetailPage.tsx
│   ├── DashboardPage.tsx
│   └── MyPlanPage.tsx
├── features/               # 기능 단위 모듈 (Feature-Sliced)
│   ├── onboarding/         # 온보딩 플로우
│   ├── bundle/             # 합격자 번들 목록
│   ├── bundle-detail/      # 번들 상세 (로드맵)
│   ├── dashboard/          # 준비 상태 대시보드 + 투두
│   ├── landing/            # 랜딩 페이지 (7개 섹션)
│   │   ├── components/     # Header, Hero, HeroMockup, Stats, CoreFeatures, HowItWorks, Persona, Footer
│   │   └── hooks/          # useInView, useCountUp
│   └── my-plan/            # 내 플랜
├── shared/
│   ├── api/                # OpenAPI 자동생성 클라이언트 (apiClient.ts)
│   ├── components/
│   │   ├── layout/         # MainLayout, DashboardLayout, Sidebar, BottomNav, MainNav, Footer
│   │   └── ui/             # Button, Card, Badge, Modal, ProgressBar
│   ├── lib/                # api.ts, endpoints.ts, constants.ts, utils.ts
│   └── types/              # domain.ts, api.ts, common.ts
└── index.css               # Tailwind 진입점 + 스크롤 애니메이션
```

## Routing

| Path | Page | Layout |
|------|------|--------|
| `/` | LandingPage | 없음 (자체 Header/Footer) |
| `/onboarding` | OnboardingPage | 없음 |
| `/bundles` | BundlePage | MainLayout |
| `/bundles/:authorId` | RoadmapDetailPage | MainLayout |
| `/dashboard` | DashboardPage | DashboardLayout |
| `/my-plan` | MyPlanPage | MainLayout |

## Landing Page Sections (PR #13)

```
LandingHeader → HeroSection → StatsSection → CoreFeaturesSection → HowItWorksSection → PersonaSection → LandingFooter
```

스토리텔링 흐름: Hook → Problem → Solution → How → Proof → CTA

## Design Tokens

| Token | Value |
|-------|-------|
| Primary | `#5048e5` |
| Primary Light | `#7B4EFF` |
| Gradient | `from-[#5048e5] to-[#7B4EFF]` |
| Shadow | `shadow-[#5048e5]/30` |
| Card shadow | `shadow-[0_4px_20px_rgba(0,0,0,0.05)]` |
| Border radius | `rounded-2xl` (cards), `rounded-full` (buttons) |
| Max width | `max-w-7xl` |
| Category: 코테 | `bg-[#E3F2FD]` / `text-blue-600` |
| Category: CS | `bg-[#F3E5F5]` / `text-purple-700` |
| Category: 프로젝트 | `bg-[#E0F2F1]` / `text-teal-700` |

## API

- Base URL: `VITE_API_URL` 환경변수
- `src/shared/api/` — OpenAPI Generator로 자동생성된 클라이언트
- `src/shared/lib/api.ts` — Axios 인스턴스 (timeout 10s, error interceptor)
- `src/shared/lib/endpoints.ts` — 엔드포인트 상수 (`ENDPOINTS` 객체)

## State Management

- **서버 상태**: React Query (`useQuery` / `useMutation`), queryKey 컨벤션 `['bundles']`, `['todos']` 등
- **클라이언트 상태**: Zustand store (feature별 `stores/` 디렉토리)
- React Query `staleTime`: 5분, `retry`: 1

## Key Decisions

- 세미콜론 없음 (no semicolons)
- `export default function` 패턴 (페이지/레이아웃/컴포넌트)
- `export function` 패턴 (훅)
- `as const` assertion으로 상수 객체 타입 보장
- Feature-Sliced 아키텍처: feature 간 직접 import 지양, shared를 통해 공유
- Tailwind CSS v4 — `@import "tailwindcss"` 방식, `@tailwindcss/vite` 플러그인
- CSS-only 애니메이션 (외부 라이브러리 없음): `useInView` + `useCountUp` 커스텀 훅
- 컴포넌트: PascalCase, 훅: `use` 접두사, 스토어: `use`+`Store`, 상수: UPPER_SNAKE_CASE

## Merged PRs

| PR | Description |
|----|-------------|
| #1~3 | 온보딩 + 번들 + 랜딩 초기 구현 |
| #7~8 | 대시보드 + 레이아웃 |
| #9 | API 연동 (bundle, bundle-detail, my-plan) |
| #10 | 버그수정 (온보딩 CTA, 스토어 연동) |
| #12 | 라우터 연결 수정 |
| #13 | 랜딩 페이지 UI/UX 전면 리팩토링 (5→7 섹션) |
