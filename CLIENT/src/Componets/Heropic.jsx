import React, { useState } from 'react'
import './Heropic.css'
import { Heropictest } from './Heropictest'
import {db} from '../config/firebase'
import { getDocs, collection, addDoc} from 'firebase/firestore';

import { FaArrowRight, FaBell, FaBus, FaClock, FaDirections, FaLocationArrow } from 'react-icons/fa'

import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar';



export const Heropic = () => {
  const navigate = useNavigate()
  event.preventDefault();
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone,setPhone]=useState("")
  const [text, setText]=useState("");
  const [title, setTitle]= useState("");



  const textCollectioneRef =collection(db, "notificatio-form");

  const submitHandler=async ()=>{
    event.preventDefault();
    try{
    await addDoc( textCollectioneRef,
      {
        Name:name,
        Email:email,
        Select:phone,
        Text:text,
        title:title
      }
      );
    }catch(err){
      console.error(err);
    }
  }  
 
  return (
    <>
    <Navbar />
   <div className='flex justify-start h-[100vh] bg-pink-200 pt-[5%]'>
    <div className='h-[90%] basis-[100%]'>
      <img src='assests/home pic.png' className='h-[80vh]'/>
    </div>
    <div className='basis-[100%] pt-[15%]'>
      <h1 className='text-5xl font-bold'>The Quintessential<br/> School Bus Application</h1>
      <p className='text-xl'>A powerful tool to make school commuting easier and safer</p>
      {/* <img src='assests/ic6.svg' className='animate-spin ml-[20%]'/> */}
      <button className='bg-pink-900 px-6  text-white py-2 mt-10 tect-xl font-bold hover:bg-pink-800 rounded-full
      ' onClick={()=>navigate('/registration')}>Get Started</button>
    </div>
   </div>
   <div className='bg-white h-fit p-11 border-r-2 '>
    <h1 className='ml-[40%] text-pink-900 font-bold'>What makes us the best?</h1>
    <h1 className='ml-[40%] font-bold text-xl'>Key features of our system</h1>
    <div className='flex justify-normal pl-[10%]'>
      <div className='shadow-md w-[200px] p-2 m-5'>
        <img src='assests/route management.png' className='w-[40%] pl-[10%]'/>
        <h1 className='text-pink-900 font-bold'>Route management</h1>
        <p>School can eaily manage drop up and pick up routes for the bus</p>
      </div>
      <div className='shadow-md w-[200px] p-2 m-5'>
        <img src='assests/vehicle tracking.png' className='w-[40%] pl-[10%]'/>
        <h1 className='text-pink-900 font-bold'>Bus Tracking</h1>
        <p>School bus can be precisely tracked and monitored in real time</p>
      </div>
      <div className='shadow-md w-[200px] p-2 m-5'>
        <img src='assests/notification icon.png' className='w-[40%] pl-[10%]'/>
        <h1 className='text-pink-900 font-bold'>Notification</h1>
        <p>Instant sms is sent to parents whwnever the child is dropped or picked up.</p>
      </div>
      <div className='shadow-md w-[200px] p-2 m-5'>
        <img src='assests/route management.png' className='w-[40%] pl-[10%]'/>
        <h1 className='text-pink-900 font-bold'>Route management</h1>
        <p>School can eaily m,anage drop up and pick up routes for the bus</p>
      </div>
    </div>
   </div>
   <div className='w-full h-fit bg-white '>
   <div className='bg-pink-900 w-[700px] h-[200px]  ml-[20%] mb-10 flex justify-start'>
    <div className='text-white basis-[100%] p-10'>
      <h1 className='text-2xl font-bold'>Guaranteed client satsifaction</h1>
      <p>Our experts have used their expertise to build this powerful tool that has made many in our globe happy</p>
    </div>
    <div className='basis-[100%]'>
      <div className='flex justify-start p-8 text-white'>
      <section>
      <h1 className='font-bold text-2xl'>20+</h1>
      <p>schools happy</p>
      </section>
      <section>
      <h1 className='font-bold text-2xl'>10+</h1>
      <p>Counties </p>
      </section>
      </div>
      <div className='flex justify-start  text-white'>
      <section>
      <h1 className='font-bold text-2xl'>2000+</h1>
      <p>Parents Happy</p>
      </section>
      <section>
      <h1 className='font-bold text-2xl'>20+</h1>
      <p>Drivers happy</p>
      </section>
      </div>
     
    </div>
   </div>
   </div>
   <div className='flex justify-start h-[100vh] mt-[100px]'>
    <div className='basis-[50%] pl-[10%]'>
      <img src='assests/parent image.png' className='h-[70vh] object-cover'/>
    </div>
    <div className=''>
      <h1 className='text-pink-900 font-bold'>What parents will get</h1>
      <p>We took into considerations the needs of the parents</p>
      <div className='flex justify-start bg-pink-100 mb-[50px] w-[70%]'>
        <img src='assests/ic1.svg' />
        <section className=''>
          <h1 className='text-pink-900'>Live Tracking of school Bus</h1>
          <p>School bus tracking in real time provided and user friendly in a very effective manner.</p>
        </section>
      </div>
      <div className='flex justify-start bg-pink-100 mb-[50px] ml-20 w-[70%]'>
        <img src='assests/ic2.svg' />
        <section className=''>
          <h1 className='text-pink-900'>Live Tracking of school Bus</h1>
          <p>Instant notifications are sent to parents as sms when students are picked up and dropped off.</p>
        </section>
      </div>
      <div className='flex justify-start bg-pink-100 mb-[50px] w-[70%]'>
        <img src='assests/ic3.svg' />
        <section className='w-[60%]'>
          <h1 className='text-pink-900'>In-Chatroom communication</h1>
          <p>Parents and teachers are able to communicate and chat easily and fast.</p>
        </section>
      </div>
    </div>
   </div>
   {/* ///////////////////////// what the school will get*/}
   <div className='flex justify-start h-[90vh]'>
    <div className='pl-[5%] basis-[100%]'>
    <h1 className='text-pink-900 font-bold ml-[7%]'>What school will get</h1>
      <p className='w-[70%] ml-[7%]'>School will track the bus real time and also other benefits like in-system Chatroom, and notification center.</p>
      <div className=''>
      <div className='flex justify-start bg-pink-100 mb-[50px] ml-20 w-[70%] p-3'>
      <img src='assests/ic4.svg' />
        <section className=''>
          <h1 className='text-pink-900'>View trips details</h1>
          <p>Live tracking of the school bus,ridership data in routes takrn by the bus etc.</p>
        </section>
      </div>
      <div className='flex justify-start bg-pink-100 mb-[50px]  w-[70%] p-3 data-te-animation-on-scroll="repeat"' >
      <img src='assests/ic5.svg' />
        <section className=''>
          <h1 className='text-pink-900'>View trips details</h1>
          <p>Live tracking of the school bus,ridership data in routes takrn by the bus etc.</p>
        </section>
      </div>
      <div className='flex justify-start bg-pink-100 mb-[50px] ml-20 w-[70%] p-3 mr-10  '>
      <img src='assests/ic6.svg' />
        <section className=''>
          <h1 className='text-pink-900'>View trips details</h1>
          <p>Live tracking of the school bus,ridership data in routes takrn by the bus etc.</p>
        </section>
      </div>
      </div>
    </div>
    <div className='basis-[100%]'>
      <img src='assests/school image.png' className='h-[70vh] mt-20 object-cover'/>
    </div>
   </div>
   {/* testimonials what people say about us*/}
   <div className='bg-pink-200 h-[60vh] pl-[5%]'>
    <h1 className='text-pink-900'>Testimonials</h1>
    <p className='text-3xl font-bold '>We are happy to share our<br/> clients' stories</p>
    <div className='flex justify-start '>
       <div className='bg-pink-100 h-fit w-[300px] p-5 m-10 hover:scale-125 duration-300'>
        <p>"I really appreciiate what this system have helped us as parents solve the problems we used to face before. I'd really advice any school to adopt this system."</p>
        <h2 className='font-bold'>Cory</h2>
        <p>Parents association(Makini school)</p>
       </div>
       <div className='bg-pink-100 h-fit w-[300px] p-5 m-10 hover:scale-125 duration-300 '>
        <p>"Initially we used to have problems in having to wait for some students or delaying parents during the eveings. That challenge is no more thanks to this system."</p>
        <h1 className='font-bold'>Charo</h1>
        <p>Shool Driver(Makini school)</p>
       </div>
       <div className='bg-pink-100 h-fit w-[300px] p-5 m-10 hover:animate-ping-1 hover:scale-125 duration-300'>
        <p>"Initially we used to have problems in having to wait for some students or delaying parents during the eveings. That challenge is no more thanks to this system."</p>
        <h1 className='font-bold'>Charo</h1>
        <p >Shool Driver(Makini school)</p>
       </div>
    </div>
   </div>
   {/* contact */}
   <div id='contact' className='bg-pink-900 flex justify-start h-[88vh] w-[80%] m-20 p-[5%]'>
    <div className=' h-[70vh] basis-[100%] text-white'>
      <h1 className='text-gray-200'>Get in touch</h1>
      <h1 className='text-3xl font-bold'>Let us make school commuting easier and safer</h1>
      <p className='text-gray-300'>If you have any inquiries about anything about our system, please feel free to contact us.</p>
      <form className='w-full bg-pink-900 mt-10'>
        <div className='flex justify-normal'>
          <input placeholder='name' type='text 'onChange={(e)=>setName(e.target.value)}   className='bg-gray-400 placeholder:text-black outline-none px-2 py-2 m-3'  />
          <input placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)}  className='bg-gray-400  placeholder:text-black outline-none px-2 py-2 m-3' />
        </div>
        <div className='flex justify-normal'>
          <input placeholder='Phone ' type='number' onChange={(e)=>setPhone(e.target.value)}  className='bg-gray-400  placeholder:text-black outline-none px-2 py-2 m-3' />
          <input placeholder='Who am I?' type='text' onChange={(e)=>setTitle(e.target.value)} className='bg-gray-400  placeholder:text-black outline-none px-2 py-2 m-3' />
        </div>
        <div>
          <textarea placeholder='Message' onChange={(e)=>setText(e.target.value)}  className='bg-gray-400  placeholder:text-black outline-none px-2 py-2 m-3 w-[100%]'/>
          <button className='bg-white text-black py-1 px-2 w-30 font-bold rounded-full pointer-cursor' onClick={submitHandler} >Submit</button>
        </div>
      </form>
    </div>
    <div>
    <img src='assests/tracking.png' />
    </div>
   </div>
    </>
  )
}
