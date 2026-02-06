import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left mb-10 lg:mb-0">
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
            <h2 className="text-lg font-medium text-gray-600 mb-6 lg:hidden">
              그 과정을 그대로 따라가 보세요
            </h2>
            <p className="hidden lg:block text-lg text-gray-500 mb-8 leading-relaxed max-w-md">
              합격자들의 실제 준비 로드맵과
              <br />
              매일의 할 일을 확인하세요.
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

          {/* Hero Image */}
          <div className="lg:col-span-7 relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 lg:w-96 lg:h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 lg:w-96 lg:h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
            <div className="relative rounded-2xl lg:rounded-3xl shadow-2xl bg-white border border-gray-100 overflow-hidden lg:rotate-1 lg:hover:rotate-0 transition-transform duration-500 max-w-md mx-auto lg:max-w-none">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white text-xs font-medium">
                  ✨ 합격률 2.5배 상승
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
