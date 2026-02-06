/**
 * Preset hooks for Bundle feature
 * Fetches scenario/roadmap presets from the server
 */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from '../../../shared/api/apiClient'
import type { PresetInfo, Preset, PresetInitializeResult } from '../../../shared/api'

/**
 * Fetch list of available presets
 */
export function usePresetList() {
    return useQuery<PresetInfo[]>({
        queryKey: ['presets'],
        queryFn: async () => {
            const response = await todosApi.listPresetsV1TodosPresetsGet()
            return response.data
        },
    })
}

/**
 * Fetch a single preset by name
 */
export function usePreset(presetName: string | undefined) {
    return useQuery<Preset>({
        queryKey: ['preset', presetName],
        queryFn: async () => {
            if (!presetName) throw new Error('Preset name required')
            const response = await todosApi.getPresetV1TodosPresetsPresetNameGet(presetName)
            return response.data
        },
        enabled: !!presetName,
    })
}

/**
 * Initialize todos from a preset (copy to my plan)
 */
export function useInitializePreset() {
    const queryClient = useQueryClient()

    return useMutation<PresetInitializeResult, Error, string>({
        mutationFn: async (presetName) => {
            const response = await todosApi.initializeFromPresetV1TodosInitializePresetNamePost(presetName)
            return response.data
        },
        onSuccess: () => {
            // Invalidate related queries after copying
            queryClient.invalidateQueries({ queryKey: ['todos'] })
            queryClient.invalidateQueries({ queryKey: ['tagGroups'] })
        },
    })
}
