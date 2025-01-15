import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'

const App = () => {
  return (
    <div className='bg-black'>
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default App
