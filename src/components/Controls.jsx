import { useState } from 'react'
import KeyTerm from './KeyTerm'
import VideoPicker from './VideoPicker'

const TYPES = ['Drive 4k', 'Music', 'Visual Loops 4k']
const LENGTHS = ['any', 'Long', 'Medium', 'Short']

export default function Controls({
  type,
  setType,
  length,
  setLength,
  term,
  setTerm,
  onPlay,
  loading,
  error
}) {
  const [minimized, setMinimized] = useState(false)

  const handleTypeChange = (newType) => {
    setType(newType)
    if (newType === 'Visual Loops 4k') setTerm('')
    else if (newType === 'Drive 4k') setTerm('canada')
    else if (newType === 'Music') setTerm('Lo-Fi')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 shadow-xl">
      {/* Toggle button sits above the panel */}
      <div className="flex justify-center">
        <button
          onClick={() => setMinimized((m) => !m)}
          className="btn btn-sm rounded-b-none rounded-t-xl border-0 bg-gradient-to-b from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 px-6"
          aria-label={minimized ? 'Expand controls' : 'Minimize controls'}
        >
          {minimized ? '▲ Controls' : '▼'}
        </button>
      </div>

      {/* Collapsible panel */}
      <div
        className={`bg-gradient-to-b from-orange-500 to-pink-500 overflow-hidden transition-all duration-300 ease-in-out ${
          minimized ? 'max-h-0 py-0' : 'max-h-96 p-4 md:p-6'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Type and Length selectors - responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            <div className="md:col-span-1">
              <label className="block text-xs text-white font-semibold mb-1">Type</label>
              <select
                value={type}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="select select-bordered w-full text-sm"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t.replace(' 4k', '')}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs text-white font-semibold mb-1">Length</label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="select select-bordered w-full text-sm"
              >
                {LENGTHS.map((l) => (
                  <option key={l} value={l}>
                    {l.charAt(0).toUpperCase() + l.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs text-white font-semibold mb-1">
                {type === 'Drive 4k' ? 'Country' : type === 'Music' ? 'Genre' : 'N/A'}
              </label>
              {type !== 'Visual Loops 4k' && (
                <KeyTerm type={type} value={term} onChange={setTerm} />
              )}
              {type === 'Visual Loops 4k' && (
                <div className="select select-bordered w-full text-sm opacity-50 cursor-not-allowed">
                  N/A
                </div>
              )}
            </div>
          </div>

          {/* Play button and error message */}
          <div className="space-y-2">
            <VideoPicker
              type={type}
              length={length}
              term={term}
              onPlay={onPlay}
              loading={loading}
            />
            {error && (
              <div className="alert alert-error text-sm py-2">
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
