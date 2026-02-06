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
