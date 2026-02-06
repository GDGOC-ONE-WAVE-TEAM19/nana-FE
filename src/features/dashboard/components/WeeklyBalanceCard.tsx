export default function WeeklyBalanceCard() {
  return (
    <div className="bg-[#1F2937] rounded-2xl p-4 sm:p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base sm:text-lg font-bold">주간 밸런스 체크</h3>
        <span className="text-xl">📊</span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">프로젝트</span>
              <span className="text-lg">⚠️</span>
            </div>
            <span className="text-sm text-gray-300">약 40%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '40%' }} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">CS</span>
              <span className="text-lg">🔥</span>
            </div>
            <span className="text-sm text-gray-300">약 80%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <div className="flex items-start gap-2">
          <span className="text-lg">💡</span>
          <p className="text-sm text-gray-300">
            프로젝트 진행이 평균 대비 25% 부족해요. 이번 주에는 프로젝트 투두에 집중해보는 건 어때요?
          </p>
        </div>
      </div>
    </div>
  )
}
