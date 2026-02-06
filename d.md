# GrowLog FE 컨벤션 가이드

**스택**: React 19 + Vite 6 + TypeScript 5.8 + Tailwind CSS 4 + Zustand 5 + React Query 5 + React Router 7
**아키텍처**: FBA (Feature-Based Architecture)
**팀**: 2명
**작성일**: 2026.02.06

---

## 1. FBA 폴더 구조

```
src/
├── main.tsx                        # 엔트리 포인트
├── App.tsx                         # 라우터 + 프로바이더 조합
│
├── routes/                         # 라우트 정의 + 페이지 컴포넌트
│   ├── index.tsx                   # createBrowserRouter 설정
│   ├── LandingPage.tsx             # /
│   ├── LoginPage.tsx               # /login
│   ├── OnboardingPage.tsx          # /onboarding
│   ├── DashboardPage.tsx           # /dashboard
│   ├── FeedPage.tsx                # /feed
│   ├── TimerPage.tsx               # /timer
│   ├── ProjectsPage.tsx            # /projects
│   ├── ProjectDetailPage.tsx       # /projects/:id
│   └── ProfilePage.tsx             # /profile/:id
│
├── features/                       # ⭐ FBA 핵심 — 기능 단위 모듈
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── OnboardingStep.tsx
│   │   │   └── InterestSelector.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── stores/
│   │   │   └── authStore.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── StreakBanner.tsx
│   │   │   ├── DailyGrowthCard.tsx
│   │   │   ├── ActiveProjects.tsx
│   │   │   └── TodayStats.tsx
│   │   ├── hooks/
│   │   │   └── useDashboard.ts
│   │   └── index.ts
│   │
│   ├── project/
│   │   ├── components/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── MilestoneTimeline.tsx
│   │   │   ├── TodoList.tsx
│   │   │   ├── TodoItem.tsx
│   │   │   ├── GrowthLog.tsx
│   │   │   └── ProjectStats.tsx
│   │   ├── hooks/
│   │   │   ├── useProject.ts
│   │   │   └── useTodo.ts
│   │   ├── stores/
│   │   │   └── projectStore.ts
│   │   ├── types/
│   │   │   └── project.types.ts
│   │   └── index.ts
│   │
│   ├── feed/
│   │   ├── components/
│   │   │   ├── FeedCard.tsx
│   │   │   ├── MilestoneCard.tsx
│   │   │   ├── CompletionCard.tsx
│   │   │   ├── ReactionBar.tsx
│   │   │   ├── ActiveFriends.tsx
│   │   │   └── GrowthLogEditor.tsx
│   │   ├── hooks/
│   │   │   └── useFeed.ts
│   │   └── index.ts
│   │
│   ├── timer/
│   │   ├── components/
│   │   │   ├── TimerRing.tsx
│   │   │   ├── TimerControls.tsx
│   │   │   ├── SessionSelector.tsx
│   │   │   ├── FocusingFriends.tsx
│   │   │   └── CompletionCelebration.tsx
│   │   ├── hooks/
│   │   │   └── useTimer.ts
│   │   ├── stores/
│   │   │   └── timerStore.ts
│   │   └── index.ts
│   │
│   ├── profile/
│   │   ├── components/
│   │   │   ├── ProfileHeader.tsx
│   │   │   ├── ActivityHeatmap.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── StatsSummary.tsx
│   │   │   └── SkillTags.tsx
│   │   ├── hooks/
│   │   │   └── useProfile.ts
│   │   └── index.ts
│   │
│   └── friend/
│       ├── components/
│       │   ├── FriendList.tsx
│       │   ├── FriendCard.tsx
│       │   └── SuggestedFriends.tsx
│       ├── hooks/
│       │   └── useFriends.ts
│       └── index.ts
│
├── shared/                         # 공용 모듈 (feature 간 공유)
│   ├── components/
│   │   ├── ui/                     # 원자 단위 UI
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Tooltip.tsx
│   │   └── layout/
│   │       ├── Sidebar.tsx
│   │       ├── MainLayout.tsx      # 사이드바 포함 (Outlet)
│   │       ├── AuthLayout.tsx      # 인증 페이지용 (Outlet)
│   │       └── PageContainer.tsx
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   └── useDebounce.ts
│   ├── lib/
│   │   ├── api.ts                  # fetch 래퍼
│   │   ├── utils.ts                # cn(), formatDate()
│   │   └── constants.ts
│   ├── providers/
│   │   ├── QueryProvider.tsx
│   │   └── ThemeProvider.tsx
│   └── types/
│       └── common.types.ts
│
├── styles/
│   └── index.css                   # @import 'tailwindcss' + @theme
│
└── server/                         # json-server (Vite 감시 제외)
    └── db.json
```

