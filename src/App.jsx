import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

const App = () => {
  return (
    <div className="page-container">
      {/* <Navbar/> */}
      <Banner/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App