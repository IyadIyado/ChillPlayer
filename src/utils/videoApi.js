const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

function getApiTerm(term) {
  if (term === 'Oldies Music') return 'Oldies Music playing in another room'
  if (term === 'Video Games') return 'Video Games and Chill'
  return term
}

export async function fetchRandomVideo(type, term, length) {
  if (!API_KEY) {
    throw new Error('YouTube API key not configured. Please set VITE_YOUTUBE_API_KEY in .env')
  }

  const query = `${type} ${getApiTerm(term)}`
  const durationFilter = length !== 'any' ? `&videoDuration=${length.toLowerCase()}` : ''

  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query)}&key=${API_KEY}&type=video${durationFilter}`
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      throw new Error('No videos found for your search')
    }

    const randomIndex = Math.floor(Math.random() * data.items.length)
    return data.items[randomIndex].id.videoId
  } catch (error) {
    console.error('Error fetching video:', error)
    throw error
  }
}
