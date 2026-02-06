export interface User {
  id: string
  email: string
  name: string
  targetCompany: string
  targetJob: string
  createdAt: string
}

export interface Company {
  id: string
  name: string
  logoUrl?: string
  industry: string
}

export interface Job {
  id: string
  title: string
  companyId: string
  description: string
  requirements: string[]
}
