import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/curve.png'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" width={72} />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <div className="nav-item">
            <p>Home</p>
            {menu === "home" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li onClick={() => setMenu("about")}>
          <div className="nav-item">
            <p>About Me</p>
            {menu === "about" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li onClick={() => setMenu("services")}>
          <div className="nav-item">
            <p>Services</p>
            {menu === "services" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li onClick={() => setMenu("work")}>
          <div className="nav-item">
            <p>Portfolio</p>
            {menu === "work" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li onClick={() => setMenu("contact")}>
          <div className="nav-item">
            <p>Contact</p>
            {menu === "contact" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
      </ul>

      <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar