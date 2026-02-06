export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface SelectOption {
  label: string
  value: string
}

export interface PaginationParams {
  page: number
  limit: number
}
