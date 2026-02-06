import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../shared/components/layout/MainLayout'
import LandingPage from '../pages/LandingPage'
import OnboardingPage from '../pages/OnboardingPage'
import BundlePage from '../pages/BundlePage'
import MyPlanPage from '../pages/MyPlanPage'
import DashboardPage from '../pages/DashboardPage'
import RoadmapDetailPage from '../pages/RoadmapDetailPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" replace />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/bundles" element={<BundlePage />} />
      <Route path="/bundles/:authorId" element={<RoadmapDetailPage />} />
      <Route path="/plan" element={<MyPlanPage />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

