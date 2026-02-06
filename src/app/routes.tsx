import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../shared/components/layout/MainLayout'
import OnboardingPage from '../pages/OnboardingPage'
import BundlePage from '../pages/BundlePage'
import MyPlanPage from '../pages/MyPlanPage'
import DashboardPage from '../pages/DashboardPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/onboarding" replace />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route element={<MainLayout />}>
        <Route path="/bundles" element={<BundlePage />} />
        <Route path="/plan" element={<MyPlanPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}
