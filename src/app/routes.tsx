import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import OnboardingPage from '../pages/OnboardingPage'
import BundlePage from '../pages/BundlePage'
import DashboardPage from '../pages/DashboardPage'
import RoadmapDetailPage from '../pages/RoadmapDetailPage'
import { MainLayout, DashboardLayout } from '../shared/components/layout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" replace />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />

      <Route element={<MainLayout />}>
        <Route path="/bundles" element={<BundlePage />} />
        <Route path="/bundles/:authorId" element={<RoadmapDetailPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

