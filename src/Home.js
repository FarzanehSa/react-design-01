import React,{useState} from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';


import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import '../node_modules/react-modal-video/scss/modal-video.scss'

const Home = () => {

  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div>
      <ModalVideo 
        channel='custom' 
        autoplay 
        isOpen={isOpen} 
        url="./vi1.mp4"
        // videoId="L61p2uyiMSo" 
        onClose={() => setOpen(false)} 
      />
      <button onClick={() => {navigate('/hello')}}>Hello</button>
      <button onClick={() => {navigate('/text-animation')}}>Text Animation</button>
      <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
    </div>
  )
}

export default Home;