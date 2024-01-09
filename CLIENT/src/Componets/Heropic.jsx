import React from 'react'
import './Heropic.css'
import { FaArrowRight } from 'react-icons/fa'
import { Heropictest } from './Heropictest'


export const Heropic = () => {
  return (
    <>
    <div className='home-page'>
      <div className='top-bar'>
        <h3>Our Children's Fasety Is Our Priority.😊</h3>
      </div>
      <div className='heropic'>

        <div className='heropic-intro'>
          <h1>Welcome to Makini Notification center</h1>
          <p>Where parents get to know everything they need to knowabout their children</p>
          <p>Contact available teacher for any inquiries about child's welfare,results and any other issue</p>
          <button className='btn-primary'>Get Started</button>
        </div>
        <div className='heropic-image'>
          <img src='assests/live-gps-vehicle-tracking-device-min.png' />
        </div>
      </div>
      <div className='intro'> <h1>Explore the services provided</h1> 
      <div className='underlined'></div></div>
      <div className='heropic-content '>
        <div>
        
        <div className='bus-tracking'>
          <div className='tracking-intro'>
          <img src='assests/schoolbus-tracking-banner.jpg' /> 
          </div>
          <div className='tracking-content'>
          <section>
          <Heropictest  heading='We care about your peace of mind..' text='We give you the power to track the real time location of the bus,and the routes being used for the best experience.
              this helps save parents time in waiting for the bus to arrive and also enables timely preparations. School managements 
              can however ensure route optimization and better maintenance of the bus.
              This plus other fuctionality of this system will help reduce worries and put more focus on more important things. 
              You want to track the bus?' />
            <button className='btn-secondary' ><FaArrowRight /> </button>
          </section>
          </div>
        </div>
       <div className=''>
        
       </div>
        </div>
        <div>
          
        
        <div className='chatroom'>
          <div className='tracking-content'>
          <section>
          <Heropictest heading='Chatroom' text='You have a message to pass accross? No worries...this system enables you to send a text to different persons,
              including teachers, stass and parents too. All you need to do is enter your name and the Room number given for each
              department or person. Room numbers may vary depending on your recipient.
              Want to acces the Notification' />
            <button className='btn-secondary' ><FaArrowRight /> </button>
          </section>
          </div>
          <div className='tracking-intro'>
          <img src='assests/chatroom.avif' />
          </div>
        </div>
    
        </div>
  
         
        <div className='notification'>
          <div className='tracking-intro'>
          <h1>Track Bus</h1>
          <img src='assests/notifications-page.avif' />
          </div>
          <div className='tracking-content'>
          <section>
          <Heropictest heading='Chatroom'  text='You have a message to pass accross? No worries...this system enables you to send a text to different persons,
              including teachers, stass and parents too. All you need to do is enter your name and the Room number given for each
              department or person. Room numbers may vary depending on your recipient.
              Want to acces the Notification' />
            <button className='btn-secondary' ><FaArrowRight /> </button>
          </section>
          </div>
        </div>
        
        <div className='welfare'>
          <div className='tracking-content'>
          <section>
          <Heropictest heading='Welfare ' text='Send your concers direct to us and we will get back to you as
              soon as we can. Visit our chat room to send us the message' />
            <button className='btn-secondary' ><FaArrowRight /> </button>
          </section>
          </div>
          <div className='tracking-intro'>
          <img src='assests/school-bus-monitoring.jpg' />

          </div>
        </div>
      </div>
      </div>
      <div className='why-us'>
         <h1>Why They Choose Us</h1>
         <p>We have a track record in providing user friendly, fast and easy way to communicate, track and keep track of the children's safety.
          Join us and be part of a large community (parents and teachers) that are focusing on more serious worries than the bus location. Contact us for more information.
         </p>
      </div>
    </>
  )
}
