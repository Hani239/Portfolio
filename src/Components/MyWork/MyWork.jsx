import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/curve.png'
import mywork_data from '../../assets/mywork_data'
import { HiArrowNarrowRight } from "react-icons/hi";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme patern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="work-item" key={index} onClick={() => window.open(work.w_link, "_blank")}>
            <img src={work.w_img} alt={work.w_name} />
            <div className="work-overlay">Click to view</div>
          </div>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show more</p>
        <HiArrowNarrowRight className='font' />
      </div> */}
    </div>
  )
}

export default MyWork