import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" width={72} />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            {/* <li>Services</li> */}
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar