import { useState } from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'

function App() {

  return (
    <div className="bg-gray-900 min-h-screen pt-16">
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App
