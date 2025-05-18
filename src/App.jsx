import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'

const App = () => {
  return (
    <div className="page-container">
      {/* <Navbar/> */}
      <Banner/>
      <About/>
    </div>
  )
}

export default App