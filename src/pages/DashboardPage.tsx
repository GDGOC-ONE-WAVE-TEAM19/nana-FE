import { NavLink } from 'react-router-dom'
import DashboardHeader from '../features/dashboard/components/DashboardHeader'
import ProgressSection from '../features/dashboard/components/ProgressSection'
import TodayPlanCard from '../features/dashboard/components/TodayPlanCard'
import CategoryFilterPills from '../features/dashboard/components/CategoryFilterPills'
import DashboardTodoList from '../features/dashboard/components/DashboardTodoList'
import WeeklyBalanceCard from '../features/dashboard/components/WeeklyBalanceCard'

const sidebarNav = [
  { to: '/dashboard', label: '홈', icon: 'home' },
  { to: '/dashboard', label: '대시보드', icon: 'chart' },
  { to: '/bundles', label: '번들', icon: 'people' },
  { to: '/dashboard', label: '프로필', icon: 'user' },
]

function SidebarIcon({ type }: { type: string }) {
  switch (type) {
    case 'home':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    case 'chart':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'people':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'user':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    default:
      return null
  }
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-56 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-6 pb-4">
          {/* Logo */}
          <div className="px-5 mb-8">
            <h1 className="text-xl font-bold text-[#5048e5]">StepIn</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-1">
            {sidebarNav.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive && item.label === '대시보드'
                      ? 'bg-[#F3F2FF] text-[#5048e5]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <SidebarIcon type={item.icon} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Goal section at bottom */}
          <div className="px-4 py-4 mx-3 mb-2 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎯</span>
              <div>
                <p className="text-xs text-gray-500">목표</p>
                <p className="text-sm font-semibold text-gray-900">네이버 프론트엔드 개발자</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="lg:pl-56">
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8 pb-20 lg:pb-8 max-w-6xl mx-auto">
          <DashboardHeader />
          <div className="mt-6">
            <ProgressSection />
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left column: main content */}
            <div className="lg:col-span-8 space-y-5 lg:space-y-6">
              <TodayPlanCard />
              <CategoryFilterPills />
              <DashboardTodoList />
            </div>
            {/* Right column: balance card */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-6">
                <WeeklyBalanceCard />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation - hidden on desktop */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] lg:hidden z-50">
        <div className="flex items-center justify-around h-16">
          {sidebarNav.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 w-full h-full ${
                  isActive && item.label === '대시보드'
                    ? 'text-[#5048e5]'
                    : 'text-gray-400'
                }`
              }
            >
              <SidebarIcon type={item.icon} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
