import TodoList from '../features/todo/components/TodoList'
import FilterSidebar from '../features/todo/components/FilterSidebar'

export default function MyPlanPage() {
  return (
    <div className="flex gap-6">
      <FilterSidebar />
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">My Plan</h2>
        <TodoList />
      </div>
    </div>
  )
}
