import React from 'react'
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Label({title,textAppear}) {
    const sanitizedHtml = DOMPurify.sanitize(title);
    return (
        <div className='row-column'>
            <motion.h1 
                variants={textAppear}
                initial="initial"
                animate="animate"
                layout
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            <motion.a 
                whileHover={{scale:1.1, originX:0}}   
            className="btn">voir projets</motion.a> 
        </div>
    )
} 

