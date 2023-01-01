import {useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TitleAnime = ({title}) => {

  const titleArr = title.split("").map((char, index) => {
    const myChar = char === " " ? 
      <span key={index} className='span'>&nbsp;</span> 
      : 
      <span key={index} className='span'>{char}</span>
    ;
    return (myChar)
  })

  return (
    <div className='tAnime'>
      {titleArr}
    </div>
  )
}

export default TitleAnime;