const stats = [
  {
    icon: 'warning',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    value: '28.9%',
    label: '대졸 신입 1년 내 퇴사율',
  },
  {
    icon: 'schedule',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    value: '11.5개월',
    label: '졸업 → 첫 취업 평균 소요기간',
  },
  {
    icon: 'person_off',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    value: '58.9%',
    label: '퇴사 사유 1위: 직무 미스매치',
  },
] as const

export default function StatsSection() {
  return (
    <section className="py-16 bg-white lg:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            왜 필요할까요?
          </h3>
          <p className="text-sm text-gray-500">
            데이터가 말해주는 취업 준비의 현실
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-white p-6 rounded-2xl lg:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 transition-transform hover:scale-[1.02]"
            >
              <div
                className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center shrink-0`}
              >
                <span
                  className={`material-symbols-outlined ${stat.iconColor}`}
                >
                  {stat.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-black text-[#5048e5] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
