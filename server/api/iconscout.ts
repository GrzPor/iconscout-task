import { defineEventHandler, getQuery } from 'h3'

const CLIENT_ID = process.env.ICONSCOUT_CLIENT_ID

export default defineEventHandler(async (event) => {
  // Getting request params
  const query = getQuery(event)
  const asset = query.asset || 'icon'
  const page = query.page || 1
  const perPage = query.perPage || 20
  const searchTerm = query.query || ''
  const price = query.price || ''

  // Building request URL with all params at once for better readability
  const params = new URLSearchParams()
  params.append('asset', String(asset))
  params.append('page', String(page))
  params.append('per_page', String(perPage))

  // Add search term if provided
  if (searchTerm) {
    params.append('query', String(searchTerm))
  }

  // Add price filter if specified
  if (price === 'free') {
    params.append('price', 'free')
  } else if (price === 'premium') {
    params.append('price', 'premium')
  }

  const url = `https://api.iconscout.com/v2/search?${params.toString()}`

  try {
    // Executing request to API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Client-ID': CLIENT_ID || '',
        Accept: 'application/json'
      }
    })

    // Checking if response is valid
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Error response:', errorData)
      throw new Error(`error: ${response.status} ${JSON.stringify(errorData)}`)
    }

    // Getting the response
    const jsonData = await response.json()

    // Return the data
    return jsonData
  } catch (error: any) {
    console.error('Error fetching data from Iconscout API:', error)
    return {
      success: false,
      error: error.message || 'Unknown error occurred',
      status: 500
    }
  }
})
