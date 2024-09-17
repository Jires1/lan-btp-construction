import React from 'react'
import logo from '../../Assets/Images/Logo.jpg'

export default function About() {
  return (
    <div className='about'>
        <div className="about-container row-center">
            <div className="row-column left-box">
                <h1 className='title-1'>Qui Sommes Nous ?</h1>
                <p><span>Lan Construction </span>: Votre partenaire de choix pour tous vos projets de construction au Cameroun. Nous offrons une gamme complète de services, allant du génie civil au design intérieur, en passant par les finitions et les études techniques. Notre expertise et notre savoir-faire sont au service de votre projet, du concept à la réalisation.</p>

                {/* <h2 className="title-2">Pourquoi choisir Lan Construction ?</h2>
                <ul>
                    <li><p><span>Expertise locale </span>: Nous maîtrisons les spécificités du marché camerounais et nous adaptons à vos besoins.</p></li>

                    <li><p><span>Qualité </span>: Nous utilisons des matériaux de qualité et nous respectons les normes de construction en vigueur.</p></li>

                    <li><p><span>Respect des délais</span> :  NNous nous engageons à respecter les délais impartis pour la réalisation de vos projets.</p></li>

                </ul> */}

                <a href='#' className='text-link'> en savoir plus sur Nos domainesd'expertise </a>
            </div>
            <div className="right-box">
              <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}
