import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import { FaRegUserCircle } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="Footer Logo" width={72} />
            <p>I&apos;m a frontend developer with a passion for crafting responsive, high-performance web applications using React, Tailwind CSS, and JavaScript. I focus on clean code, user-friendly design, and modern development practices.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <FaRegUserCircle size={22} />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Hani Zala. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
   </div>
  )
}

export default Footer