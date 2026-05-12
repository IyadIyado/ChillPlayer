import { useState } from 'react'
import Player from './components/Player'
import Controls from './components/Controls'
import { useVideoFetch } from './hooks/useVideoFetch'

export default function App() {
  const [type, setType] = useState('Drive 4k')
  const [length, setLength] = useState('Long')
  const [term, setTerm] = useState('canada')
  const { url, loading, error, playVideo } = useVideoFetch()

  const handlePlay = async (videoType, videoTerm, videoLength) => {
    await playVideo(videoType, videoTerm, videoLength)
  }

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <Player url={url} />

      {/* Controls overlaid fixed at bottom */}
      <Controls
        type={type}
        setType={setType}
        length={length}
        setLength={setLength}
        term={term}
        setTerm={setTerm}
        onPlay={handlePlay}
        loading={loading}
        error={error}
      />
    </div>
  )
}
