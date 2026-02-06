import type { RoadmapAuthor } from '../types'

interface RoadmapHeroProps {
    author: RoadmapAuthor
}

// Icons
const ClockIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
    </svg>
)

const CheckCircleIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
    </svg>
)

const VerifiedBadge = () => (
    <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-sm">
        <svg className="w-5 h-5 text-[#6C5CE7] fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    </div>
)

export default function RoadmapHero({ author }: RoadmapHeroProps) {
    return (
        <section className="flex flex-col items-center justify-center mb-12 text-center">
            {/* Avatar with Badge */}
            <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                    <img
                        alt={`${author.nickname} Avatar`}
                        className="w-full h-full object-cover"
                        src={author.avatarUrl}
                    />
                </div>
                {author.isVerified && <VerifiedBadge />}
            </div>

            {/* User Info */}
            <h1 className="text-2xl text-gray-900 mb-1 font-extrabold">{author.nickname}</h1>
            <p className="text-gray-500 mb-6 font-medium">{author.title}</p>

            {/* Stats Pills */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                    <ClockIcon />
                    {author.prepMonths}개월 준비
                </div>
                <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                    <CheckCircleIcon />
                    {author.totalTodos}개 투두
                </div>
            </div>
        </section>
    )
}
