import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/curve.png'
import Services_Data from '../../assets/services_data'
import { HiArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="theme patern" />
        </div>
        <div className="services-container">
            {Services_Data.map((service, index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <HiArrowNarrowRight className='font'/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services