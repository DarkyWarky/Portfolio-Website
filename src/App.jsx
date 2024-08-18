import { useState } from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'

function App() {

  return (
    <div className="bg-gray-900 min-h-screen pt-16 font-roboto">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}

export default App
