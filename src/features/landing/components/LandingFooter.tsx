export default function LandingFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* All Jobs Section */}
      <div className="py-12 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-2xl mb-6">
          {['📣', '🤝', '🍳', '🐄', '💻', '🎨', '📊'].map((emoji, i) => (
            <span
              key={i}
              className="animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          모든 직무를 지원합니다
        </h3>
        <p className="text-sm text-gray-400">
          나에게 맞는 커리어 패스를 찾아보세요
        </p>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2025 StepIn. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              프로필팀
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
