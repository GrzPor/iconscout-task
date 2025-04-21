import { ref } from 'vue'

export interface IconData {
  id: string
  name: string
  tags?: string[]
  urls?: {
    png_128?: string
    [key: string]: string | undefined
  }
}

export interface IconscoutApiResponse {
  data?: IconData[]
  meta?: any
  success?: boolean
  error?: string
  status?: number
  [key: string]: any
}

export interface IconscoutParams {
  asset?: string
  page?: number
  perPage?: number
  searchTerm?: string
}

export default function useIconscoutApi() {
  const data = ref<IconscoutApiResponse | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  /**
   * Fetch data from Iconscout API
   */
  const fetchData = async (params: IconscoutParams = {}) => {
    loading.value = true
    error.value = null

    try {
      // Building query string from parameters
      const queryParams = new URLSearchParams()
      if (params.asset) queryParams.append('asset', params.asset)
      if (params.page) queryParams.append('page', params.page.toString())
      if (params.perPage) queryParams.append('perPage', params.perPage.toString())
      if (params.searchTerm) queryParams.append('searchTerm', params.searchTerm)

      // Using Nuxt API for server routes
      const response = await $fetch<IconscoutApiResponse>(
        `/api/iconscout?${queryParams.toString()}`
      )
      data.value = response
    } catch (err) {
      console.error('Error fetching Iconscout data:', err)
      error.value = err instanceof Error ? err : new Error(String(err))
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  }
}
