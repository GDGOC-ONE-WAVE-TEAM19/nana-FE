import { useNavigate } from 'react-router-dom'
import type { RoadmapAuthor } from '../types'
import RoadmapHero from './RoadmapHero'
import RoadmapStep from './RoadmapStep'
import RoadmapCTA from './RoadmapCTA'

// Mock data for demonstration
const mockAuthor: RoadmapAuthor = {
    id: '1',
    nickname: '코딩은지',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJLT4cdGiEaL-YhIi5lDNMUi6N61KTF02K42VH_I9UnygBRN1aKEgIKhzUZ0alyvvlFHd3xVMmd9fV6YCvxTiNAU26Ar_4cF_CWqEIiMFAD8cen5adnCFvtvZ2cnZRa7qNE7f_abgDWgzfPuFn3ihczg4LEsTuQ4C59ciaksCGIBJ_zEansdov9ycDHoAvEfC9bu3xp_xUDBQkU5a3vbVaBcqyKbbiqfunHvLD4dL5WQpfpKpk69WZCJ_W7x641F--62PqeGfs3x4',
    title: 'frontend developer @ tech startup',
    prepMonths: 6,
    totalTodos: 48,
    isVerified: true,
    steps: [
        {
            id: 'step-1',
            order: 1,
            title: '기초 다지기',
            todos: [
                { id: 'todo-1', title: '백준 브론즈 10문제 풀기', category: 'cote', isCompleted: true },
                { id: 'todo-2', title: '파이썬 기초 문법 떼기', category: 'etc', isCompleted: false },
                { id: 'todo-3', title: '운영체제 1-3장 수강', category: 'cs', isCompleted: false },
                { id: 'todo-4', title: '투두리스트 기획하기', category: 'project', isCompleted: true },
            ],
        },
        {
            id: 'step-2',
            order: 2,
            title: '알고리즘 심화',
            todos: [
                { id: 'todo-5', title: '백준 실버 20문제 풀기', category: 'cote', isCompleted: false },
                { id: 'todo-6', title: 'DP 유형 정리', category: 'cote', isCompleted: false },
                { id: 'todo-7', title: '그래프 탐색 기초', category: 'cote', isCompleted: false },
            ],
        },
        {
            id: 'step-3',
            order: 3,
            title: '상태관리 정복',
            todos: [
                { id: 'todo-8', title: 'React 공식문서 읽기', category: 'etc', isCompleted: false },
                { id: 'todo-9', title: 'Zustand 튜토리얼', category: 'project', isCompleted: false },
                { id: 'todo-10', title: '상태관리 비교 블로그 작성', category: 'project', isCompleted: false },
            ],
        },
    ],
}

export default function RoadmapDetailContainer() {
    const navigate = useNavigate()

    // In real implementation, fetch author data using authorId from useParams
    const author = mockAuthor

    const handleCopyRoadmap = () => {
        // In real implementation, copy roadmap to user's plan
        navigate('/bundles')
    }

    return (
        <div className="bg-[#f7f8fa]">
            <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-[1100px]">
                {/* Hero Section */}
                <RoadmapHero author={author} />

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Roadmap Steps */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {author.steps.map((step, index) => (
                            <RoadmapStep
                                key={step.id}
                                step={step}
                                defaultExpanded={index === 0}
                            />
                        ))}
                    </div>

                    {/* Right Column: CTA */}
                    <div className="lg:col-span-4">
                        <RoadmapCTA onCopy={handleCopyRoadmap} />
                    </div>
                </div>
            </main>
        </div>
    )
}
