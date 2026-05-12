import { useState } from 'react'
import { fetchRandomVideo } from '../utils/videoApi'

export function useVideoFetch() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const playVideo = async (type, term, length) => {
    setLoading(true)
    setError(null)

    try {
      const videoId = await fetchRandomVideo(type, term, length)
      setUrl(videoId)
    } catch (err) {
      setError(err.message)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return { url, loading, error, playVideo }
}
