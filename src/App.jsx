import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Poster from './components/Poster'
import Setlist from './components/Setlist'
import Photos from './components/Photos'
import Performers from './components/Performers'
import Charity from './components/Charity'
import Footer from './components/Footer'
import BlossomDecoration from './components/BlossomDecoration'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Poster />
        <BlossomDecoration icons="🌸 🎻 🌸 🎻 🌸" />
        <Setlist />
        <BlossomDecoration icons="🌿 🪕 🌿 🪕 🌿" />
        <Photos />
        <BlossomDecoration icons="🌸 🎵 🌸 🎵 🌸" />
        <Performers />
        <BlossomDecoration icons="🎶 🌸 🎶 🌸 🎶" />
        <Charity />
      </main>
      <Footer />
    </>
  )
}

export default App
