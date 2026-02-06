import { create } from 'zustand'
import type { OnboardingState } from '../types'

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  selectedField: null,
  selectedCompany: null,
  searchQuery: '',
  setStep: (step) => set({ step }),
  setSelectedField: (field) => set({ selectedField: field }),
  setSelectedCompany: (company) => set({ selectedCompany: company }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  reset: () => set({ step: 1, selectedField: null, selectedCompany: null, searchQuery: '' }),
}))
