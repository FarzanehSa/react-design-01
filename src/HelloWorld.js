import {useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HellowWorld = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState ("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 150,
      width: 150,
      backgroundColor: "seagreen",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => {
    setCursorVariant("text")
  };

  const textLeave = () => {
    setCursorVariant("default")
  };
  useEffect (() => {
    onmousemove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
  }, []);

  return (
    <div className="hello-world-page">
      <h1 className='title' onMouseEnter={textEnter} onMouseLeave={textLeave}>Farzaneh</h1>
      <motion.div 
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}

export default HellowWorld;