### FBA 의존성 규칙

```
✅ 허용
features/project/  → shared/           (feature → shared)
routes/Dashboard   → features/dashboard (page → feature)
routes/Dashboard   → features/project   (page에서 여러 feature 조합)

❌ 금지
features/project/  → features/feed/     (feature 간 직접 참조)
features/timer/    → features/profile/  (feature 간 직접 참조)
shared/            → features/          (shared → feature 역참조)
```

feature 간 데이터가 필요하면 **routes 레이어에서 조합**한다:

```tsx
// routes/DashboardPage.tsx — 여러 feature를 조합하는 유일한 장소
import { StreakBanner } from '@/features/dashboard'
import { ActiveProjects } from '@/features/project'
import { ActiveFriends } from '@/features/friend'
```

---

## 2. 라우터 설정

```tsx
// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { AuthLayout } from '@/shared/components/layout/AuthLayout'

import { LandingPage } from './LandingPage'
import { LoginPage } from './LoginPage'
import { OnboardingPage } from './OnboardingPage'
import { DashboardPage } from './DashboardPage'
import { FeedPage } from './FeedPage'
import { TimerPage } from './TimerPage'
import { ProjectsPage } from './ProjectsPage'
import { ProjectDetailPage } from './ProjectDetailPage'
import { ProfilePage } from './ProfilePage'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },

  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/onboarding', element: <OnboardingPage /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/feed', element: <FeedPage /> },
      { path: '/timer', element: <TimerPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:id', element: <ProjectDetailPage /> },
      { path: '/profile/:id', element: <ProfilePage /> },
    ],
  },
])
```

```tsx
// src/App.tsx
import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from '@/shared/providers/QueryProvider'
import { router } from '@/routes'

export function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
```

```tsx
// src/shared/components/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
```

### 페이지 컴포넌트 패턴

```tsx
// src/routes/DashboardPage.tsx
import { StreakBanner, DailyGrowthCard, TodayStats } from '@/features/dashboard'
import { ActiveProjects } from '@/features/project'
import { ActiveFriends } from '@/features/friend'
import { PageContainer } from '@/shared/components/layout/PageContainer'

export function DashboardPage() {
  return (
    <PageContainer className="flex gap-6">
      <section className="flex-1 max-w-[720px] space-y-5">
        <StreakBanner />
        <DailyGrowthCard />
        <ActiveProjects />
      </section>

      <aside className="hidden xl:block w-80 space-y-5">
        <TodayStats />
        <ActiveFriends />
      </aside>
    </PageContainer>
  )
}
```

**규칙**: routes/ 파일은 **조합만** 한다. 로직은 features/에, UI 원자는 shared/에.

---

## 3. 네이밍 컨벤션

### 파일 & 폴더

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `StreakBanner.tsx` |
| 페이지 | PascalCase + Page | `DashboardPage.tsx` |
| 훅 | camelCase + use | `useTimer.ts` |
| 스토어 | camelCase + Store | `timerStore.ts` |
| 타입 | kebab-case + .types | `project.types.ts` |
| 유틸 | camelCase | `utils.ts` |
| 폴더 | kebab-case | `components/` |

### 코드 네이밍

