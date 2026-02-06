import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import OnboardingPage from '../pages/OnboardingPage'
import BundlePage from '../pages/BundlePage'
import DashboardPage from '../pages/DashboardPage'
import RoadmapDetailPage from '../pages/RoadmapDetailPage'
import MyPlanPage from '../pages/MyPlanPage'
import { MainLayout, DashboardLayout } from '../shared/components/layout'

export default function AppRoutes() {
  return (
    <Routes>
      {/* 초기 진입 시 landing으로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/landing" replace />} />

      {/* 레이아웃이 없는 독립 페이지 */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />

      {/* 메인 레이아웃을 사용하는 페이지들 */}
      <Route element={<MainLayout />}>
        <Route path="/bundles" element={<BundlePage />} />
        <Route path="/bundles/:authorId" element={<RoadmapDetailPage />} />
        {/* 본인이 추가한 MyPlanPage를 MainLayout 안에 배치 */}
        <Route path="/plan" element={<MyPlanPage />} />
      </Route>

      {/* 대시보드 레이아웃을 사용하는 페이지들 */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}