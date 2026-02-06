/**
 * API Client - Configured API instances
 * All API calls should use these pre-configured instances
 */
import { Configuration, TodosApi, TagsApi } from './index'

const config = new Configuration({
    basePath: import.meta.env.VITE_API_URL || '',
    accessToken: async () => {
        // TODO: Replace with actual auth token retrieval
        return localStorage.getItem('access_token') || ''
    },
})

// API Instances
export const todosApi = new TodosApi(config)
export const tagsApi = new TagsApi(config)

// Re-export config for custom usage
export { config }
