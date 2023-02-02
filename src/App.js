import React,{useState} from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';

import Home from './Home';
import TextAnimation from './TextAnimation';
import HelloWorld from './HelloWorld';
import './App.scss';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hello' element={<HelloWorld />} />
        <Route path='/text-animation' element={<TextAnimation />} />
      </Routes>
    </div>
  );
}

export default App;
