import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import HeroMockup from './HeroMockup'

export default function HeroSection() {
  const { ref: textRef, inView: textInView } = useInView()
  const { ref: mockupRef, inView: mockupInView } = useInView()

  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className={`lg:col-span-5 text-center lg:text-left mb-10 lg:mb-0 ${
              textInView ? 'animate-fade-in-left' : 'animate-hidden'
            }`}
          >
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#5048e5]/10 text-[#5048e5] text-xs font-bold tracking-wide mb-4 lg:mb-6">
              합격자 데이터 기반
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
              합격자는
              <br />
              <span className="bg-gradient-to-r from-[#5048e5] to-[#7B4EFF] bg-clip-text text-transparent">
                뭘 했을까?
              </span>
            </h1>
            <h2 className="hidden text-lg font-medium text-gray-600 mb-6 italic">
              "구체적으로 뭘, 어떤 순서로, 얼마나 했는지가 궁금한 건데..."
            </h2>
            <p className="hidden lg:block text-lg text-gray-500 mb-8 leading-relaxed max-w-md italic">
              "네카라쿠배 간 선배한테 물어보면 '그냥 열심히 했어'밖에 안 나와요.
              <br />
              구체적으로 뭘, 어떤 순서로, 얼마나 했는지가 궁금한 건데..."
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/onboarding"
                className="bg-gradient-to-r from-[#5048e5] to-[#7B4EFF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#5048e5]/30 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                시작하기
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Hero Mockup */}
          <div
            ref={mockupRef}
            className={`lg:col-span-7 relative ${
              mockupInView ? 'animate-fade-in-right' : 'animate-hidden'
            }`}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 lg:w-96 lg:h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 lg:w-96 lg:h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
            <div className="relative max-w-md mx-auto lg:max-w-none lg:rotate-1 lg:hover:rotate-0 transition-transform duration-500">
              <HeroMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
