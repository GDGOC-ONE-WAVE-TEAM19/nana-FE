import { useTodos } from '../todo/hooks/useTodos'
import { useTodoStore } from '../todo/stores/todoStore'
import type { TodoCategory } from '../todo/types'

const categoryColors: Record<TodoCategory, { border: string; bg: string }> = {
  cote: { border: 'border-blue-500', bg: 'bg-blue-500' },
  project: { border: 'border-green-500', bg: 'bg-green-500' },
  cs: { border: 'border-purple-500', bg: 'bg-purple-500' },
  resume: { border: 'border-pink-500', bg: 'bg-pink-500' },
  interview: { border: 'border-red-500', bg: 'bg-red-500' },
  etc: { border: 'border-gray-500', bg: 'bg-gray-500' },
}

const categoryLabels: Record<TodoCategory, string> = {
  cote: '코테',
  project: '프로젝트',
  cs: 'CS',
  resume: '이력서',
  interview: '면접',
  etc: '기타',
}

export default function DashboardTodoList() {
  const { todos } = useTodos()
  const toggleTodo = useTodoStore((s) => s.toggleTodo)

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-4">할 일 목록</h3>
      <div className="space-y-3">
        {todos.map((todo) => {
          const colors = categoryColors[todo.category]
          const isDone = todo.status === 'done'

          return (
            <div key={todo.id} className="flex items-start gap-3">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  isDone
                    ? `${colors.bg} ${colors.border}`
                    : `${colors.border} bg-white`
                }`}
              >
                {isDone && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium ${colors.bg} bg-opacity-10 px-2 py-0.5 rounded`}>
                    {categoryLabels[todo.category]}
                  </span>
                </div>
                <p className={`text-sm ${isDone ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                  {todo.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
