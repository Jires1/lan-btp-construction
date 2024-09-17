import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Devis() {
  return (
    <div className='devis'>
        <div className="devis-container">
            <h1 className="title-1">Estimez Votre Projet</h1>
            <p>
                Découvrez en quelques clics une estimation personnalisée du coût de votre projet.
                Nos experts vous accompagnent tout au long de votre projet.
            </p>
            <motion.a whileHover={{scale:1.15 }} to="/devis" className="btn">Obtenir un Devis</motion.a>
        </div>
    </div> 
  )
}