import React from 'react'
import './Banner.css'
import profile_img from '../../assets/Hani-img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume.pdf'

const Banner = () => {
  return (
    <div id='home' className='banner'>
      <img src={profile_img} alt="Profile Image" />
      <h1><span>I'm Hani Zala,</span> Frontend Developer Specializing in Modern Web Interfaces.</h1>
      <p>I'm a frontend developer with a passion for crafting responsive, high-performance web applications using React, Tailwind CSS, and JavaScript. I focus on clean code, user-friendly design, and modern development practices.</p>
      <div className="banner-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="banner-connect">Connect with Me</div></AnchorLink>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="banner-resume">
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Banner