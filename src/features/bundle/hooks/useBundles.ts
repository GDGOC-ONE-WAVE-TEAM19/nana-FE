import { useQuery } from '@tanstack/react-query'
import type { Bundle } from '../types'

async function fetchBundles(): Promise<Bundle[]> {
  // Mock data - replace with actual API call
  return [
    {
      id: '1',
      title: 'Naver Backend Prep',
      description: 'Complete preparation bundle for Naver backend engineer position',
      targetCompany: 'Naver',
      targetJob: 'Backend Engineer',
      todos: [
        { id: '1', title: 'Spring Boot Deep Dive', description: 'Master Spring Boot internals', category: 'study', estimatedHours: 40, order: 1 },
        { id: '2', title: 'System Design Practice', description: 'Practice large-scale system design', category: 'study', estimatedHours: 30, order: 2 },
        { id: '3', title: 'Algorithm Problem Solving', description: '200 problems on Baekjoon', category: 'study', estimatedHours: 60, order: 3 },
      ],
      copiedCount: 128,
      createdAt: '2026-01-15',
    },
  ]
}

export function useBundles() {
  return useQuery({
    queryKey: ['bundles'],
    queryFn: fetchBundles,
  })
}
