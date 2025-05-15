import React from 'react'
import './Banner.css'
import profile_img from '../../assets/Hani-img.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={profile_img} alt="Profile Image" />
        <h1><span>I'm Hani Zala,</span> Frontend Developer Specializing in Modern Web Interfaces.</h1>
        <p>I'm a frontend developer with a passion for crafting responsive, high-performance web applications using React, Tailwind CSS, and JavaScript. I focus on clean code, user-friendly design, and modern development practices.</p>
        <div className="banner-action">
            <div className="banner-connect">Connect with Me</div>
            <div className="banner-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Banner