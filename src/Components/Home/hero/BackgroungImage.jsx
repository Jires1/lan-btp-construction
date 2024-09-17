import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function BackgroungImage({image, index}) {
    const [flash, setFlash] = useState(false)
    const controls = useAnimation();

    const handleFlash = () => {
        setFlash(true)
        setTimeout(() => {
            setFlash(false)
        }, 3000);
    }

    useEffect(()=> {
        const intervaId = setTimeout(() => {
            handleFlash()
        }, 10000);

        controls.start({
            scale: 1.35,
            transition: { duration: 8 },
        });
    
        setTimeout(() => {
            controls.start({
            scale: 1,
            transition: { duration: 4 },
            });
        }, 9000);

        return ()=> {
            clearInterval(intervaId) 
        }
    }, [image]);

  return (
    <>
        <motion.div
        key={index}
        animate={controls}
        initial={{ scale: 1, backgroundColor: 'black' }}
        className="backgorund-image absolute"
        >
            <img src={require(`../../../Assets/Images/${image}`)} alt="" />   
            {flash && (<motion.div
                style={{
                    position:'absolute',
                    top:'0', left:'0',
                    width:'100%', height:'100%',
                    background:'#72a9cf',
                    zIndex:'2',
                    opacity:'0.8'
                }}

                initial={{opacity:.9}}
                animate={{opacity:0}}
                transition={{duration:3}}

            ></motion.div>)}

            <div className="overlay absolute"></div>
        </motion.div>
    </>
  )
}
