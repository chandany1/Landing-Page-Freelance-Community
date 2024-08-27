import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import VideoIntro from './components/VideoIntro'
import Events from './components/Events'

function App() {
 
  return (
    <>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section>
        <VideoIntro/>
      </section>
      <section>
        <Events/>
      </section>
     
    </>
  )
}

export default App
