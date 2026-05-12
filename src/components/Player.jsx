import ReactPlayer from 'react-player/youtube'

export default function Player({ url }) {
  if (!url) {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">ChillPlayer</h2>
          <p className="text-gray-400">Select video options and click Play to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-black">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${url}`}
        playing
        loop
        controls
        width="100%"
        height="100%"
      />
    </div>
  )
}
