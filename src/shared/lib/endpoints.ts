export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    me: '/auth/me',
  },
  bundles: {
    list: '/bundles',
    detail: (id: string) => `/bundles/${id}`,
    create: '/bundles',
  },
  todos: {
    list: '/todos',
    detail: (id: string) => `/todos/${id}`,
    toggle: (id: string) => `/todos/${id}/toggle`,
  },
  companies: {
    list: '/companies',
    detail: (id: string) => `/companies/${id}`,
  },
  dashboard: {
    summary: '/dashboard/summary',
    progress: '/dashboard/progress',
  },
} as const
