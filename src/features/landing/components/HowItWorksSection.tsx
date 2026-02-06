import { useInView } from '../hooks/useInView'

const steps = [
  { icon: 'ads_click', title: '목표 설정', description: '목표 기업과 직무를 선택하세요' },
  { icon: 'search', title: '번들 탐색', description: '합격자들의 실제 준비 과정을 비교하세요' },
  { icon: 'content_copy', title: '로드맵 복사', description: '마음에 드는 번들을 내 일정으로 가져오세요' },
  { icon: 'check_circle', title: '매일 실천', description: '투두를 체크하며 대시보드에서 성장을 확인하세요' },
] as const

const delayClass = ['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300'] as const

export default function HowItWorksSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`text-3xl font-black text-gray-900 mb-4 ${inView ? 'animate-fade-in-up' : 'animate-hidden'}`}>
            3분이면 시작할 수 있어요
          </h2>
          <p className={`text-gray-500 ${inView ? 'animate-fade-in-up' : 'animate-hidden'}`}>
            간단한 4단계로 합격자의 로드맵을 내 것으로
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex max-w-4xl mx-auto items-start">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start flex-1">
              <div className={`flex flex-col items-center ${inView ? `animate-fade-in-up ${delayClass[index]}` : 'animate-hidden'}`}>
                <div className="w-14 h-14 bg-[#5048e5]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#5048e5] text-2xl">
                    {step.icon}
                  </span>
                </div>
                <div className="text-xs text-[#5048e5] font-bold mb-2">STEP {index + 1}</div>
                <div className="font-bold text-gray-900 mb-1 text-center">{step.title}</div>
                <div className="text-sm text-gray-500 text-center max-w-[160px]">{step.description}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 border-t-2 border-dashed border-gray-200 mt-7 mx-4" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex">
              <div className="flex flex-col items-center mr-4">
                <div className={`w-12 h-12 bg-[#5048e5]/10 rounded-full flex items-center justify-center shrink-0 ${inView ? `animate-fade-in-up ${delayClass[index]}` : 'animate-hidden'}`}>
                  <span className="material-symbols-outlined text-[#5048e5] text-xl">
                    {step.icon}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 w-0.5 border-l-2 border-dashed border-gray-200 my-2" />
                )}
              </div>
              <div className={`pb-8 flex-1 ${inView ? `animate-fade-in-up ${delayClass[index]}` : 'animate-hidden'}`}>
                <div className="text-xs text-[#5048e5] font-bold mb-1">STEP {index + 1}</div>
                <div className="font-bold text-gray-900 mb-1">{step.title}</div>
                <div className="text-sm text-gray-500">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
