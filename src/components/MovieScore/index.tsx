import { MoviesStarts } from '../MoviesStarts'
import './style.css'
export function MovieScore() {
  const score = 3.5
  const count = 13
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MoviesStarts />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  )
}