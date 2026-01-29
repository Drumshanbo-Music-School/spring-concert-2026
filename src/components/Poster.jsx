import React from 'react'
import './Poster.css'

const Poster = () => {
  return (
    <section id="poster">
      <div className="poster-container">
        <div className="poster-placeholder">
          <div className="poster-content">
            <div className="poster-icon">🌸</div>
            <h3>Drumshanbo Music School</h3>
            <h2>Spring Charity Concert</h2>
            <div className="poster-divider">🎵</div>
            <p>An Evening of Irish Traditional Music</p>
            <p className="poster-detail">In Aid of Sligo Cancer Care</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Poster
