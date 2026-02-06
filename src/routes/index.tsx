import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/shared/components/layout/MainLayout';
import { AuthLayout } from '@/shared/components/layout/AuthLayout';

import { LandingPage } from './LandingPage';
import { LoginPage } from './LoginPage';
import { OnboardingPage } from './OnboardingPage';
import { DashboardPage } from './DashboardPage';
import { FeedPage } from './FeedPage';
import { TimerPage } from './TimerPage';
import { ProjectsPage } from './ProjectsPage';
import { ProjectDetailPage } from './ProjectDetailPage';
import { ProfilePage } from './ProfilePage';

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
]);
