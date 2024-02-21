
import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ChatRoom",link:"/chatroom"},
      {name:"NOTIFY",link:"/notification"},
      {name:"ABOUT US",link:"/about"},
      {name:"T",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (

    <div className='shadow-md w-full bg-pink-900 fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-5 px-5'>

      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <strong>BusHub</strong>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button >
          TRACK
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
