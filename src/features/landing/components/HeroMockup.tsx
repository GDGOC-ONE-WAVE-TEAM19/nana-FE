export default function HeroMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Browser Chrome Bar */}
      <div className="bg-gray-100 px-3 py-2 lg:px-4 lg:py-3 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5 lg:gap-2">
          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 ml-3 lg:ml-4 bg-white rounded-md px-3 py-1 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs text-gray-500 font-medium">
          stepin.kr/bundles
        </div>
      </div>

      {/* Browser Content */}
      <div className="p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
        {/* Month Tabs */}
        <div className="flex gap-2 mb-4 lg:mb-6">
          <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-[#5048e5] to-[#7B4EFF] text-white rounded-lg text-xs lg:text-sm font-bold shadow-sm">
            Month 1
          </div>
          <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs lg:text-sm font-medium">
            Month 2
          </div>
        </div>

        {/* Category Badges */}
        <div className="flex gap-1.5 lg:gap-2 mb-3 lg:mb-4 flex-wrap">
          <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-full bg-[#E3F2FD] text-blue-700 text-[10px] lg:text-xs font-bold">
            코테
          </span>
          <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-full bg-[#F3E5F5] text-purple-700 text-[10px] lg:text-xs font-bold">
            CS
          </span>
          <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-full bg-[#E0F2F1] text-teal-700 text-[10px] lg:text-xs font-bold">
            프로젝트
          </span>
        </div>

        {/* Todo Items */}
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded border-2 border-[#5048e5] bg-[#5048e5] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[10px] lg:text-sm">check</span>
            </div>
            <span className="text-xs lg:text-sm text-gray-400 line-through">프로그래머스 Lv2 풀기</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded border-2 border-gray-300" />
            <span className="text-xs lg:text-sm text-gray-700 font-medium">운영체제 정리</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded border-2 border-gray-300" />
            <span className="text-xs lg:text-sm text-gray-700 font-medium">팀 프로젝트 회의</span>
          </div>
        </div>
      </div>
    </div>
  )
}
