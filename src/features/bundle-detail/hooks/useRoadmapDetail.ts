/**
 * Hooks for bundle-detail feature
 * Uses preset hooks from bundle feature
 */
import { useNavigate } from 'react-router-dom'
import { usePreset, useInitializePreset } from '../../bundle/hooks/usePresets'
import { useOnboardingStore } from '../../onboarding/stores/onboardingStore'
import type { Preset, PresetTodo } from '../../../shared/api'
import type { RoadmapStep, RoadmapTodo } from '../types'

/**
 * Transform PresetTodo tree to flat RoadmapStep array
 * Top-level todos become steps, their children become todos
 */
function transformPresetToSteps(preset: Preset): RoadmapStep[] {
    const todos = preset.todos || []

    return todos.map((todo, index) => ({
        id: `step-${index + 1}`,
        order: index + 1,
        title: todo.title,
        todos: (todo.children || []).map((child, childIndex) => ({
            id: `todo-${index + 1}-${childIndex + 1}`,
            title: child.title,
            category: mapTagToCategory(child.tag_names || []),
            isCompleted: false, // Presets don't have completion state
        })),
    }))
}

/**
 * Map tag names to category
 */
function mapTagToCategory(tagNames: string[]): RoadmapTodo['category'] {
    const lowerNames = tagNames.map(n => n.toLowerCase())
    if (lowerNames.some(n => n.includes('코테') || n.includes('알고리즘'))) return 'cote'
    if (lowerNames.some(n => n.includes('cs') || n.includes('운영체제') || n.includes('네트워크'))) return 'cs'
    if (lowerNames.some(n => n.includes('프로젝트') || n.includes('포트폴리오'))) return 'project'
    return 'etc'
}

/**
 * Fetch and transform preset data for roadmap detail view
 */
export function useRoadmapDetail(presetName: string | undefined) {
    const { data: preset, isLoading, error } = usePreset(presetName)

    const roadmapData = preset ? {
        name: preset.name,
        description: preset.description || '',
        tagCount: preset.tag_group ? 1 : 0,
        todoCount: countTodos(preset.todos || []),
        steps: transformPresetToSteps(preset),
    } : null

    return { data: roadmapData, isLoading, error }
}

/**
 * Count total todos recursively
 */
function countTodos(todos: PresetTodo[]): number {
    return todos.reduce((sum, todo) => {
        return sum + 1 + countTodos(todo.children || [])
    }, 0)
}

/**
 * Hook for copying roadmap to user's plan
 */
export function useCopyRoadmap() {
    const navigate = useNavigate()
    const { mutate, isPending, error } = useInitializePreset()
    const setActivePresetName = useOnboardingStore((s) => s.setActivePresetName)

    const copyRoadmap = (presetName: string) => {
        mutate(presetName, {
            onSuccess: () => {
                setActivePresetName(presetName)
                navigate('/dashboard')
            },
        })
    }

    return { copyRoadmap, isPending, error }
}
