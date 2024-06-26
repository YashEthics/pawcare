import Aos from 'aos';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  useEffect(()=>{
    Aos.init();

  },[])
  const navigate=useNavigate();
  const [input,setInput]=useState({
    name:"",
    phone:"",
    email:"",
    password:"",
  });

  const handleSubmit = (e) => {
    navigate("/Signin");
    e.preventDefault();
    localStorage.setItem("user" ,JSON.stringify(input));
    
    
  };
  return (
    <div className='container-fluid  text-center col-lg-12 col-md-12 col-sm-12    signin '>
    <form className='h-50 border row w-50 py-5 px-3 border rounded-5 border-warning con1' onSubmit={handleSubmit} data-aos="zoom-in" data-aos-duration="500">
        <div className='col-lg-12 cl-md-12 col-sm-12 col-xs-12'><h1 className='text-white'>SignUp</h1></div>
 <div className='col-lg-6 col-md-6 col-sm-12'>
 <input type="text" placeholder='username' required  className=' emaili mb-2  w-100 con-inp text-center' name='name' value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
 </div>
 <div className='col-lg-6 col-md-6 col-sm-12'>
 <input type="text" placeholder='mobile no' required maxLength={10} className=' emaili mb-2  w-100 con-inp text-center' name='phone' value={input.phone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
 </div>
 <div className='col-lg-6 col-md-6 col-sm-12 '>
 <input type="email" placeholder='email' required className=' emaili mb-2  w-100 con-inp text-center' name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
 </div>
 <div className='col-lg-6 col-md-6 col-sm-12'>
 <input type="password" placeholder='password' required className=' emaili mb-2 w-100 con-inp text-center' name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
 </div>

  
  <button type='submit' className='btn btn-primary w-25 mx-auto mt-4'>SignUp</button>
 
    </form>
</div>
  )
}
