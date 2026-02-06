import { create } from 'zustand'
import type { Todo, TodoStatus, TodoCategory } from '../types'

interface TodoState {
  todos: Todo[]
  filter: {
    status: TodoStatus | 'all'
    category: TodoCategory | 'all'
  }
  addTodo: (todo: Todo) => void
  toggleTodo: (id: string) => void
  setFilter: (filter: Partial<TodoState['filter']>) => void
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    {
      id: '1',
      title: 'Spring Boot Deep Dive',
      description: 'Master Spring Boot internals and auto-configuration',
      status: 'in_progress',
      category: 'study',
      dueDate: '2026-03-01',
      createdAt: '2026-02-01',
    },
    {
      id: '2',
      title: 'System Design Practice',
      description: 'Practice designing large-scale distributed systems',
      status: 'pending',
      category: 'study',
      dueDate: '2026-03-15',
      createdAt: '2026-02-01',
    },
    {
      id: '3',
      title: 'Algorithm - 200 Problems',
      description: 'Solve 200 algorithm problems on Baekjoon',
      status: 'pending',
      category: 'study',
      dueDate: '2026-04-01',
      createdAt: '2026-02-01',
    },
  ],
  filter: {
    status: 'all',
    category: 'all',
  },
  addTodo: (todo) =>
    set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'done' ? 'pending' : 'done',
            }
          : todo,
      ),
    })),
  setFilter: (filter) =>
    set((state) => ({
      filter: { ...state.filter, ...filter },
    })),
}))
