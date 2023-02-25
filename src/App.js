import React,{useState} from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';

import Home from './Home';
import TextAnimation from './TextAnimation';
import LineAnimation from './LineAnimation';
import HelloWorld from './HelloWorld';
import Cube from './Cube';
import City from './City';
import './App.scss';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hello' element={<HelloWorld />} />
        <Route path='/text-animation' element={<TextAnimation />} />
        <Route path='/line-animation' element={<LineAnimation />} />
        <Route path='/cube' element={<Cube />} />
        <Route path='/search-list' element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
