import './signin.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const navigate =useNavigate();
  const [input,setInput]=useState({
    email:"",
    password:"",
  });

  const handleLogin = (e) => {
    
    e.preventDefault();
    const loggeduser =JSON.parse(localStorage.getItem("user"));
    if((loggeduser.email == null && loggeduser.password == null) ){
      alert("Create an account")
    }
    else if(input.email == loggeduser.email && input.password == loggeduser.password){
      localStorage.setItem("loggedin",true);
      navigate("/Logged")
    }
    else{
      alert("email or password not matches dont have account? signUP");
    }
  
  };
  return (
    <div className='container-fluid  text-center col-lg-12 col-md-12 col-sm-12   signin ' >
    <form className='h-50 border row w-auto py-5 border rounded-5 border-success con1 ' onSubmit={handleLogin}  data-aos="zoom-in" data-aos-duration="500">
      <h1 className='text-white mb-4'>SignIn</h1>
  <input type="email" placeholder='Enter email' required className=' emaili mb-5  w-75 mx-auto con-inp text-center' name='email'
   value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
  <input type="password" placeholder='Enter password' required className='  emaili mb-5 mx-auto  w-75 con-inp text-center' 
  name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
  
  <button className='btn btn-primary w-50 mx-auto ' type='submit'>SignIn</button>
    </form>
</div>
  )
}
