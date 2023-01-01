import {useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NameAnime = ({name}) => {

  return (
    <span className='name-span'>{name}</span>
  )
}

export default NameAnime;