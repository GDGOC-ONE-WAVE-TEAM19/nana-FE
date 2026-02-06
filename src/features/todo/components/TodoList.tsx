import { useTodos } from '../hooks/useTodos'
import TodoItem from './TodoItem'
import ProgressBar from '../../../shared/components/ui/ProgressBar'

export default function TodoList() {
  const { todos, stats } = useTodos()

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <ProgressBar value={stats.progress} />
        <span className="text-sm text-gray-600 whitespace-nowrap">{stats.progress}%</span>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-gray-500 text-center py-8">No todos match the current filter.</p>
      )}
    </div>
  )
}
