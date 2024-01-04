import React from 'react'
import './Sidebar.css'
import { FaBaby, FaBell, FaHome, FaLocationArrow, FaSnapchat } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <h1>  Makini school</h1>
      <div className='routes-pages'>
        <div className='links'>
          <FaHome/>
            <a href='/home'>Home</a>
        </div>
        <div className='links'>
          <FaBell/>
            <a href='/notification'>Notification</a>
        </div>
        <div className='links'>
          <FaSnapchat/>
            <a href='/chatroom'>Chat Room</a>
        </div>
        <div className='links'>
          <FaLocationArrow/>
            <a href='/location'>Track Bus</a>
        </div>
        <div className='links'>
          <FaBaby/>
            <a href='/contact'>Contact</a>
        </div>
        
      </div>
      <div>
        
      </div>
    
    </div>
  )
}

