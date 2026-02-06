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
      title: '순환 알고리즘 2문제 풀기',
      description: '백준 순환 알고리즘 문제 2개 해결',
      status: 'done',
      category: 'cote',
      dueDate: '2026-02-07',
      createdAt: '2026-02-05',
    },
    {
      id: '2',
      title: 'CS 스터디 발표 준비',
      description: '네트워크 OSI 7계층 발표 자료 준비',
      status: 'done',
      category: 'cs',
      dueDate: '2026-02-08',
      createdAt: '2026-02-05',
    },
    {
      id: '3',
      title: '이력서 멘토링 피드백 받기',
      description: '이력서 초안 작성 후 멘토에게 피드백 요청',
      status: 'in_progress',
      category: 'resume',
      dueDate: '2026-02-10',
      createdAt: '2026-02-06',
    },
    {
      id: '4',
      title: '백준 골드5 문제 풀기',
      description: '골드5 난이도 알고리즘 문제 1개 해결',
      status: 'pending',
      category: 'cote',
      dueDate: '2026-02-09',
      createdAt: '2026-02-07',
    },
    {
      id: '5',
      title: '포트폴리오 API 리팩토링',
      description: 'REST API 구조 개선 및 에러 핸들링 추가',
      status: 'done',
      category: 'project',
      dueDate: '2026-02-06',
      createdAt: '2026-02-03',
    },
    {
      id: '6',
      title: '네트워크 OSI 7계층 정리',
      description: 'OSI 7계층 개념 정리 및 예제 작성',
      status: 'pending',
      category: 'cs',
      dueDate: '2026-02-12',
      createdAt: '2026-02-07',
    },
    {
      id: '7',
      title: '자기소개서 초안 작성',
      description: '지원 회사 자기소개서 1차 초안 완성',
      status: 'pending',
      category: 'resume',
      dueDate: '2026-02-15',
      createdAt: '2026-02-07',
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
