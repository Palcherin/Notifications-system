import React from 'react'
import Twilio from '../Componets/twilio'

export const Notification = () => {
  return (
  <>
     <div className='flex justify-start h-[100vh] bg-pink-200 pt-[5%]'>
    {/* <div className='h-[90%] basis-[100%]'>
      <img src='assests/home pic.png' className='h-[80vh]'/>
    </div> */}
    {/* <div className='basis-[100%] pt-[15%]'>
      <h1 className='text-5xl font-bold'>The Quintessential<br/> School Bus Application</h1>
      <p className='text-xl'>A powerful tool to make school commuting easier and safer</p>
      <img src='assests/ic6.svg' className='animate-spin ml-[20%]'/> 
      <button className='bg-pink-900 px-6 py-2 mt-10 tect-xl font-bold hover:bg-pink-800 rounded-full'  >Get Started</button>
    </div> */}
   </div>
   <Twilio className='absolute top-0 left-0 w-full h-[90%]'/>
  </>
  )
}

