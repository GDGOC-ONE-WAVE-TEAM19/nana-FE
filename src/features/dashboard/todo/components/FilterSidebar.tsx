import { useTodoStore } from '../stores/todoStore'
import type { TodoStatus, TodoCategory } from '../types'

const statusOptions: { value: TodoStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
]

const categoryOptions: { value: TodoCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cote', label: '코테' },
  { value: 'project', label: '프로젝트' },
  { value: 'cs', label: 'CS' },
  { value: 'resume', label: '이력서' },
  { value: 'interview', label: '면접' },
  { value: 'etc', label: '기타' },
]

export default function FilterSidebar() {
  const { filter, setFilter } = useTodoStore()

  return (
    <aside className="w-48 space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Status</h4>
        <div className="space-y-1">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter({ status: opt.value })}
              className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter.status === opt.value
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Category</h4>
        <div className="space-y-1">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter({ category: opt.value })}
              className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter.category === opt.value
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
