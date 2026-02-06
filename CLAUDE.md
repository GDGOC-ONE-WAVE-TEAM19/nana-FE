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
| HTTP | Axios | 1.x |
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
├── features/               # 기능 단위 모듈 (Feature-Sliced)
│   ├── {feature}/
│   │   ├── components/     # 해당 기능 전용 컴포넌트
│   │   ├── hooks/          # 해당 기능 전용 훅
│   │   ├── stores/         # Zustand 스토어
│   │   └── types.ts        # 해당 기능 타입 정의
│   ├── onboarding/
│   ├── bundle/
│   ├── bundle-detail/
│   ├── landing/
│   └── dashboard/
├── shared/                 # 공유 모듈
│   ├── components/
│   │   ├── layout/         # Header, Sidebar, MainLayout
│   │   └── ui/             # Button, Card, Badge, Modal, ProgressBar
│   ├── lib/                # api.ts, endpoints.ts, constants.ts, utils.ts
│   └── types/              # domain.ts, api.ts, common.ts
└── index.css               # Tailwind 진입점
```

## Architecture Conventions

### Routing

- `/onboarding` — 온보딩 (기본 리다이렉트)
- `/bundles` — 합격자 번들 목록
- `/bundles/:authorId` — 번들 상세 (로드맵)
- `/dashboard` — 준비 상태 대시보드
- `/onboarding`은 레이아웃 없음, 나머지는 `MainLayout` (Header + Sidebar + Outlet)

### State Management

- **서버 상태**: React Query (`useQuery` / `useMutation`), queryKey 컨벤션 `['bundles']`, `['todos']` 등
- **클라이언트 상태**: Zustand store (feature별 `stores/` 디렉토리)
- React Query `staleTime`: 5분, `retry`: 1

### API

- Base URL: `VITE_API_URL` 환경변수 (기본값 `http://localhost:8080`)
- `src/shared/lib/api.ts` — Axios 인스턴스 (timeout 10s, error interceptor)
- `src/shared/lib/endpoints.ts` — 엔드포인트 상수 (`ENDPOINTS` 객체)
- 응답 형식: `ApiResponse<T>` (`{ success, data?, error?, meta? }`)
- 현재 mock 데이터 사용 중 (API 연동 전)

### Styling

- Tailwind CSS v4 — `@import "tailwindcss"` 방식 (PostCSS 설정 불필요)
- `@tailwindcss/vite` 플러그인 사용
- 유틸리티 클래스 직접 사용, CSS 파일 별도 작성 지양

### Type Definitions

- 도메인 타입: `src/shared/types/domain.ts` (User, Company, Job)
- API 타입: `src/shared/types/api.ts` (ApiResponse, ApiError)
- Feature별 타입: `src/features/{feature}/types.ts`

### Naming Conventions

- 컴포넌트: PascalCase (`BundleCard.tsx`)
- 훅: camelCase, `use` 접두사 (`useBundles.ts`)
- 스토어: camelCase, `use` + `Store` 접미사 (`useOnboardingStore`)
- 상수: UPPER_SNAKE_CASE (`TODO_STATUS`, `ROUTES`)
- 타입/인터페이스: PascalCase (`Bundle`, `BundleTodo`)

## Reference Files

`ref/` 디렉토리에 기획 문서와 Stitch 디자인 스크린샷이 포함되어 있음:
- `ref/core feature.md` — 페르소나, 핵심 기능 정의, 유저 플로우
- `ref/landing/` — 랜딩 페이지 디자인
- `ref/stitch_field_selection_onboarding*/` — 온보딩 화면 디자인 (모바일/데스크톱)

## Key Decisions

- 세미콜론 없음 (no semicolons)
- `export default function` 패턴 사용 (페이지/레이아웃 컴포넌트)
- `export function` 패턴 사용 (훅)
- `as const` assertion으로 상수 객체 타입 보장
- Feature-Sliced 아키텍처: feature 간 직접 import 지양, shared를 통해 공유
