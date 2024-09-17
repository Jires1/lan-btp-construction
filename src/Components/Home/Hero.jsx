import React, { useEffect, useState, useRef } from 'react';
import BackgroungImage from './hero/BackgroungImage';
import { heroData } from '../../Api/hero';
import Label from './hero/Label';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import Tab from './hero/Tab';
import { motion } from 'framer-motion';

const textAppearVariant = {
  initial: {
    x: '-40%',
    scale:0,
    opacity: 0,
  },
  animate: {
    x: 0, 
    scale:1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 45, delay:.5 }, 
  },
};

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0)
  const [image, setImage] = useState(heroData[imgIndex].img)
  const previousIndexRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
    const newIndex = (imgIndex + 1) % heroData.length
    setImgIndex(newIndex)
    
    console.log('changing', imgIndex)

    if (newIndex !== previousIndexRef.current) {
      setImage(heroData[newIndex].img)
      previousIndexRef.current = newIndex
    }
    }, 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [imgIndex])

  // const changeRugric = (newIndex) => {
  //   setImgIndex(newIndex) 
  // }

  return (
    <div className='hero'>

      <div className="hero-container row-column">
        <div className="hero-top row">
          <Label key={imgIndex} textAppear={textAppearVariant} title={heroData[imgIndex].title} />
          <motion.div initial={{x:'50px'}} animate={{x:0}} transition={{type:'spring', stiffness:300, delay:1.2}} className='social row-column'> 
            <motion.a
              transition={{type:'spring', stiffness:300}}
              whileHover={{scale:1.1}}
            className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size="20px"/></motion.a>
            <motion.a
              transition={{type:'spring', stiffness:300}}
              whileHover={{scale:1.1}}
            className='social-link' href="#" target="_blank" rel="noopener noreferrer"><CiLinkedin size="20px"/></motion.a>
            <motion.a
              transition={{type:'spring', stiffness:300}}
              whileHover={{scale:1.1}}
            className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="20px"/></motion.a>
            <motion.a
              transition={{type:'spring', stiffness:300}}
              whileHover={{scale:1.1}}
            className='social-link' href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp size="20px"/></motion.a>
          </motion.div>
        </div>

        <div className="hero-buttom row">
          {
            heroData.map((data, index)=> {
              if (index===imgIndex ){
                return(
                  <Tab 
                  tab={data.tab} 
                  key={index} 
                  index={index} 
                  isActive={imgIndex === index}
                  // changeRugric={changeRugric}
                  className='tab active'
                />)

              } else {
                return(
                  <Tab 
                  tab={data.tab} 
                  key={index} 
                  index={index} 
                  isActive={imgIndex === index}
                  // changeRugric={changeRugric}
                  className='tab inactive'
                />)
              }
              
            })

          }
        </div>

      </div>
        <BackgroungImage index={imgIndex} image={image} />
    </div>
    
  )
}