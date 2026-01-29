import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navigation ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-container">
        <button onClick={() => scrollToSection('poster')} className="nav-link">
          Poster
        </button>
        <button onClick={() => scrollToSection('setlist')} className="nav-link">
          Setlist
        </button>
        <button onClick={() => scrollToSection('photos')} className="nav-link">
          Photos
        </button>
        <button onClick={() => scrollToSection('performers')} className="nav-link">
          Performers
        </button>
        <button onClick={() => scrollToSection('charity')} className="nav-link">
          Charity
        </button>
      </div>
    </nav>
  )
}

export default Navigation
