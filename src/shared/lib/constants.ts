export const APP_NAME = 'StepIn'

export const ROUTES = {
  ONBOARDING: '/onboarding',
  BUNDLES: '/bundles',
  DASHBOARD: '/dashboard',
} as const

export const TODO_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
} as const

export const TODO_CATEGORY = {
  COTE: 'cote',
  PROJECT: 'project',
  CS: 'cs',
  RESUME: 'resume',
  INTERVIEW: 'interview',
  ETC: 'etc',
} as const
