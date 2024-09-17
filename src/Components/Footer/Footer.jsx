import React from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { motion } from 'framer-motion'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import logo from '../../Assets/Images/Logo.jpg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="social-medias row-column">
                <h1 className="title-1">Restez Connectez Avec Nous</h1>
                <motion.div initial={{x:'500px', opacity:0}} animate={{x:0, opacity:1}} transition={{type:'spring', stiffness:300, delay:1.2}} className='social row'> 
                    <motion.a
                    
                    whileHover={{scale:1.1}}
                    className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size="60px"/></motion.a>
                    <motion.a
                    
                    whileHover={{scale:1.1}}
                    className='social-link' href="#" target="_blank" rel="noopener noreferrer"><CiLinkedin size="60px"/></motion.a>
                    <motion.a
                    
                    whileHover={{scale:1.1}}
                    className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="60px"/></motion.a>
                    <motion.a
                    
                    whileHover={{scale:1.1}}
                    className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp size="60px"/></motion.a>
                </motion.div>
            </div>
            
            <div className="footer-links row">
                <div className="left-box row-column">
                    <img src={logo} alt="" />
                    <p>Service de Batiment et genie civil <br /> @Lan BTP Construction 2024<br /> Tout Droit réservé</p>
                </div>
                <div className="right-box row">
                    <ul className="list row-column">
                        <h3>Entreprise</h3>
                        
                        <li><a href="">Accueil</a></li>
                        <li><a href="">A propos</a></li>
                        <li><a href="">Projets</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Devis</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                    <div className='adress row-column'>
                        <ul className="list row-column">
                            <h3>Contact</h3>
                            <li className='row'><><MdLocationOn/></>Biyem-Assi \ Yaoundé, Cameroun. <br /> Face Bicek Bank</li>
                            <li className='row'><><MdEmail/></>lanbtp@construction.com</li>
                        </ul>
                        <motion.a whileHover={{letterSpacing:'3px'}} href="" className="btn">Contactez Nous</motion.a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
