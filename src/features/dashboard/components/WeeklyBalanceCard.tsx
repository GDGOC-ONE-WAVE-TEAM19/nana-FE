import { useTodos } from '../todo/hooks/useTodos'

// Calculate progress by tag
function useTagProgress() {
  const { todos, tags } = useTodos()

  const tagProgress = tags.map(tag => {
    const tagTodos = todos.filter(t => t.tagName === tag)
    const total = tagTodos.length
    const done = tagTodos.filter(t => t.status === 'done').length
    const progress = total > 0 ? Math.round((done / total) * 100) : 0

    return { tag, total, done, progress }
  })

  // Sort by progress (lowest first to highlight areas needing attention)
  tagProgress.sort((a, b) => a.progress - b.progress)

  return tagProgress
}

// Get emoji and status based on progress
function getProgressInfo(progress: number): { emoji: string; status: string; color: string } {
  if (progress >= 80) return { emoji: '🔥', status: '양호', color: 'text-blue-400' }
  if (progress >= 50) return { emoji: '💪', status: '진행중', color: 'text-emerald-400' }
  if (progress >= 30) return { emoji: '⚠️', status: '부족', color: 'text-yellow-400' }
  return { emoji: '😴', status: '부족', color: 'text-yellow-400' }
}

// Get bar color based on progress
function getBarColor(progress: number): string {
  if (progress >= 80) return 'bg-blue-500'
  if (progress >= 50) return 'bg-emerald-500'
  return 'bg-yellow-500'
}

export default function WeeklyBalanceCard() {
  const tagProgress = useTagProgress()

  // Find the tag with lowest progress for tip
  const lowestTag = tagProgress[0]

  return (
    <div className="bg-[#1E1E2E] rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-base font-bold">주간 밸런스 체크</h3>
        <span className="text-xl">📊</span>
      </div>

      {/* Progress bars */}
      <div className="space-y-5 mb-6 relative z-10">
        {tagProgress.slice(0, 3).map(({ tag, progress }) => {
          const info = getProgressInfo(progress)
          return (
            <div key={tag}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${info.color}`}>{info.emoji}</span>
                  <span className="text-sm font-medium">{tag}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${info.color}`}>{info.status}</span>
                  <span className="text-xs text-gray-400">약 {progress}%</span>
                </div>
              </div>
              <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getBarColor(progress)} rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Tip box */}
      {lowestTag && lowestTag.progress < 80 && (
        <div className="bg-[#2C2D3E] rounded-2xl p-4 border border-white/5 relative z-10">
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0 mt-0.5">💡</span>
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="text-yellow-400 font-bold">{lowestTag.tag}</span> 진행률이{' '}
              <span className="text-yellow-400 font-bold">{lowestTag.progress}%</span>로 낮아요.
              이번 주에는 {lowestTag.tag} 투두에 집중해보는 건 어때요?
            </p>
          </div>
        </div>
      )}

      {lowestTag && lowestTag.progress >= 80 && (
        <div className="bg-[#2C2D3E] rounded-2xl p-4 border border-white/5 relative z-10">
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0 mt-0.5">🎉</span>
            <p className="text-xs text-gray-300 leading-relaxed">
              모든 카테고리 진행률이 좋아요! 계속 이 페이스를 유지해보세요!
            </p>
          </div>
        </div>
      )}

      {tagProgress.length === 0 && (
        <div className="text-center text-gray-400 py-4 relative z-10">
          <p className="text-sm">할 일을 추가하면 밸런스를 확인할 수 있어요</p>
        </div>
      )}
    </div>
  )
}
