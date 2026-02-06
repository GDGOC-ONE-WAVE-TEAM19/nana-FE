import { useInView } from '../hooks/useInView'

const coreFeatures = [
  {
    icon: 'checklist',
    title: '합격자 투두 번들',
    description: '네이버 백엔드를 목표로 설정하면, 합격자의 준비 과정이 투두 묶음으로 펼쳐집니다.',
    visual: 'todo',
  },
  {
    icon: 'timeline',
    title: '취뽀 커밋 히스토리',
    description: 'GitHub 커밋 로그처럼 합격자의 준비 과정을 투명하게 탐색하세요.',
    visual: 'timeline',
  },
  {
    icon: 'bar_chart',
    title: '준비 상태 대시보드',
    description: '합격자 평균과 비교하며 어디에 집중해야 할지 한눈에 파악하세요.',
    visual: 'dashboard',
  },
  {
    icon: 'sprint',
    title: '고스트 페이스메이커',
    description: '마리오 카트 고스트처럼, 합격자의 페이스와 나란히 달리세요.',
    visual: 'pacemaker',
  },
] as const

function TodoVisual() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="inline-block px-3 py-1 bg-[#E3F2FD] text-blue-600 rounded-full text-sm font-medium mb-4">
        코테
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border-2 border-[#5048e5] bg-[#5048e5] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-sm">check</span>
          </div>
          <span className="line-through text-gray-400">프로그래머스 Lv2 풀기</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0" />
          <span className="text-gray-700">운영체제 정리</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0" />
          <span className="text-gray-700">팀 프로젝트 회의</span>
        </div>
      </div>
    </div>
  )
}

function TimelineVisual() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="relative">
        <div className="absolute left-[5px] top-1 bottom-1 w-[2px] bg-gray-200" />
        <div className="space-y-6">
          {[
            { date: '3월 1주', text: '코딩테스트 준비 시작', color: '#5048e5' },
            { date: '3월 3주', text: 'CS 스터디 합류', color: '#7B4EFF' },
            { date: '4월 1주', text: '프로젝트 킥오프', color: '#d1d5db' },
          ].map((item) => (
            <div key={item.date} className="flex items-start gap-4 relative">
              <div
                className="w-3 h-3 rounded-full shrink-0 z-10 mt-1"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                <div className="text-gray-900 font-medium">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">나</span>
            <span className="text-sm font-bold text-[#5048e5]">45%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#5048e5] rounded-full" style={{ width: '45%' }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">합격자 평균</span>
            <span className="text-sm font-bold text-[#7B4EFF]">78%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#7B4EFF]/30 rounded-full border-2 border-dashed border-[#7B4EFF]/50"
              style={{ width: '78%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function PacemakerVisual() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="relative h-24">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '70%' }}>
          <div className="w-8 h-8 bg-gray-400/30 rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-gray-500 text-lg opacity-50">
              person
            </span>
          </div>
          <div className="text-xs text-gray-500 whitespace-nowrap -ml-4">합격자 고스트</div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '45%' }}>
          <div className="w-8 h-8 bg-[#5048e5] rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-white text-lg">person</span>
          </div>
          <div className="text-xs text-gray-700 font-medium whitespace-nowrap -ml-2">나</div>
        </div>
      </div>
    </div>
  )
}

function FeatureVisual({ type }: { type: string }) {
  switch (type) {
    case 'todo':
      return <TodoVisual />
    case 'timeline':
      return <TimelineVisual />
    case 'dashboard':
      return <DashboardVisual />
    case 'pacemaker':
      return <PacemakerVisual />
    default:
      return null
  }
}

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof coreFeatures)[number]
  index: number
}) {
  const { ref, inView } = useInView()
  const isTextFirst = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
        index === coreFeatures.length - 1 ? '' : 'mb-16 lg:mb-24'
      }`}
    >
      <div
        className={`${
          isTextFirst ? 'lg:order-1' : 'lg:order-2'
        } mb-8 lg:mb-0 ${
          inView
            ? isTextFirst
              ? 'animate-fade-in-left'
              : 'animate-fade-in-right'
            : 'animate-hidden'
        }`}
      >
        <div className="w-12 h-12 bg-[#5048e5]/10 rounded-xl flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[#5048e5] text-2xl">
            {feature.icon}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
        <p className="text-gray-500 leading-relaxed text-lg">{feature.description}</p>
      </div>

      <div
        className={`${
          isTextFirst ? 'lg:order-2' : 'lg:order-1'
        } order-first lg:order-none ${
          inView
            ? isTextFirst
              ? 'animate-fade-in-right'
              : 'animate-fade-in-left'
            : 'animate-hidden'
        }`}
      >
        <FeatureVisual type={feature.visual} />
      </div>
    </div>
  )
}

export default function CoreFeaturesSection() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 lg:mb-24 ${
            headerInView ? 'animate-fade-in-up' : 'animate-hidden'
          }`}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-3">StepIn이 해결합니다</h2>
          <p className="text-gray-500 text-lg">
            취업 준비의 모든 과정을 하나의 플랫폼에서
          </p>
        </div>

        {coreFeatures.map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
