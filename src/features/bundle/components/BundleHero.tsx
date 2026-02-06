interface BundleHeroProps {
    company: string
    jobTitle: string
}

export default function BundleHero({ company, jobTitle }: BundleHeroProps) {
    return (
        <header className="py-12 text-center">
            <div className="container mx-auto px-4">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-6 border border-gray-100">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <rect height="24" rx="4" width="24" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{company} · {jobTitle}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    이 기업에 합격한 <span className="text-[#5D5FEF]">선배들의</span> 준비 과정이에요
                </h1>
                <p className="mt-3 text-gray-500">실제 합격자들의 데이터를 바탕으로 분석했습니다.</p>
            </div>
        </header>
    )
}
