import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/curve.png'
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f16f4385-e59a-4da8-993f-8eaee7262eb4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Contact me</h1>
                <img src={theme_pattern} alt="theme patern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let&apos;s talk</h1>
                    <p>Got a project in mind? I&apos;m always open to new opportunities and exciting ideas. Drop me a message below and let&apos;s connect!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <IoMail />
                            <a
                                href="mailto:hanizalain9@gmail.com"
                            >
                                hanizalain9@gmail.com
                            </a></div>
                        <div className="contact-detail">
                            <FaLinkedin />
                            <a
                                href="https://www.linkedin.com/in/hani-zala/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.linkedin.com/in/hani-zala/
                            </a></div>
                        <div className="contact-detail"><FaLocationDot /><p>Gandhinagar, Gujarat, India</p></div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact