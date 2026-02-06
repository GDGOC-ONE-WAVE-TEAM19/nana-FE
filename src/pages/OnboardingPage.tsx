import { useOnboarding } from '../features/onboarding/hooks/useOnboarding'
import StepIndicator from '../features/onboarding/components/StepIndicator'
import FieldSelector from '../features/onboarding/components/FieldSelector'
import CompanySelector from '../features/onboarding/components/CompanySelector'

export default function OnboardingPage() {
  const { step, canProceedStep1, canProceedStep2, goToStep2, goBackToStep1 } = useOnboarding()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {step === 1 && (
        <div className="flex-1 flex flex-col max-w-[1000px] w-full mx-auto px-5 md:px-6 pt-8 pb-6">
          <StepIndicator currentStep={1} />
          <h1 className="text-2xl md:text-[32px] font-bold text-left md:text-center mb-6 md:mb-12 text-gray-900 leading-tight">
            어떤 분야를<br className="md:hidden" /> 준비하고 있나요?
          </h1>
          <FieldSelector />
          <div className="mt-auto pt-8">
            <button
              onClick={goToStep2}
              disabled={!canProceedStep1}
              className="w-full md:w-auto md:float-right bg-[#5A51F0] hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg py-4 md:px-20 rounded-full shadow-[0_4px_14px_rgba(90,81,240,0.4)] transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#F3F4FE]"
            >
              다음
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 flex items-center justify-center px-4 py-8 bg-gray-50 md:bg-white">
          <div className="w-full max-w-lg bg-white rounded-2xl md:rounded-none shadow-lg md:shadow-none p-6 md:p-0">
            <StepIndicator currentStep={2} />
            <h1 className="text-xl md:text-[32px] font-bold text-center mb-2 md:mb-3 text-gray-900">
              목표 기업을 선택해주세요
            </h1>
            <p className="text-center text-gray-500 text-sm mb-8 md:mb-10 leading-relaxed">
              선택한 기업의 합격 데이터를 기반으로<br />
              로드맵을 추천해드려요.
            </p>
            <CompanySelector />
            <div className="mt-10 md:mt-16">
              <button
                disabled={!canProceedStep2}
                className="w-full bg-[#5A51F0] hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_rgba(90,81,240,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>합격자 로드맵 보기</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                onClick={goBackToStep1}
                className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm font-medium py-2 transition-colors"
              >
                이전 단계로
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
