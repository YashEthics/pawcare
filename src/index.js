// index.js

import Aos from 'aos';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './components/home.js';

const HomeIndex = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const direct = () => {
    navigate("/Services");
  };

  return (
    <Home direct={direct} />
  );
};

export default HomeIndex;
