import React, { useState } from 'react'
import Button from './bUTTON.JSX'
// import {Menu} from 'react-icons/fa'




const Navbar = () => {
    let Links =[
        {name:"Home",link:'/home'},
        {name:"Notification",link:'/notification'},
        {name:"Location",link:'/location'},
        {name:"Wellfare",link:'/welfare'},
        {name:"Contacts",link:'/contacts'},
        {name:"Chatroom",link:'/chatroom'},
];

let [open, setOpen]=useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
    <div  className='md:flex bg-white py-4'>
    <div className='font-bold flex justify-between text-3xl cursor-pointer flex items-center text-greey-800'>
    <span>
    <h1>Makini Bus Hub</h1>
    </span>
    </div>
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {/* <Menu name={open? 'close':'menu'}></Menu>
      <Close/> */}
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] '} md:opacity-100`}>
     {
        Links.map((link)=>(
            <li key={Links.name} className='md:ml-8 text-xl md:my-o my-7 flex'>
            <a href={link.link} className=' hover:text-gray-400 duration-400'>{link.name}</a>
            </li>
        ))
     }
     <Button>Get Started</Button>
      
    </ul>
    </div> 
      
    </div>
  )
}

export default Navbar
