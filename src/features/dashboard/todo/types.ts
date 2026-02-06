export type TodoStatus = 'pending' | 'in_progress' | 'done'
export type TodoCategory = 'cote' | 'project' | 'cs' | 'resume' | 'interview' | 'etc'

export interface Todo {
  id: string
  title: string
  description: string
  status: TodoStatus
  category: TodoCategory
  dueDate?: string
  createdAt: string
}
