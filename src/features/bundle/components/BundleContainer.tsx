import { useState } from 'react'
import type { BundleAuthor } from '../types'
import BundleHero from './BundleHero'
import BundleFilters from './BundleFilters'
import BundleAuthorCard from './BundleAuthorCard'
import BundlePagination from './BundlePagination'

// Mock data for demonstration
const mockAuthors: BundleAuthor[] = [
    {
        id: '1',
        nickname: '코딩은지',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '지방거점국립대',
        major: '컴공',
        quote: '코딩테스트 준비가 가장 중요했어요. 백준 골드 달성 후 자신감이 붙었습니다.',
        prepMonths: 6,
        completionRate: 96,
        isVerified: true,
    },
    {
        id: '2',
        nickname: '서버장인',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '수도권 4년제',
        major: '소프트웨어',
        quote: 'CS 지식 면접 대비에 중점을 두었습니다. 스터디가 큰 도움이 되었어요.',
        prepMonths: 7,
        completionRate: 98,
        isVerified: true,
    },
    {
        id: '3',
        nickname: '개발왕',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '서울 4년제',
        major: '비전공',
        quote: '포트폴리오 프로젝트를 2개 완성하고 코드 리뷰를 많이 받았습니다.',
        prepMonths: 8,
        completionRate: 100,
        isVerified: true,
    },
    {
        id: '4',
        nickname: '자바조아',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '지방거점국립대',
        major: '통계학',
        quote: '알고리즘 스터디를 주 2회 진행하며 감을 잃지 않으려 노력했습니다.',
        prepMonths: 5,
        completionRate: 95,
        isVerified: true,
    },
    {
        id: '5',
        nickname: '스프링장인',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '인서울 4년제',
        major: '전자공학',
        quote: '면접 스터디를 통해 말하는 연습을 많이 한 것이 합격의 비결입니다.',
        prepMonths: 9,
        completionRate: 92,
        isVerified: true,
    },
    {
        id: '6',
        nickname: '디비마스터',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBfZ30_pszrtW81u9RZbiZ5gCrNz-rY6AQSClwzDvoEInIKnIgDJFBWgS3S3t3kNg599BDhQcYgwxBdffNQCCMZt8kjapUkWxlRTFPdCRzjobClKAdhwGr85cSCXd_VfOP3uyIkj9pBPhuqetHt2as9J9Wlvddw5ZQbJeiGDiKRr1cpVhUkTFRx0glU1e31tr12u9bhBu4XYAxu9JGR4h3vnUnGdCOydvEV55TCuVsINazuJ_71PdoH47c2ut1_LQfoiU1Lg_WlA',
        university: '해외대',
        major: '정보시스템',
        quote: '데이터베이스 설계 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.',
        prepMonths: 6,
        completionRate: 97,
        isVerified: true,
    },
]

interface BundleContainerProps {
    company?: string
    jobTitle?: string
}

export default function BundleContainer({
    company = '네이버',
    jobTitle = '백엔드 개발'
}: BundleContainerProps) {
    const [prepPeriod, setPrepPeriod] = useState('6')
    const [difficulty, setDifficulty] = useState('medium')
    const [schoolTypes, setSchoolTypes] = useState<string[]>(['regional'])
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 3

    const handleViewRoadmap = (authorId: string) => {
        console.log('View roadmap for author:', authorId)
        // Navigate to roadmap detail page
    }

    return (
        <div className="min-h-screen bg-[#F8F9FD]">
            {/* Hero Section */}
            <BundleHero company={company} jobTitle={jobTitle} />

            {/* Main Layout */}
            <main className="flex-grow container mx-auto px-4 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar (Filters) */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <BundleFilters
                            prepPeriod={prepPeriod}
                            onPrepPeriodChange={setPrepPeriod}
                            difficulty={difficulty}
                            onDifficultyChange={setDifficulty}
                            schoolTypes={schoolTypes}
                            onSchoolTypesChange={setSchoolTypes}
                        />
                    </aside>

                    {/* Content Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {mockAuthors.map((author) => (
                                <BundleAuthorCard
                                    key={author.id}
                                    author={author}
                                    onViewRoadmap={handleViewRoadmap}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <BundlePagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
