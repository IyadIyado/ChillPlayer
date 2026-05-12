import { useMemo } from 'react'
import wcc from 'world-countries-capitals'

const genres = [
  'Ambient',
  'Anime and Chill',
  'Classical Music',
  'Jazz',
  'Lo-Fi',
  'Oldies Music',
  'Video Games'
]

export default function KeyTerm({ type, value, onChange }) {
  const countries = useMemo(() => wcc.getAllCountries(), [])

  const options = type === 'Drive 4k' ? countries : genres

  if (type === 'Visual Loops 4k') {
    return null
  }

  const label = type === 'Drive 4k' ? 'Countries' : 'Music Genre'

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="select select-bordered w-full"
    >
      <option disabled value="">
        Select {label}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {typeof option === 'string'
            ? option.charAt(0).toUpperCase() + option.slice(1)
            : option}
        </option>
      ))}
    </select>
  )
}
