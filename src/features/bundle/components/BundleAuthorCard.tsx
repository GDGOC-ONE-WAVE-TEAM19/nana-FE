import type { BundleAuthor } from '../types'

// Icons
const CalendarIcon = () => (
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="4" />
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16" x2="16" y1="2" y2="6" />
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="8" x2="8" y1="2" y2="6" />
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="10" y2="10" />
    </svg>
)

const TrophyIcon = () => (
    <svg className="h-4 w-4 text-[#6C5CE7]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.2 6.41C20.89 6.41 21.5 6.84 21.78 7.47C22.61 9.38 22.04 12.03 20.31 13.92C19.38 14.93 18.23 15.65 17 16V16.3C17 18.39 15.62 20.17 13.68 20.78L14 22H10L10.32 20.78C8.38 20.17 7 18.39 7 16.3V16C5.77 15.65 4.62 14.93 3.69 13.92C1.96 12.03 1.39 9.38 2.22 7.47C2.5 6.84 3.11 6.41 3.8 6.41V6C3.8 3.79 5.59 2 7.8 2H16.2C18.41 2 20.2 3.79 20.2 6V6.41ZM5.5 8H4.63C4.16 9.31 4.38 10.97 5.31 12C5.79 12.5 6.37 12.9 7 13.15V8.82L5.5 8ZM18.5 8L17 8.82V13.15C17.63 12.9 18.21 12.5 18.69 12C19.62 10.97 19.84 9.31 19.37 8H18.5Z" />
    </svg>
)

const VerifiedIcon = () => (
    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    </svg>
)

interface BundleAuthorCardProps {
    author: BundleAuthor
    onViewRoadmap?: (authorId: string) => void
}

export default function BundleAuthorCard({ author, onViewRoadmap }: BundleAuthorCardProps) {
    return (
        <article className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-[#6C5CE7] flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
            <div>
                {/* Profile Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <img
                            alt={author.nickname}
                            className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                            src={author.avatarUrl}
                        />
                        <div>
                            <h3 className="font-bold text-[#1A1A1A]">{author.nickname}</h3>
                            <p className="text-xs text-[#888888]">{author.university} · {author.major}</p>
                        </div>
                    </div>
                    {author.isVerified && (
                        <div className="text-green-500">
                            <VerifiedIcon />
                        </div>
                    )}
                </div>

                {/* Quote Box */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                        "{author.quote}"
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                        <CalendarIcon />
                        <span>{author.prepMonths}개월 준비</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <TrophyIcon />
                        <span>{author.completionRate}% 완료</span>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <button
                onClick={() => onViewRoadmap?.(author.id)}
                className="w-full py-3 rounded-xl bg-[#EFEEFF] text-[#6C5CE7] font-bold text-sm hover:bg-purple-100 transition-colors flex items-center justify-center gap-1 group"
            >
                이 로드맵 보기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </article>
    )
}
