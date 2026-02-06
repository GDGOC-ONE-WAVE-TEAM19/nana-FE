import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: '홈', icon: 'home', end: true },
  { to: '#', label: '대시보드', icon: 'bar_chart' },
  { to: '#', label: '고스트', icon: 'groups' },
  { to: '#', label: '프로필', icon: 'person' },
]

export default function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-100 bg-white p-6">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#5048e5]">ads_click</span>
        <span className="text-xl font-bold">StepIn</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-colors ${
                isActive
                  ? 'bg-[#F3F0FF] text-[#5048e5]'
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Goal Card */}
      <div className="mt-auto rounded-2xl border border-gray-100 p-4 shadow-sm">
        <div className="mb-3 text-sm">🎯 목표: 네이버 백엔드 개발자</div>
        <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[45%] rounded-full bg-[#5048e5]"></div>
        </div>
      </div>
    </div>
  )
}
