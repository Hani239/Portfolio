import React from 'react'
import './About.css'
import profile_img from '../../assets/Hani-img.jpeg'
import theme_pattern from '../../assets/curve.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme patern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile Image" width={300} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I enjoy turning complex problems into simple, beautiful, and intuitive designs. Whether it's bringing UI/UX mockups to life or optimizing performance, I'm always eager to learn, experiment, and grow with every project.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "63%" }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Tailwind</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  )
}

export default About