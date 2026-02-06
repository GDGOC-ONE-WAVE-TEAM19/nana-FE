import { useTodos } from '../todo/hooks/useTodos'

export default function ProgressSection() {
  const { stats } = useTodos()
  const averageProgress = 71

  return (
    <section>
      <div className="flex justify-between items-end mb-2">
        <h3 className="text-sm font-bold text-gray-800">오늘의 달성률</h3>
        <span className="text-3xl sm:text-4xl font-bold text-[#5048e5]">
          {stats.progress}%
        </span>
      </div>

      <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-visible">
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 h-full bg-[#5048e5] rounded-full transition-all duration-500"
          style={{ width: `${stats.progress}%` }}
        />

        {/* Average marker */}
        <div
          className="absolute top-[-4px] h-5 w-[2px] bg-gray-400 z-10"
          style={{ left: `${averageProgress}%` }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-max">
            <span className="text-[10px] font-medium text-gray-500 bg-white px-1 border border-gray-200 rounded">
              합격자 평균 {averageProgress}%
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
