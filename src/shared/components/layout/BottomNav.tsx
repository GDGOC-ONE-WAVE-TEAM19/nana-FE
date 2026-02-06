import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/landing', label: '메인화면', icon: 'home', end: true },
  { to: '/bundles', label: '합격자 투두 번들', icon: 'groups' },
  { to: '/dashboard', label: '대시보드', icon: 'bar_chart' },
  { to: '/', label: '프로필', icon: 'person' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-[72px] border-t border-gray-200 bg-white/80 pb-2 backdrop-blur-md lg:hidden">
      <div className="flex h-full items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex h-full w-full flex-col items-center justify-center gap-1 ${
                isActive ? 'text-[#5048e5]' : 'text-gray-400'
              }`
            }
          >
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
