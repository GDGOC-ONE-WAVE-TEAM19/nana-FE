import { useMemo } from 'react'
import { useOnboardingStore } from '../stores/onboardingStore'
import type { Field, Company } from '../types'

export const FIELDS: Field[] = [
  { id: 'developer', label: '개발', labelEn: 'Developer', emoji: '💻' },
  { id: 'marketing', label: '마케팅', labelEn: 'Marketing', emoji: '📢' },
  { id: 'sales', label: '영업', labelEn: 'Sales', emoji: '🤝' },
  { id: 'food', label: '식품', labelEn: 'Food', emoji: '🍳' },
  { id: 'livestock', label: '축산', labelEn: 'Livestock', emoji: '🐄' },
  { id: 'design', label: '디자인', labelEn: 'Design', emoji: '🎨' },
  { id: 'business', label: '경영/기획', labelEn: 'Business', emoji: '📊' },
  { id: 'other', label: '기타', labelEn: 'Other', emoji: '➕' },
]

export const POPULAR_COMPANIES: Company[] = [
  { id: 'naver', name: '네이버', popular: true },
  { id: 'kakao', name: '카카오', popular: true },
  { id: 'toss', name: '토스', popular: true },
  { id: 'line', name: '라인', popular: true },
  { id: 'coupang', name: '쿠팡', popular: true },
  { id: 'baemin', name: '배달의민족', popular: true },
  { id: 'samsung', name: '삼성전자', popular: false },
  { id: 'lg', name: 'LG전자', popular: false },
  { id: 'sk', name: 'SK하이닉스', popular: false },
  { id: 'hyundai', name: '현대자동차', popular: false },
  { id: 'woowa', name: '우아한형제들', popular: false },
  { id: 'daangn', name: '당근', popular: false },
]

export function useOnboarding() {
  const store = useOnboardingStore()

  const filteredCompanies = useMemo(() => {
    if (!store.searchQuery.trim()) return POPULAR_COMPANIES.filter((c) => c.popular)
    const q = store.searchQuery.toLowerCase()
    return POPULAR_COMPANIES.filter((c) => c.name.toLowerCase().includes(q))
  }, [store.searchQuery])

  const canProceedStep1 = store.selectedField !== null
  const canProceedStep2 = store.selectedCompany !== null

  const goToStep2 = () => {
    if (canProceedStep1) store.setStep(2)
  }

  const goBackToStep1 = () => {
    store.setStep(1)
  }

  return {
    ...store,
    filteredCompanies,
    canProceedStep1,
    canProceedStep2,
    goToStep2,
    goBackToStep1,
  }
}
