import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header whileHover={{backgroundImage:'linear-gradient(to bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.4))'}} className="header"> 
      <motion.div 
          initial={{ y: -100 }} // Start off-screen
          animate={{ y: 0, transition: { type: 'spring', stiffness: 55 } }}
          className="header-container row-center">
        <nav>
          <ul className='list row-left'>
            <li><a className='link' href="/">ACCUEIL</a></li>
            <li><a className='link' href="/a-propos">A PROPOS</a></li>
            <li><a className='link' href="/projets">PROJETS</a></li>
          </ul>
        </nav>
        <div className="logo">
          {/* <img src={Logo} alt="Logo LAN Construction" /> */}
          <h1>LAN BTP<br /> CONSTRUCTION</h1>
        </div>
        <nav>
          <ul className='list row-right'>
            <li><a className='link' href="/services">SERVICES</a></li>
            <li><a className='link' href="/devis">DEVIS</a></li>
            <li><a className='link' href="/contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="menu-icon row-menu-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="menu-cross">
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="menu-bars">
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </motion.div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><motion.a 

              href="/">ACCUEIL</motion.a></li>
            <li><motion.a 

              href="/a-propos">A PROPOS</motion.a></li>
            <li><motion.a 

              href="/projets">PROJETS</motion.a></li>
            <li><motion.a 

              href="/services">SERVICES</motion.a></li>
            <li><motion.a 

              href="/devis">DEVIS</motion.a></li>
            <li><motion.a 

              href="/contact">CONTACT</motion.a></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}