import { useQueryClient } from '@tanstack/react-query'
import { todosApi } from '../../../shared/api/apiClient'
import type { TodoRead } from '../../../shared/api'

export default function DashboardHeader() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const dayName = dayNames[today.getDay()]

  const queryClient = useQueryClient()

  const handleDeleteAll = async () => {
    const cached = queryClient.getQueryData<TodoRead[]>(['todos'])
    if (!cached || cached.length === 0) return
    if (!confirm('모든 투두를 삭제할까요?')) return
    queryClient.setQueryData(['todos'], [])
    await Promise.all(cached.map(t => todosApi.deleteTodoV1TodosTodoIdDelete(t.id)))
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {year}년 {month}월 {date}일 {dayName}
        </h1>
        <span
          className="bg-[#5048e5] text-white rounded-full px-3 py-1 text-xs sm:text-sm font-medium cursor-pointer select-none active:scale-95 transition-transform"
          onClick={handleDeleteAll}
        >
          D+93
        </span>
      </div>
      <p className="text-gray-600">
        오늘도 한 걸음씩 앞으로 걸어볼까요? 🔥
      </p>
    </div>
  )
}
