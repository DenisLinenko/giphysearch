
const giphy = async ({ search }) => {
  try {
		const data = search.trim().replace(/\s/ig, '+')
		const path = `http://api.giphy.com/v1/gifs/search?q=${data}&api_key=YmIWrFS6dSzm1zrWFhwSuIf6mVakhl2S&limit=6`
		
		const response = await fetch(path, {
      method: 'GET',
		})
		if (response.status >= 300) {
				console.error("error in Giphy. status error: ", response.status)
    } else {
      return await response.json()
    }
  } catch (error) {
		console.error("unexpected error occurred while getting data", error.stack)
  }
	return {data: []}
}

export default giphy