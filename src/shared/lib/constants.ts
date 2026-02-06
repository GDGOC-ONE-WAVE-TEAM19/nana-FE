export const APP_NAME = 'StepIn'

export const ROUTES = {
  ONBOARDING: '/onboarding',
  BUNDLES: '/bundles',
  PLAN: '/plan',
  DASHBOARD: '/dashboard',
} as const

export const TODO_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
} as const

export const TODO_CATEGORY = {
  STUDY: 'study',
  PROJECT: 'project',
  CERTIFICATE: 'certificate',
  INTERVIEW: 'interview',
  NETWORKING: 'networking',
} as const
