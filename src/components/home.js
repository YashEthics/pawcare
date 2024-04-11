import Home from './src/home.js';
import Aos from 'aos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const direct = () => {
    navigate("/Services");

  };
  return (
    <div className='container-fluid home'>
      <div className="row">
        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 col1' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div className="row">
            <span className='home-p home-head'>Affortable Vet<br className='my-0'></br><span className='text-warning1'>Care</span> In your Pocket</span>
            <p className='fs-4  w-75  h-25 home-p1'>Expert vet advice at your fingertips and medication delivered at your door.</p>
            <button className='btn-primary w-25  btn-p ' onClick={direct}>Get Started</button>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 col2'>
          <img className='dog1 text-center img-reponsive img-fluid' src='./dog1.png' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
        </div>
      </div>
    </div>
  );
};
