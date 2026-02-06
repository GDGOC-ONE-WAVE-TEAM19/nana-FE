import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'

const navItems = [
  { to: ROUTES.ONBOARDING, label: 'Onboarding' },
  { to: ROUTES.BUNDLES, label: 'Bundles' },
  { to: ROUTES.PLAN, label: 'My Plan' },
  { to: ROUTES.DASHBOARD, label: 'Dashboard' },
]

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-[calc(100vh-3.5rem)] border-r border-gray-200 bg-white p-4">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
