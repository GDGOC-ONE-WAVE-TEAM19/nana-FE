import { useTodos, useToggleTodo, useDeleteTodo } from '../todo/hooks/useTodos'

// Generate a color for a tag name (consistent hash-based color)
function getTagColor(tagName: string): { border: string; bg: string } {
  const colors = [
    { border: 'border-blue-500', bg: 'bg-blue-500' },
    { border: 'border-green-500', bg: 'bg-green-500' },
    { border: 'border-purple-500', bg: 'bg-purple-500' },
    { border: 'border-pink-500', bg: 'bg-pink-500' },
    { border: 'border-orange-500', bg: 'bg-orange-500' },
    { border: 'border-teal-500', bg: 'bg-teal-500' },
    { border: 'border-indigo-500', bg: 'bg-indigo-500' },
    { border: 'border-red-500', bg: 'bg-red-500' },
  ]
  let hash = 0
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

interface DashboardTodoListProps {
  selectedTag?: string
}

export default function DashboardTodoList({ selectedTag = 'all' }: DashboardTodoListProps) {
  const { todos, isLoading, error } = useTodos()
  const { mutate: toggleTodo } = useToggleTodo()
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo()

  // Filter todos by selected tag
  const filteredTodos = selectedTag === 'all'
    ? todos
    : todos.filter(t => t.tagName === selectedTag)

  const handleDelete = (todoId: string) => {
    if (confirm('이 할 일을 삭제하시겠습니까?')) {
      deleteTodo(todoId)
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4">할 일 목록</h3>
        <div className="text-center text-gray-500 py-8">로딩 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4">할 일 목록</h3>
        <div className="text-center text-red-500 py-8">데이터를 불러오는데 실패했습니다.</div>
      </div>
    )
  }

  if (!filteredTodos || filteredTodos.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4">할 일 목록</h3>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-2">
            {selectedTag === 'all' ? '등록된 할 일이 없습니다.' : `"${selectedTag}" 태그의 할 일이 없습니다.`}
          </p>
          <p className="text-sm text-gray-400">
            로드맵에서 "내 플랜으로 가져오기"를 눌러 시작해보세요!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-4">할 일 목록</h3>
      <div className="space-y-3">
        {filteredTodos.map((todo) => {
          const colors = getTagColor(todo.tagName)
          const isDone = todo.status === 'done'

          return (
            <div key={todo.id} className="flex items-start gap-3 group">
              <button
                onClick={() => toggleTodo({ id: todo.id, currentStatus: todo.status })}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isDone
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
                    {todo.tagName}
                  </span>
                </div>
                <p className={`text-sm ${isDone ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                  {todo.title}
                </p>
              </div>
              {/* Delete button - appears on hover */}
              <button
                onClick={() => handleDelete(todo.id)}
                disabled={isDeleting}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 disabled:opacity-50 p-1"
                title="삭제"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
