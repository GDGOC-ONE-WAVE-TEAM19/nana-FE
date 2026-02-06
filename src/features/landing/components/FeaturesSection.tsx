const features = [
  {
    icon: 'monitoring',
    color: 'blue',
    title: '합격자 데이터 분석',
    description: '직무별 합격자들의 실제 준비 과정을\n분석하여 데이터를 제공합니다.',
  },
  {
    icon: 'route',
    color: 'purple',
    title: '맞춤형 로드맵 제공',
    description: '나의 목표 기업과 직무에 맞는\n최적의 준비 계획을 세워드립니다.',
  },
  {
    icon: 'calendar_month',
    color: 'indigo',
    title: '체계적인 일정 관리',
    description: '중요한 일정과 매일의 할 일을\n놓치지 않도록 스마트하게 도와줍니다.',
  },
] as const

const colorMap = {
  blue: 'bg-blue-50',
  purple: 'bg-purple-50',
  indigo: 'bg-indigo-50',
} as const

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-6`}
              >
                <span className="material-symbols-outlined text-[#5048e5] text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
