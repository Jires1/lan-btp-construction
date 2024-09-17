import React from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Project from '../Components/Home/Project'
import Service from '../Components/Home/Service'
import HighLights from '../Components/Home/HighLights'
import Devis from '../Components/Home/Devis'

export default function Home() {
  return (
    <div className='home'>
        <Hero/> 
        <About/>
        <Project/>
        <Service/>
        <HighLights/>
        <Devis/>
    </div>
  )
}
 