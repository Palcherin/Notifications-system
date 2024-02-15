import React from 'react'
import Twilio from '../Componets/twilio'

export const Notification = () => {
  return (
  <>
     <div className='flex justify-start h-[100vh] bg-pink-200 pt-[5%]'>
    <div className='h-[90%] basis-[100%]'>
      <img src='assests/home pic.png' className='h-[80vh]'/>
    </div>
    <div className='basis-[100%] pt-[15%]'>
      <h1 className='text-5xl font-bold'>The Quintessential<br/> School Bus Application</h1>
      <p className='text-xl'>A powerful tool to make school commuting easier and safer</p>
      {/* <img src='assests/ic6.svg' className='animate-spin ml-[20%]'/> */}
      <button className='bg-pink-900 px-6 py-2 mt-10 tect-xl font-bold hover:bg-pink-800 rounded-full'  >Get Started</button>
    </div>
   </div>
   {/* why choose us */}
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
   <Twilio/>
  </>
  )
}

