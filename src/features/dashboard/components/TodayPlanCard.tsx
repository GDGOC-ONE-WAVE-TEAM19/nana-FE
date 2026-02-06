import InitialAvatar from '../../../shared/components/ui/InitialAvatar'
import { useOnboardingStore } from '../../onboarding/stores/onboardingStore'
import { usePreset } from '../../bundle/hooks/usePresets'
import { useTodos } from '../todo/hooks/useTodos'

function getStatusMessage(progress: number): { emoji: string; message: string } {
  if (progress >= 80) return { emoji: '🎉', message: '오늘 할 일을 거의 다 했어요!' }
  if (progress >= 50) return { emoji: '💪', message: '절반 이상 완료했어요, 힘내세요!' }
  if (progress > 0) return { emoji: '🔥', message: '좋은 시작이에요, 계속 진행해 보세요' }
  return { emoji: '📋', message: '오늘의 할 일을 시작해 보세요' }
}

export default function TodayPlanCard() {
  const { todos, stats } = useTodos()
  const activePresetName = useOnboardingStore((s) => s.activePresetName)
  const { data: preset } = usePreset(activePresetName ?? undefined)

  const displayName = preset?.name ?? 'StepIn 준비생'
  const subtitle = preset?.description ?? '로드맵을 가져와 보세요'
  const displayTodos = todos.slice(0, 3)
  const { emoji, message } = getStatusMessage(stats.progress)

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <InitialAvatar name={displayName} />
          <div>
            <p className="font-bold text-gray-900">{displayName}</p>
            <p className="text-sm text-gray-500 line-clamp-1">{subtitle}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {displayTodos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                todo.status === 'done'
                  ? 'bg-[#5048e5] border-[#5048e5]'
                  : 'border-[#5048e5]'
              }`}
            >
              {todo.status === 'done' && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                todo.status === 'done'
                  ? 'line-through text-gray-400'
                  : 'text-gray-900'
              }`}
            >
              {todo.title}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 rounded-lg p-2.5 sm:p-3 flex items-start gap-2">
        <span className="text-lg">{emoji}</span>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  )
}
