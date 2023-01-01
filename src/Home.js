import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => {navigate('/hello')}}>Hello</button>
      <button onClick={() => {navigate('/text-animation')}}>Text Animation</button>
    </div>
  )
}

export default Home;