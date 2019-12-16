const API_KEY = 'YmIWrFS6dSzm1zrWFhwSuIf6mVakhl2S'
const LIMIT = 12

const giphy = async ({ search }) => {
  try {
    const path = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      search
    )}&api_key=${API_KEY}&limit=${LIMIT}`
    const response = await fetch(path, {
      method: 'GET',
    })

    if (response.ok) {
      return await response.json()
    }
    console.error('unable to search due to', response)
  } catch (error) {
    console.error('unexpected error occurred while getting data', error.stack)
  }
  return { data: [] }
}

export default giphy
