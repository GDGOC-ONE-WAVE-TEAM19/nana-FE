export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: {
    total: number
    page: number
    limit: number
  }
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, string>
}
