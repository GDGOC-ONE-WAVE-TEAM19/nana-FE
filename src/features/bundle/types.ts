export interface BundleTodo {
  id: string
  title: string
  description: string
  category: string
  estimatedHours: number
  order: number
}

export interface Bundle {
  id: string
  title: string
  description: string
  targetCompany: string
  targetJob: string
  todos: BundleTodo[]
  copiedCount: number
  createdAt: string
}

// Author profile for bundle list cards
export interface BundleAuthor {
  id: string
  nickname: string
  avatarUrl: string
  university: string
  major: string
  quote: string
  prepMonths: number
  completionRate: number
  isVerified: boolean
}
