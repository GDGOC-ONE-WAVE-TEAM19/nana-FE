export interface OnboardingData {
  companyId: string
  jobId: string
  experience: string
}

export interface OnboardingStep {
  id: number
  title: string
  completed: boolean
}
