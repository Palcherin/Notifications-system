import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Emailnot  from '../Componets/Email'
import Navbar from '../Componets/Navbar/Navbar'



export const Notification = () => {
  return (
  <>
     <div className='h-fit bg-white'>
      <Navbar/>
      <Emailnot/>
      
     </div>
   
  </>
  )
}

