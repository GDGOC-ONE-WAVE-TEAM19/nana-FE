export type FieldId = 'developer' | 'marketing' | 'sales' | 'food' | 'livestock' | 'design' | 'business' | 'other'

export interface Field {
  id: FieldId
  label: string
  labelEn: string
  emoji: string
}

export interface Company {
  id: string
  name: string
  popular: boolean
}

export interface OnboardingState {
  step: 1 | 2
  selectedField: FieldId | null
  selectedCompany: string | null
  searchQuery: string
  activePresetName: string | null
  setStep: (step: 1 | 2) => void
  setSelectedField: (field: FieldId | null) => void
  setSelectedCompany: (company: string | null) => void
  setSearchQuery: (query: string) => void
  setActivePresetName: (name: string | null) => void
  reset: () => void
}
