import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className='bg-black'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
