import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  {
    icon: 'warning',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    value: 28.9,
    suffix: '%',
    label: '대졸 신입 1년 내 퇴사율',
  },
  {
    icon: 'schedule',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    value: 11.5,
    suffix: '개월',
    label: '졸업 → 첫 취업 평균 소요기간',
  },
  {
    icon: 'person_off',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    value: 58.9,
    suffix: '%',
    label: '퇴사 사유 1위: 직무 미스매치',
  },
] as const

function StatValue({ value, suffix, started }: { value: number; suffix: string; started: boolean }) {
  const isDecimal = value % 1 !== 0
  const target = isDecimal ? Math.round(value * 10) : value
  const count = useCountUp(target, 1500, started)
  const display = isDecimal ? (count / 10).toFixed(1) : count

  return (
    <span className="text-2xl lg:text-3xl font-black text-[#5048e5] tracking-tight">
      {display}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${inView ? 'animate-fade-in-up' : 'animate-hidden'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            왜 필요할까요?
          </h3>
          <p className="text-sm text-gray-500">
            데이터가 말해주는 취업 준비의 현실
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white p-6 rounded-2xl lg:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 transition-transform hover:scale-[1.02] ${
                inView
                  ? `animate-fade-in-up ${i === 1 ? 'animate-delay-100' : i === 2 ? 'animate-delay-200' : ''}`
                  : 'animate-hidden'
              }`}
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
                <StatValue value={stat.value} suffix={stat.suffix} started={inView} />
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