```tsx
export function StreakBanner() {}            // 컴포넌트: PascalCase
export function useTimer() {}                // 훅: use 접두사
export const MAX_STREAK_DAYS = 365           // 상수: SCREAMING_SNAKE
interface Project {}                          // 타입: PascalCase
type TodoStatus = 'pending' | 'done'         // union: type 사용
const handleSubmit = () => {}                // 핸들러: handle + 동사
const isLoading = true                       // boolean: is/has/should
```

### 배럴 export (index.ts)

```tsx
// features/project/index.ts
export { ProjectCard } from './components/ProjectCard'
export { MilestoneTimeline } from './components/MilestoneTimeline'
export { TodoList } from './components/TodoList'
export { useProject } from './hooks/useProject'
export type { Project, Milestone } from './types/project.types'
```

---

## 4. 컴포넌트 컨벤션

```tsx
// features/project/components/ProjectCard.tsx

import { cn } from '@/shared/lib/utils'
import { Card } from '@/shared/components/ui/Card'
import { ProgressBar } from '@/shared/components/ui/ProgressBar'
import type { Project } from '../types/project.types'

interface ProjectCardProps {
  project: Project
  className?: string
  onSelect?: (id: string) => void
}

export function ProjectCard({ project, className, onSelect }: ProjectCardProps) {
  const progress = project.completedTodos / project.totalTodos

  return (
    <Card
      className={cn('p-5 hover:-translate-y-0.5 transition-transform cursor-pointer', className)}
      onClick={() => onSelect?.(project.id)}
    >
      <span className="text-3xl">{project.emoji}</span>
      <h3 className="mt-2 font-bold text-[15px]">{project.name}</h3>
      <ProgressBar value={progress} className="mt-3" />
      <p className="mt-1 text-xs text-gray">
        {project.completedTodos}/{project.totalTodos} 완료
      </p>
    </Card>
  )
}
```

**규칙**: named export만, className 항상 수용, 150줄 넘으면 분리.

---

## 5. 상태 관리

| 상태 종류 | 도구 | 예시 |
|----------|------|------|
| 서버 데이터 | React Query | 프로젝트 목록, 피드, 프로필 |
| 글로벌 클라이언트 | Zustand | 인증 유저, 타이머, 테마 |
| 로컬 UI | useState | 모달, 입력값, 토글 |
| URL 상태 | useSearchParams | 탭 필터, 페이지네이션 |

### Zustand

```tsx
// features/timer/stores/timerStore.ts
import { create } from 'zustand'

type TimerStatus = 'idle' | 'running' | 'paused' | 'completed'

interface TimerState {
  status: TimerStatus
  remaining: number
  projectId: string | null
  start: (projectId: string) => void
  pause: () => void
  tick: () => void
  reset: () => void
}

export const useTimerStore = create<TimerState>((set) => ({
  status: 'idle',
  remaining: 25 * 60,
  projectId: null,
  start: (projectId) => set({ status: 'running', projectId }),
  pause: () => set({ status: 'paused' }),
  reset: () => set({ status: 'idle', remaining: 25 * 60 }),
  tick: () =>
    set((s) =>
      s.remaining <= 1
        ? { remaining: 0, status: 'completed' }
        : { remaining: s.remaining - 1 }
    ),
}))
```

### React Query

```tsx
// features/project/hooks/useProject.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/shared/lib/api'
import type { Project } from '../types/project.types'

export const projectKeys = {
  all:    ['projects'] as const,
  detail: (id: string) => ['projects', id] as const,
}

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: () => api.get<Project[]>('/projects'),
  })
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => api.get<Project>(`/projects/${id}`),
    enabled: !!id,
  })
}

export function useToggleTodo() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todoId: string) => api.patch(`/todos/${todoId}/toggle`),
    onSuccess: () => qc.invalidateQueries({ queryKey: projectKeys.all }),
  })
}
```

### API 클라이언트

```tsx
// shared/lib/api.ts
const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

async function request<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

export const api = {
  get:   <T>(path: string) => request<T>(path),
  post:  <T>(path: string, body: unknown) =>
           request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  patch: <T>(path: string, body?: unknown) =>
           request<T>(path, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),
  del:   <T>(path: string) => request<T>(path, { method: 'DELETE' }),
}
```

