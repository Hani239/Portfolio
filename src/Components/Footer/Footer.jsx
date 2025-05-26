import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import { FaRegUserCircle } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubscribe = async () => {
        setMessage('');
        setError('');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.status === 201) {
                alert('Subscribed successfully!');
                setMessage('Subscribed successfully!');
                setEmail('');
            } else {
                alert(data.message || 'Something went wrong');
                setError(data.message || 'Something went wrong');
                setEmail('');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Footer Logo" width={72} />
                    <p>I&apos;m a frontend developer with a passion for crafting responsive, high-performance web applications using React, Tailwind CSS, and JavaScript. I focus on clean code, user-friendly design, and modern development practices.</p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubscribe();
                    }}
                    className="footer-top-right"
                >
                    <div className="footer-email-input">
                        <FaRegUserCircle size={22} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button type="submit" className="footer-subscribe">
                        Subscribe
                    </button>
                </form>
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