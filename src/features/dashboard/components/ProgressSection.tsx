import { useDashboard } from '../hooks/useDashboard'

export default function ProgressSection() {
  const { total, progress } = useDashboard()

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h3 className="text-lg font-semibold mb-4">오늘의 달성률</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, #5048e5, #6C5CE7)',
              }}
            />
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-[#5048e5]">{progress}%</span>
        </div>
        <p className="text-sm text-gray-500">
          오늘의 할 일 {total}개 중
        </p>
      </div>
    </div>
  )
}
