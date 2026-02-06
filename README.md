# GrowLog FE

함께 성장하는 프로젝트 관리 서비스

## 기술 스택

| 영역 | 라이브러리 | 버전 |
|------|-----------|------|
| UI | React | 19 |
| 빌드 | Vite | 6 |
| 타입 | TypeScript | 5.8 |
| 스타일 | Tailwind CSS | 4 |
| 서버 상태 | TanStack React Query | 5 |
| 클라이언트 상태 | Zustand | 5 |
| 라우팅 | React Router | 7 |
| Mock API | json-server | 1.0-beta |
| 린트/포맷 | ESLint 9 + Prettier 3 | - |

## 시작하기

```bash
npm install

# Mock API (터미널 1)
npx json-server server/db.json

# 개발 서버 (터미널 2)
npm run dev
```

## 프로젝트 구조 (FBA)

```
src/
├── routes/          # 라우트 정의 + 페이지 컴포넌트
├── features/        # 기능 단위 모듈 (FBA 핵심)
│   ├── auth/
│   ├── dashboard/
│   ├── project/
│   ├── timer/
│   ├── feed/
│   ├── profile/
│   └── friend/
├── shared/          # 공용 모듈 (UI, hooks, lib, providers)
├── styles/          # Tailwind CSS
└── server/          # json-server Mock DB
```

### FBA 의존성 규칙

```
O  routes → features (페이지에서 feature 조합)
O  features → shared (feature에서 공용 모듈 사용)
X  features → features (feature 간 직접 참조 금지)
X  shared → features (역참조 금지)
```

feature 간 데이터가 필요하면 **routes에서 조합**한다.

## 코딩 컨벤션

### 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `StreakBanner.tsx` |
| 페이지 | PascalCase + Page | `DashboardPage.tsx` |
| 훅 | camelCase + use | `useTimer.ts` |
| 스토어 | camelCase + Store | `timerStore.ts` |
| 타입 | kebab-case + .types | `project.types.ts` |
| 상수 | SCREAMING_SNAKE | `MAX_STREAK_DAYS` |
| 핸들러 | handle + 동사 | `handleSubmit` |
| boolean | is/has/should | `isLoading` |

### 상태 관리 기준

| 종류 | 도구 |
|------|------|
| 서버 데이터 | React Query |
| 글로벌 클라이언트 | Zustand |
| 로컬 UI | useState |
| URL 상태 | useSearchParams |

### import 순서

```tsx
// 1. React
// 2. 외부 라이브러리
// 3. @/shared
// 4. 같은 feature (상대경로)
```

### 컴포넌트 규칙

- named export만 사용
- `className` prop 항상 수용
- 150줄 넘으면 분리
- interface는 `interface`, union은 `type`
- `any` 금지

## Git 컨벤션

### 브랜치

```
main ← dev ← feat/*, fix/*
```

### 커밋 메시지

```
feat(dashboard): 스트릭 배너 컴포넌트 구현
fix(timer): 페이지 이동 시 타이머 리셋 버그
style(feed): 피드카드 간격 조정
refactor(shared): Button props 정리
chore: db.json 초기 데이터 추가
```

## 2인 분담

| 개발자 A (SNS 레이어) | 개발자 B (Standalone 레이어) |
|----------------------|---------------------------|
| auth, dashboard, feed, friend | project, timer, profile |
| Landing, Login, Onboarding, Dashboard, Feed | Projects, ProjectDetail, Timer, Profile |

**공동 (Day 1 오전)**: routes/index.tsx, shared/ui, layout, types, db.json

## npm scripts

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | Vite 개발 서버 |
| `npm run build` | TypeScript 체크 + 빌드 |
| `npm run lint` | ESLint 실행 |
| `npm run format` | Prettier 포맷 |