---

## 6. 스타일 (Tailwind 4)

```css
/* styles/index.css */
@import 'tailwindcss';

@theme {
  --color-primary: #6C5CE7;
  --color-accent: #00CEC9;
  --color-gold: #FDCB6E;
  --color-success: #00B894;
  --color-bg: #F8F9FE;
  --color-surface: #FFFFFF;
  --color-text: #2D3436;
  --color-gray: #636E72;

  --radius-card: 16px;
  --radius-pill: 999px;
  --shadow-card: 0 4px 24px rgba(108, 92, 231, 0.08);
}
```

> `@theme`으로 선언하면 `bg-primary`, `text-accent`, `rounded-card`, `shadow-card` 바로 사용 가능.

```tsx
// shared/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 7. 타입

```tsx
// features/project/types/project.types.ts

export interface Project {
  id: string
  name: string
  emoji: string
  description: string
  tags: string[]
  privacy: 'private' | 'friends' | 'public'
  milestones: Milestone[]
  createdAt: string
  updatedAt: string
}

export interface Milestone {
  id: string
  name: string
  order: number
  status: 'completed' | 'active' | 'pending'
  todos: Todo[]
  completedAt: string | null
}

export interface Todo {
  id: string
  text: string
  done: boolean
  createdAt: string
}

export interface GrowthLog {
  id: string
  projectId: string
  day: number
  content: string
  reactions: Reaction[]
  createdAt: string
}

export interface Reaction {
  emoji: string
  count: number
  users: string[]
}
```

**규칙**: interface 기본, union은 type. any 금지. db.json 스키마와 일치시킬 것.

---

## 8. Git 컨벤션

### 브랜치

```
main ← 배포 가능
  └── dev ← 개발 통합
       ├── feat/dashboard-streak
       ├── feat/timer-core
       └── fix/heatmap-render
```

### 커밋

```
feat(dashboard): 스트릭 배너 컴포넌트 구현
fix(timer): 페이지 이동 시 타이머 리셋 버그
style(feed): 피드카드 간격 조정
refactor(shared): Button props 정리
chore: db.json 초기 데이터 추가
```

### PR: 상대방 확인 후 머지. 시간 압박 시 구두 확인 허용.

---

## 9. 2인 분담

```
┌──────────────────────────────┬──────────────────────────────┐
│          개발자 A             │          개발자 B             │
│        (SNS 레이어)           │     (Standalone 레이어)       │
├──────────────────────────────┼──────────────────────────────┤
│ features/auth                │ features/project             │
│ features/dashboard           │ features/timer               │
│ features/feed                │ features/profile             │
│ features/friend              │                              │
├──────────────────────────────┼──────────────────────────────┤
│ LandingPage                  │ ProjectsPage                 │
│ LoginPage / OnboardingPage   │ ProjectDetailPage            │
│ DashboardPage                │ TimerPage                    │
│ FeedPage                     │ ProfilePage                  │
├──────────────────────────────┼──────────────────────────────┤
│                    공동 (Day 1 오전)                         │
│  routes/index.tsx · shared/ui · layout · types · db.json    │
└──────────────────────────────────────────────────────────────┘
```

### 충돌 방지

| 파일 | 소유 |
|------|------|
| `routes/index.tsx` | A 소유, B는 PR |
| `shared/components/ui/` | 추가 자유, 수정 시 상의 |
| `styles/index.css` | 변수 추가만 허용 |
| `server/db.json` | 각자 담당 데이터만 |

---

## 10. import 순서

```tsx
// 1. React
import { useState, useEffect } from 'react'

// 2. 외부 라이브러리
import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'

// 3. shared
import { Button } from '@/shared/components/ui/Button'
import { cn } from '@/shared/lib/utils'

// 4. 같은 feature
import { useProject } from '../hooks/useProject'
import type { Project } from '../types/project.types'
```