import { useTodos } from '../todo/hooks/useTodos'

export default function ProgressSection() {
  const { stats } = useTodos()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">전체 진행률</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-gray-400">
            {stats.done}/{stats.total}개 완료
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${stats.progress}%`,
              background: 'linear-gradient(to right, #5048e5, #7C3AED)',
            }}
          />
        </div>
        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5048e5] to-[#7C3AED] bg-clip-text text-transparent">
          {stats.progress}%
        </span>
      </div>
    </div>
  )
}
