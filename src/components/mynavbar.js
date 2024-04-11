import React from 'react'
import './mynavbar.css';

import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import Aos from 'aos';
const Mynavbar = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Navbar  expand="lg"  fixed='top' className='navbar my-0 '>
    <Container fluid>
      <Navbar.Brand href="#" className='mt-3'><img src='./logo.png' data-aos="fade-right" data-aos-delay="1000" alt='notfound' className='logo '/><span className='text-white logo-nav  fs-2   ms-5'>P<span className='logo-span '>A</span>W<span className='logo-span'>S</span></span><span className='my-0  logo2-span'>Care.</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="  my-lg-0 mx-auto"
          style={{ maxHeight: '100px' }}
          navbarScroll
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* <Link to='/' className='Link1'>payment</Link> */}
          <Link to='/' className='Link'>HOME</Link>
          <Link to='About' className='Link'>ABOUT</Link>
          <Link to='Services' className='Link'>SERVICES</Link>
          <Link to='Contact' className='Link'>CONTACT</Link>
          <Link to='Contact' className='Link1'>Logged</Link>
         
      
          
        </Nav>
        <Link to="Signin" data-aos="fade-left" data-aos-delay="1000"><button className='btn btn-primary1 bg-dark me-2 my-2 py-2 px-2'>SignIn</button></Link>
      <Link to='Signup' data-aos="fade-left" data-aos-delay="1000"><button className='btn btn-primary  my-2 me-5 py-2 px-2'>SignUp</button></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
