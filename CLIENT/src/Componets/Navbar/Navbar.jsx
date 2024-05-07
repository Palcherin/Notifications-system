
// import React, { useState } from 'react'
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate=useNavigate();

//     let [open,setOpen]=useState(false);
//   return (

//     <div className='shadow-md w-full fixed top-0 left-0'
//     style={{
//       background: "linear-gradient(to right, #38a169, #2f855a, #276749, #22543d)"
//   }}>
//       <div className='md:flex items-center justify-between py-4 md:px-5 px-5'>

//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//       text-white'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//         <ion-icon name="logo-ionic"></ion-icon>
//         </span>
//         <strong>BusHub</strong>
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//           <div className='flex justify-start w-[250px] gap-0'>
//         <button onClick={()=>navigate('/login')} className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
//     duration-500 hover:text-black'>
//           Login
//         </button>
//          <button onClick={()=>navigate('/registration')}  className='font-bold text-white bg-slate-400 font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-slate-200 
//     duration-500 hover:text-black'>
//           Sign-In
//         </button>
//         </div>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate=useNavigate()
  let Links =[
    {name:"Home",link:"/home"},
    {name:"Chatroom",link:"/chatroom"},
    {name:"Notify",link:"/notification"},
    {name:"Commute",link:"/wellfare"},
    {name:"Track",link:"/location"},
  ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-[100vw]  fixed top-0 left-0 z-10'>
           <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'
            style={{
                     background: "linear-gradient(to right, #38a169, #2f855a, #276749, #22543d)"
                 }}>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
           
                <span>Bus-Note</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6  cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold '>
                        <a href={link.link} className='text-white font-bold hover:text-blue-400  duration-500'>{link.name}</a>
                    </li>))
                }
                   <div className='flex justify-start w-[250px] gap-0'>

         <button onClick={()=>navigate('/login')} className='bg-slate-200 text-black py-2 px-6 rounded-3xl md:ml-8 hover:bg-indigo-400  

     duration-500 hover:text-black'>
           Login
         </button>
          <button onClick={()=>navigate('/registration')}  className='font-bold text-white text-sm bg-orange-500  py-2 px-6 rounded-3xl md:ml-8 hover:bg-slate-200 
     duration-500 hover:text-black'>
          Sign In
         </button>
         </div>
            </ul>
            {/* button */}
           </div>

        </div>
    );
};

export default Navbar;

