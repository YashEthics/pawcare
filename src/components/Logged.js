import React from 'react'
import { useState } from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import './logged.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const Logged = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const userName =JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();

  const [input,setInput]=useState({
  username:'',
  address:"",
  date:"",
  Choosepet:'',
  Choosebreed:'',
  typeService:'', 
  trainer:'',
  payment:'',


  });
 

  const sendEmail =async(e) => {
    e.preventDefault();


    const{username,address,date,timeslot,Choosepet,Choosebreed,typeService,trainer,payment}=input;
    const res = await fetch("https://pawscare-fdebc-default-rtdb.firebaseio.com//datauser.json",
      {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
            username,
            address,
            date,
            timeslot,
            Choosepet,
            Choosebreed,
            typeService,
            trainer,
            payment,
          })
       })
    localStorage.setItem("user1" ,JSON.stringify(input));
    
    
    
   
   
    if(input.payment === 'paid' && input.email_from === userName.email){
      navigate("/Payment");
      emailjs.sendForm('service_dysvxvn','template_37b8wtl',e.target,'YWeRhMxL82iKuAgEL');
    }
     else if(input.payment === 'Cash on delivery'){
      alert("successfull booked");
      navigate("/thankyou");
      emailjs.sendForm('service_dysvxvn','template_37b8wtl',e.target,'YWeRhMxL82iKuAgEL');
    }
    else{
      alert("enter valid email address");
    }


    if(input.trainer === "anuragughade25@gmail.com"){
      
      emailjs.sendForm("service_dysvxvn","template_m0d3fuh",e.target,'YWeRhMxL82iKuAgEL');
      console.log("truee")
    }
    else if( input.trainer === "tushartiwary0007@gmail.com"){
     
      emailjs.sendForm("service_dysvxvn","template_m0d3fuh",e.target,'YWeRhMxL82iKuAgEL');
      console.log("truee1")
    }
    else if( input.trainer === "siddhesh.kakade@gmail.com"){
      
      emailjs.sendForm("service_dysvxvn","template_m0d3fuh",e.target,'YWeRhMxL82iKuAgEL');
      console.log("truee2")
    }
    
  }
  return (
    <div className='container-fluid logged-c '>
      
      <div className='row '>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  py-1 mb-5 logged-nav'><h1></h1></div>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center h-25 ' data-aos="flip-right" data-aos-duration="1000"><img src='./dog4.png' className='h-100 w-100 mt-5 pt-5 ' alt='not found'/>
        <h1 className=' mt-5 fw-5 fs-1 text-light logo-nav' >Our <span className='text-warning1 text-warning'>Trainers</span></h1>

        <Accordion defaultActiveKey={['2']}  className='mx-auto   my-5'>
      <Accordion.Item eventKey="0" className='con1 w-100 my-3 '>
        <Accordion.Header ><span className='fs-4 my-0 me-1'>Trainer Name:</span><span className='fs-5'> Anurag Ughade, 5+ years of expeirence</span>  <span className='ver ms-5'>Verfied<img src='./verify.png' className='ver-img mx-1 mb-1'/></span></Accordion.Header>
        <Accordion.Body >
          <div className="row">
            <div className="col-lg-6 ">
            <img src='./Anurag.jpeg' className='acc-img  border-0 rounded-2 '/>
            </div>
            <div className="col-lg-6 ">
            <p className='fs-4 my-0 '>Anurag Ughade</p>
            <p className='fs-4 my-0'>Lives at sanpada Navi mumbai,</p>
            <p className='fs-4 my-0'>5+ years of experience,</p>
            <p className='fs-4 my-0'>verified Paws care pet Trainer</p>
            </div>
          </div>
          
          
          
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='con1 w-100 my-3'>
        <Accordion.Header><span className='fs-4 my-0 me-1'>Trainer Name:</span><span className='fs-5 me-3'> Tushar Tiwary,  5+ years of expeirence</span> <span className='ver ms-5'>Verfied<img src='./verify.png' className='ver-img mx-1 mb-1'/></span></Accordion.Header>
        <Accordion.Body>
        <div className="row">
            <div className="col-lg-6 ">
            <img src='./3.jpeg' className='acc-img  border-0 rounded-2 '/>
            </div>
            <div className="col-lg-6 ">
            <p className='fs-4 my-0 '>Tushar Tiwwary</p>
            <p className='fs-4 my-0'>Lives at sanpada Navi mumbai,</p>
            <p className='fs-4 my-0'>5+ years of experience,</p>
            <p className='fs-4 my-0'>verified Paws care pet Trainer</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='con1 w-100 my-3'>
        <Accordion.Header><span className='fs-4 my-0 me-1'>Trainer Name:</span><span className='fs-5 '> Siddesh Kakade, 5+ years of expeirence</span>  <span className='ver ms-5'>Verfied<img src='./verify.png' className='ver-img mx-1 mb-1'/></span></Accordion.Header>
        <Accordion.Body>
        <div className="row">
            <div className="col-lg-6 ">
            <img src='./Siddhesh.jpg' className='acc-img  border-0 rounded-2 '/>
            </div>
            <div className="col-lg-6 ">
            <p className='fs-4 my-0 '>Siddesh Kakade</p>
            <p className='fs-4 my-0'>Lives at sanpada Navi mumbai,</p>
            <p className='fs-4 my-0'>5+ years of experience,</p>
            <p className='fs-4 my-0'>verified Paws care pet Trainer</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 text-center  h-25' data-aos="fade-right" data-aos-delay="1000"><h1 className='text-white mx-auto  my-5'>Welcome - {userName.name} !</h1>
        <form className=' row h-100 pt-5 w-75 mx-auto pb-5 borderr rounded-5 mb-5 con1' onSubmit={sendEmail} >
          <caption className='text-center fs-2 mb-4'>Book your Appointment</caption>
          <input className=' emaili mb-4  w-75  mx-auto con-inp text-center' required placeholder='email' type="email" name='email_from' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
          <input className=' emaili mb-4  w-75  mx-auto con-inp text-center' required placeholder='enter name' type="text" name='username' value={input.username} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        <input className=' emaili mb-4  w-75 address mx-auto con-inp text-center' required placeholder='address' type="text" name='address' value={input.address} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
       
        <select className=' form-select-md w-75 mx-auto emaili mt-2 mb-4 con-inp text-center' required name='Choosepet' value={input.Choosepet}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Choose your pet</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>



        <select className=' form-select-md w-75 mx-auto emaili mt-2 con-inp text-center' required name='Choosebreed' value={input.Choosebreed}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Choose your Breed</option>
        <option value="golden retriever">golden retriever</option>
      <option value="labrador retriever">labrador retriever</option>
      <option value="french bulldog">french bulldog</option>
      <option value="beagle">beagle</option>
      <option value="german shepherd">german shepherd</option>
      <option value="bulldog">bulldog</option>
      <option value="Rottweilers">Rottweilers</option>
      <option value="Pembroke Welsh Corgis">Pembroke Welsh Corgis</option>
      <option value="Boxers">Boxers</option>
      <option value="Persian Cats">Persian Cats</option>
      <option value="British Shorthair">British Shorthair</option>
      <option value="Maine Coon Cats">Maine Coon Cats</option>
      <option value="American Shorthair Cats">American Shorthair Cats</option>
      <option value="Scottish Fold Cats">Scottish Fold Cats</option>
      <option value="Sphynx Cats">Sphynx Cats</option>
      <option value="Abyssinian Cats">Abyssinian Cats</option>
      <option value="Devon Rex Cats">Devon Rex Cats</option>
        </select>



        <caption className='text-center fs-5 text-center'>Date and Time</caption>
        <input type="date" className='emaili w-75 mx-auto con-inp text-center' required name='date' value={input.date} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />

        <select className=' form-select-md w-75 mx-auto emaili mt-4 con-inp text-center' required name='timeslot' value={input.timeslot}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Select time slot</option>
        <option value="10AM-12PM">10AM-12PM</option>
    <option value="2PM-6PM">2PM-6PM</option>
    <option value="7PM-9PM">7PM-9PM</option>
  

    
        </select>

        <select className=' form-select-md w-75 mx-auto emaili mt-4 con-inp text-center' required name='typeService' value={input.typeService}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Type of services</option>
        <option value="Grooming">Grooming</option>
    <option value="Training">Training</option>
    <option value="Boarding">Boarding</option>
    <option value="Sitting">Sitting</option>
    <option value="Walking">Walking</option>
    <option value="Veterinarian">Veterinarian</option>
    <option value="Pet Pathology Tests" >Pet Pathology Tests
</option>
    
        </select>
      <select className='form-select-md w-75 mx-auto emaili mt-4 con-inp text-center' required name='trainer' value={input.trainer} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>Select Trainer</option>
        <option value="anuragughade25@gmail.com">Anurag Ughade</option>
        <option value="tushartiwary0007@gmail.com">Tushar Tiwary</option>
        <option value="siddhesh.kakade@gmail.com">Siddhesh Kakade</option>
        

      </select>
        <select className='form-select-md w-75 mx-auto emaili mt-4 con-inp text-center' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='Cash on delivery'>Cash</option>
        </select>
        
        <div>
        <input type="checkbox" className="my-4" required/><span className='text-dark fw-500 fs-5' > agree the terms & policies</span>
        </div>
        <button className='btn btn-pri  w-50 mx-auto mt-3 text-white fs-6' type='submit'>Done</button>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        </form>
        
        </div>
        
        

      </div>
      
    </div>
  )
}