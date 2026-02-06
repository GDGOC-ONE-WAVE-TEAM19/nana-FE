import { useTodoStore } from '../todo/stores/todoStore'

export default function TodayPlanCard() {
  const todos = useTodoStore((s) => s.todos)
  const displayTodos = todos.slice(0, 3)

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eunji"
            alt="Coding Eunji"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold text-gray-900">Coding Eunji</p>
            <p className="text-sm text-gray-500">데이터 엔지니어 취준 6개월 차</p>
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
        <span className="text-lg">⚠️</span>
        <p className="text-sm text-gray-700">
          프로젝트 진행이 평균 대비 느려요
        </p>
      </div>
    </div>
  )
}
