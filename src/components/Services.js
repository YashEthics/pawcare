import React from 'react'
import { useNavigate } from 'react-router-dom'

import './services.css'
const userName =JSON.parse(localStorage.getItem("user"));

const Services = () => {


const navigate = useNavigate();

  const next=(e)=>{
    
    e.preventDefault();
    if(userName.name==null){
    navigate('/Signup');
    }
    else{
      navigate('/logged');
    }
    
  }
 
  return (
    <div className='services'>
      <div className='mt-5 py-5 '>
      <h1 className='text-center text-dark mt-5 py-5  home-p text-center mx-auto '>Services</h1>
      </div>
      <div className='row '>
        <div className='col-lg-3 col-md-3 col-sm-12  mx-auto p-3 ser' data-aos="flip-left">
          <img src='./grooming.png' className='ser-img'/><h2>Grooming</h2>
        <p className='my-3'>That feeling of a fresh haircut and manicure. Divine. Isn’t it? Your cats and dogs love it too! PawPurrfect’s versatile range of pet grooming services ensure that your fur baby looks and feels their best, and is groomed to perfection by the professionals. Book a pet grooming session at home in just a few clicks, and enjoy the PawPurrfect experience.</p>
        <button className=' btn btn-ser  my-2'   onClick={next}>Book Now!</button>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12  mx-auto p-3 ser' data-aos="flip-left">
        <img src='./training.png' className='ser-img'/><h2>Training</h2>
        <p className='my-3'>Goodbye distractions and bad behaviour! Help your pets become their best selves with PawPurrfect’s expert pet training services. Our professionals work with dogs of all sizes, ages, and temperaments, and make dog training an enjoyable experience for your little ones. Book a pet training session in just a few clicks and say yes to pawsome times!</p>
        <button className=' btn btn-ser  my-2'  onClick={next}>Book Now!</button>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12  p-3 ser mx-auto' data-aos="flip-left">
        <img src='./boarding.png' className='ser-img'/><h2>Boarding</h2>
        <p className='my-3'>No more cancelled work trips and vacays! With PawPurrfect’s comprehensive pet boarding services we ensure your fur babies have a home away from home every time you’re away. Our expert services ensure your pets are cared for and pampered like they would be at home. Book a fun staycation for your pets in just a few clicks and enjoy a care-free trip.
</p>
        <button className=' btn btn-ser  my-2'  onClick={next}>Book Now!</button>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-lg-3 col-md-3 col-sm-12  mx-auto p-3 ser' data-aos="flip-left">
          <img src='./sitting.png' className='ser-img'/><h2>Sitting</h2>
        <p className='my-3'>A PawPurrfect solution to ensure your pet is never home alone! Whether you’re away at work, on a short trip, or just running a few errands, our professional pet sitting services ensure your fur babies are well cared for while you’re away. Book our pet sitting services in just a few clicks and say goodbye to all those stressful looks at the pet cam.</p>
        <button className=' btn btn-ser  my-2'  onClick={next}>Book Now!</button>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12  mx-auto p-3 ser' data-aos="flip-left">
        <img src='./walking.png' className='ser-img'/><h2>Walking</h2>
        <p className='my-3'>Why make your fur babies wait for their favourite time of the day when you can book PawPurrfect’s professional dog walking services? Our network of expert dog walkers ensure your pets get safe and fun walks through the day while you ace your to-do lists, stress-free! Book our dog walking services in just a few clicks for no more missed walks.</p>
        <button className=' btn btn-ser  my-2'  onClick={next}>Book Now!</button>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12  p-3 ser mx-auto' data-aos="flip-left">
        <img src='./vet.png' className='ser-img'/><h2>Veterinarian</h2>
        <p className='my-3'>Bringing your pets to the vet can be quite a task! But not any more, as we bring quality veterinary care to the comfort of your home. We know your pets are your world and with our expert veterinary services, we ensure they are taken care of at all times. Book expert veterinary services in just a few clicks and say yes to happy and healthy pets.
</p>
        <button className=' btn btn-ser  my-2'  onClick={next}>Book Now!</button>
        </div>
      </div>
      <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-12  p-3 ser mx-auto' data-aos="flip-left">
        <img src='./pet.png' className='ser-img'/><h2>Pet Pathology Tests</h2>
        <p className='my-3'>Keeping your beloved pets in good health is important, and that is why blood tests need to be done from time to time.

</p>
        <button className=' btn btn-ser  my-2' onClick={next}>Book Now!</button>
        </div>
      </div>
    </div>
  )
}
