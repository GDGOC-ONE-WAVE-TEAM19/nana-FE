import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const jobs = ['개발', '디자인', '기획', '마케팅'] as const

export default function LandingFooter() {
  const { ref, inView } = useInView(0.2)

  return (
    <footer>
      {/* CTA Block */}
      <div
        ref={ref}
        className="bg-gradient-to-r from-[#5048e5] to-[#7B4EFF] py-16 lg:py-24"
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
            inView ? 'animate-fade-in-up' : 'animate-hidden'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            합격자의 로드맵이 당신을 기다립니다
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 bg-white text-[#5048e5] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg"
          >
            무료로 시작하기
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="py-10 bg-white text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          모든 직무를 지원합니다
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {jobs.map((job) => (
            <span
              key={job}
              className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600"
            >
              {job}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
      </div>
    </footer>
  )
}
