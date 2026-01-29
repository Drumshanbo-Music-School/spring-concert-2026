import React from 'react'
import './Photos.css'

const photoPlaceholders = [
  { icon: '🌸', label: 'Spring Blossoms' },
  { icon: '🎻', label: 'Irish Fiddle' },
  { icon: '🎵', label: 'Musical Notes' },
  { icon: '🌺', label: 'Flowers' },
  { icon: '🪕', label: 'Traditional Instruments' },
  { icon: '🌿', label: 'Nature' }
]

const Photos = () => {
  return (
    <section id="photos">
      <div className="photos-container">
        <div className="photos-grid">
          {photoPlaceholders.map((photo, index) => (
            <div key={index} className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-icon">{photo.icon}</span>
                <span className="photo-label">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Photos
