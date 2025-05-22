import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-container">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <MyWork />
      <Contact />

      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      <Footer />
    </div>
  )
}

export default App