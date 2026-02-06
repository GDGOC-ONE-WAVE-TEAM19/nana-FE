import { APP_NAME } from '../../lib/constants'

export default function Header() {
  return (
    <header className="h-14 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <h1 className="text-lg font-bold text-blue-600">{APP_NAME}</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Welcome</span>
      </div>
    </header>
  )
}
