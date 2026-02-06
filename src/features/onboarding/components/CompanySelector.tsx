import { useOnboarding } from '../hooks/useOnboarding'

export default function CompanySelector() {
  const { searchQuery, setSearchQuery, selectedCompany, setSelectedCompany, filteredCompanies } = useOnboarding()

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="기업명 검색"
          className="block w-full pl-12 pr-4 py-3.5 bg-gray-100 border-none rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A51F0] focus:bg-white transition-all"
        />
      </div>

      {/* Popular Companies */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">인기 기업</h3>
        <div className="flex flex-wrap gap-2.5">
          {filteredCompanies.map((company) => {
            const isSelected = selectedCompany === company.id
            return (
              <button
                key={company.id}
                onClick={() => setSelectedCompany(isSelected ? null : company.id)}
                className={`flex items-center px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#5A51F0] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isSelected && (
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {company.name}
              </button>
            )
          })}
        </div>
        {filteredCompanies.length === 0 && (
          <p className="text-sm text-gray-500 mt-4">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
