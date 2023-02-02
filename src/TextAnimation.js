import {useEffect, useState } from 'react';
import { motion, spring } from 'framer-motion';

import TitleAnime from './components/animations/TitleAnime';
import NameAnime from './components/animations/NameAnime';

import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const TextAnimation = () => {

  return (
    <div className="text-animation-page">
      <h1 className='title'>
        <NameAnime name="Farzaneh Akhoundsadegh"/>
        <br /> <TitleAnime title="Web Developer"/> 
      </h1>
      <div className='social'>
        <motion.div 
          className='linkedin'
          animate={{
            x: 500,
            opacity: 1 ,
            rotate: 360 
          }}
          initial={{
            opacity: 0.1
          }}
          transition={{
            type: "spring",
            // duration: 5
            stiffness: 1,
            damping: 10
          }}
        >
          <Linkedin color="green" size={"3rem"} />
        </motion.div>
      </div>
    </div>
  )
}

export default TextAnimation;