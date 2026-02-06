interface StepIndicatorProps {
  currentStep: 1 | 2
  totalSteps?: number
}

export default function StepIndicator({ currentStep, totalSteps = 2 }: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1
        return (
          <div
            key={step}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              step === currentStep
                ? 'bg-gray-900'
                : step < currentStep
                ? 'bg-[#5A51F0]'
                : 'border border-gray-300 bg-white'
            }`}
          />
        )
      })}
    </div>
  )
}
