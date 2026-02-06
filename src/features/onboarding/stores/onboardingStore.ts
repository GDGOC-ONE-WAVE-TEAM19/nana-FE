import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { OnboardingState } from '../types'

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      step: 1,
      selectedField: null,
      selectedCompany: null,
      searchQuery: '',
      activePresetName: null,
      setStep: (step) => set({ step }),
      setSelectedField: (field) => set({ selectedField: field }),
      setSelectedCompany: (company) => set({ selectedCompany: company }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setActivePresetName: (name) => set({ activePresetName: name }),
      reset: () => set({ step: 1, selectedField: null, selectedCompany: null, searchQuery: '', activePresetName: null }),
    }),
    {
      name: 'onboarding-storage',
      partialize: (state) => ({
        selectedField: state.selectedField,
        selectedCompany: state.selectedCompany,
        activePresetName: state.activePresetName,
      }),
    },
  ),
)
