import { useTodoStore } from '../todo/stores/todoStore'
import type { TodoCategory } from '../todo/types'

const categories: { value: TodoCategory | 'all'; label: string; color: string }[] = [
  { value: 'all', label: '전체', color: '' },
  { value: 'cote', label: '코테', color: 'bg-blue-500' },
  { value: 'project', label: '프로젝트', color: 'bg-green-500' },
  { value: 'cs', label: 'CS', color: 'bg-purple-500' },
  { value: 'resume', label: '이력서', color: 'bg-pink-500' },
]

export default function CategoryFilterPills() {
  const { filter, setFilter } = useTodoStore()

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setFilter({ category: cat.value })}
          className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            filter.category === cat.value
              ? 'bg-[#5048e5] text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
        >
          {cat.color && filter.category !== cat.value && (
            <span className={`w-2 h-2 rounded-full ${cat.color}`} />
          )}
          {cat.label}
        </button>
      ))}
    </div>
  )
}
