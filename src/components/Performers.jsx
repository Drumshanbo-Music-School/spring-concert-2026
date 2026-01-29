import React from 'react'
import './Performers.css'

const performers = [
  { name: "Aoife O'Sullivan", instrument: 'Fiddle', icon: '🎻' },
  { name: 'Seán Murphy', instrument: 'Uilleann Pipes', icon: '🎵' },
  { name: 'Niamh Kelly', instrument: 'Irish Harp', icon: '🎼' },
  { name: 'Ciarán Brennan', instrument: 'Bodhrán', icon: '🥁' },
  { name: 'Mairéad Byrne', instrument: 'Tin Whistle', icon: '🎶' },
  { name: 'Pádraig Walsh', instrument: 'Accordion', icon: '🪗' },
  { name: 'Siobhán Doyle', instrument: 'Vocals', icon: '🎤' },
  { name: "Liam O'Connor", instrument: 'Guitar', icon: '🎸' }
]

const Performers = () => {
  return (
    <section id="performers">
      <div className="performers-container">
        <div className="performers-grid">
          {performers.map((performer, index) => (
            <div key={index} className="performer-card">
              <div className="performer-icon">{performer.icon}</div>
              <div className="performer-name">{performer.name}</div>
              <div className="performer-instrument">{performer.instrument}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Performers
