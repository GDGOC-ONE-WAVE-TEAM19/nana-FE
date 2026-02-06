export default function DashboardHeader() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const dayName = dayNames[today.getDay()]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {year}년 {month}월 {date}일 {dayName}
        </h1>
        <span className="bg-[#5048e5] text-white rounded-full px-3 py-1 text-xs sm:text-sm font-medium">
          D+93
        </span>
      </div>
      <p className="text-gray-600">
        오늘도 한 걸음씩 앞으로 걸어볼까요? 🔥
      </p>
    </div>
  )
}
