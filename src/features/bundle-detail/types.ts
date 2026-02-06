// Types for Roadmap Detail feature

export interface RoadmapTodo {
    id: string
    title: string
    category: 'cote' | 'cs' | 'project' | 'etc'
    isCompleted: boolean
}

export interface RoadmapStep {
    id: string
    order: number
    title: string
    todos: RoadmapTodo[]
}

export interface RoadmapAuthor {
    id: string
    nickname: string
    avatarUrl: string
    title: string // e.g. "frontend developer @ tech startup"
    prepMonths: number
    totalTodos: number
    isVerified: boolean
    steps: RoadmapStep[]
}

// Category colors mapping
export const categoryColors: Record<RoadmapTodo['category'], { bg: string; text: string; label: string }> = {
    cote: { bg: 'bg-[#E3F2FD]', text: 'text-blue-600', label: '코테' },
    cs: { bg: 'bg-[#F3E5F5]', text: 'text-purple-600', label: 'CS' },
    project: { bg: 'bg-[#E0F2F1]', text: 'text-teal-600', label: '프로젝트' },
    etc: { bg: 'bg-[#F5F5F5]', text: 'text-gray-600', label: '기타' },
}
