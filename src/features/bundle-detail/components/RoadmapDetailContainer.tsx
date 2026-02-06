import { useParams } from 'react-router-dom'
import RoadmapStep from './RoadmapStep'
import RoadmapCTA from './RoadmapCTA'
import { useRoadmapDetail, useCopyRoadmap } from '../hooks/useRoadmapDetail'

export default function RoadmapDetailContainer() {
    const { authorId } = useParams<{ authorId: string }>()

    // Fetch preset data from API
    const { data: roadmap, isLoading, error } = useRoadmapDetail(authorId)
    const { copyRoadmap, isPending: isCopying } = useCopyRoadmap()

    const handleCopyRoadmap = () => {
        if (authorId) {
            copyRoadmap(authorId)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center">
                <div className="text-gray-500">로드맵을 불러오는 중...</div>
            </div>
        )
    }

    if (error || !roadmap) {
        return (
            <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-2">로드맵을 불러오는데 실패했습니다.</div>
                    <a href="/bundles" className="text-[#6C5CE7] hover:underline">
                        목록으로 돌아가기
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f7f8fa]">
            <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-[1100px]">
                {/* Hero Section - simplified for preset data */}
                <section className="flex flex-col items-center justify-center mb-12 text-center">
                    <h1 className="text-2xl text-gray-900 mb-2 font-extrabold">{roadmap.name}</h1>
                    {roadmap.description && (
                        <p className="text-gray-500 mb-6 font-medium max-w-lg">{roadmap.description}</p>
                    )}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                            📋 {roadmap.steps.length}개 단계
                        </div>
                        <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                            ✅ {roadmap.todoCount}개 투두
                        </div>
                    </div>
                </section>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Roadmap Steps */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {roadmap.steps.map((step, index) => (
                            <RoadmapStep
                                key={step.id}
                                step={step}
                                defaultExpanded={index === 0}
                            />
                        ))}
                    </div>

                    {/* Right Column: CTA */}
                    <div className="lg:col-span-4">
                        <RoadmapCTA onCopy={handleCopyRoadmap} isLoading={isCopying} />
                    </div>
                </div>
            </main>
        </div>
    )
}
