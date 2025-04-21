import { defineEventHandler, getQuery } from 'h3'

const CLIENT_ID = process.env.ICONSCOUT_CLIENT_ID

export default defineEventHandler(async (event) => {
  // Getting request params
  const query = getQuery(event)
  const asset = query.asset || 'icon'
  const page = query.page || 1
  const perPage = query.perPage || 20
  const searchTerm = query.searchTerm || ''

  // Building request URL
  let url = `https://api.iconscout.com/v3/search?asset=${asset}&page=${page}&per_page=${perPage}`

  // Adding query params if exists
  if (searchTerm) {
    url += `&search=${encodeURIComponent(searchTerm)}`
  }

  try {
    // Executing request to API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Client-ID': CLIENT_ID,
        Accept: 'application/json'
      }
    })

    // Checking if response is valid
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`API error: ${response.status} ${JSON.stringify(errorData)}`)
    }

    // Returning data
    return await response.json()
  } catch (error) {
    console.error('Error fetching data from Iconscout API:', error)
    return {
      success: false,
      error: error.message || 'Unknown error occurred',
      status: 500
    }
  }
})
