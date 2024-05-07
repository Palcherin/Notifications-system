import React from 'react'
import './Footer.css'
import { FaBus } from 'react-icons/fa'
export const Footer = () => {
  return (
    <>
    <div className='footer '
      style={{
        background: "linear-gradient(to right, #38a169, #2f855a, #276749, #22543d)"
    }}>
    <div className='col-1'>
      <a href='/'>Home</a><br/>
      <a href='/'>Track Bus</a><br/>
      <a href='/'>Chatroom</a><br/>
      <a href='/'>Notification</a><br/>
      <a href='/'>Wellfare</a>
    </div>
    <div className='col-1'>
      <a href='/'>Home</a><br/>
      <a href='/'>Track Bus</a><br/>
      <a href='/'>Chatroom</a><br/>
      <a href='/'>Notification</a><br/>
      <a href='/'>Wellfare</a>
    </div>
    <div className='col-2'>
      <h1>Subscribe for newslater</h1>
      <input type='email' placeholder='example@gmail.com'  className='footer-input'/><br/>      <button className='bg-sky-400 p-2 w-[50%] rounded'>Submit</button>
    </div>
    <div className='col-3'>
      <h1><FaBus/> </h1>
    </div>
    </div>
    <h5>copyright@2024 | all rights reserved | Makini Bus Hub</h5>
    </>
  )
}

