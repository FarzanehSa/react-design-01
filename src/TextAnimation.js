import {useEffect, useState } from 'react';

import TitleAnime from './components/animations/TitleAnime';
import NameAnime from './components/animations/NameAnime';

const TextAnimation = () => {

  return (
    <div className="text-animation-page">
      <h1 className='title'>
        <NameAnime name="Farzaneh Akhoundsadegh"/>
        <br /> <TitleAnime title="Web Developer"/> 
      </h1>
    </div>
  )
}

export default TextAnimation;