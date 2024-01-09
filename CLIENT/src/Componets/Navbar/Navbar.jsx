// import React, { useState } from 'react'
// import Button from './bUTTON.JSX'
// // import {Menu} from 'react-icons/fa'




// const Navbar = () => {
   

// let [open, setOpen]=useState(false)
//   return (
//     <div className=''>
//     <div  className=''>
//     <div className=''>
//     <span>
//     <h1>Makini Bus Hub</h1>
//     </span>
//     </div>
//     <div onClick={()=>setOpen(!open)} className=''>
//       {/* <Menu name={open? 'close':'menu'}></Menu>
//       <Close/> */}
//     </div>
//     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] '} md:opacity-100`}>
//      {
//         Links.map((link)=>(
//             <li key={Links.name} className=''>
//             <a href={link.link} className=' '>{link.name}</a>
//             </li>
//         ))
//      }
     
      
//     </ul>
//     </div> 
      
//     </div>
//   )
// }

// export default Navbar


// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button.jsx';
import './Navbar.css';

const Navbar = () => {
  let Links =[
    {name:"Home",link:'/home'},
    {name:"Notification",link:'/notification'},
    {name:"Location",link:'/location'},
    {name:"Wellfare",link:'/welfare'},
    {name:"Contacts",link:'/contacts'},
    {name:"Chatroom",link:'/chatroom'},
];

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <h1>Makini Bus Hub</h1>
      <div onClick={() => setOpen(!open)} className="menu-icon">
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={` ${open ? 'active' : ''}`}>
        {Links.map((link) => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <Button text="Sign In" /> {/* Replace with your Sign In button */}
    </div>
  );
};

export default Navbar;
