export default function VideoPicker({ type, length, term, onPlay, loading }) {
  const handleClick = () => {
    if (term || type === 'Visual Loops 4k') {
      onPlay(type, term, length)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={(!term && type !== 'Visual Loops 4k') || loading}
      className="btn btn-primary w-full"
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Playing...
        </>
      ) : (
        'Play'
      )}
    </button>
  )
}
