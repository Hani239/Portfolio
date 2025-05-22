import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/curve.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" width={72} />
      <ul className="nav-menu">
        <li>
          <div className="nav-item" onClick={() => setMenu("home")}>
            <AnchorLink className='anchor-link' href='#home'>
              <p>Home</p>
            </AnchorLink>
            {menu === "home" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li>
          <div className="nav-item" onClick={() => setMenu("about")}>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p>About Me</p>
            </AnchorLink>
            {menu === "about" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li>
          <div className="nav-item" onClick={() => setMenu("services")}>
            <AnchorLink className='anchor-link' offset={50} href='#services'>
              <p>Services</p>
            </AnchorLink>
            {menu === "services" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li>
          <div className="nav-item" onClick={() => setMenu("work")}>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
              <p>Portfolio</p>
            </AnchorLink>
            {menu === "work" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
        <li>
          <div className="nav-item" onClick={() => setMenu("contact")}>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <p>Contact</p>
            </AnchorLink>
            {menu === "contact" && <img className="underline" src={underline} alt="underline" />}
          </div>
        </li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="nav-connect">Connect with Me</div></AnchorLink>
    </div>
  )
}

export default Navbar