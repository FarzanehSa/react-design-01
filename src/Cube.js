import React,{useState} from 'react';

const Cube = () => {
  
  return (
    <div className="cube-page">
      <div className="scene">
        <div className="cube">
          <div className="cube-face  cube-face-front">Front</div>
          <div className="cube-face  cube-face-back">Back</div>
          <div className="cube-face  cube-face-left">Left</div>
          <div className="cube-face  cube-face-right">Right</div>
          <div className="cube-face  cube-face-top">Top</div>
          <div className="cube-face  cube-face-bottom">Button</div>
        </div>
      </div>
    </div>
  )
}

export default Cube;