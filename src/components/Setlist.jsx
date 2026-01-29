import React from 'react'
import './Setlist.css'

const songs = [
  { title: 'Opening Jig Set', type: 'Traditional Irish Jigs' },
  { title: "The Mason's Apron", type: 'Reel' },
  { title: 'She Moved Through the Fair', type: 'Traditional Air' },
  { title: 'The Butterfly', type: 'Slip Jig' },
  { title: 'The Sally Gardens', type: 'Song' },
  { title: 'The Kesh Jig', type: 'Traditional Jig' },
  { title: 'Sí Bheag, Sí Mhór', type: "O'Carolan Tune" },
  { title: 'Grand Finale - Medley', type: 'Reels & Jigs' }
]

const Setlist = () => {
  return (
    <section id="setlist">
      <div className="setlist-container">
        <ul className="setlist">
          {songs.map((song, index) => (
            <li key={index}>
              <div className="song-title">{song.title}</div>
              <div className="song-type">{song.type}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Setlist
