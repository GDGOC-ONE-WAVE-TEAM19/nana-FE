import { Link } from 'react-router-dom'

export default function LandingHeader() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#5048e5] text-2xl font-bold">
              ads_click
            </span>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              StepIn
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden sm:inline-block text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              로그인
            </a>
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-[#5048e5] to-[#7B4EFF] text-white px-5 py-2 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
