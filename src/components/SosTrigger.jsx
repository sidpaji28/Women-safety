import React, { useEffect, useRef, useState } from 'react'
import SosOtpVerification from './SosOtpVerification';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SosTrigger = (props) => {
    
  const [timeLeft , setTimeLeft] = useState(10);
  const [sosOtpVerfication , setSosOtpVerification] = useState(false);
  const sosOtpVerficationRef = useRef(null);
  const setSosTrigger = props.setSosTrigger;

  useEffect(() => {
    if(timeLeft > 0)
    {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft-1)
        }, 1000);
    
        return () => clearTimeout(timer);
    }
  } , [timeLeft])

  useGSAP(() => {
    if(sosOtpVerfication){
      gsap.to(sosOtpVerficationRef.current , {
        transform:'translateY(0)',
        opacity : 1,
        duration: 1,
      })
    }
    else{
      gsap.to(sosOtpVerficationRef.current , {
        transform : 'translateY(100%)',
        opacity : 0,
        duration : 1,
      })
    }
  } , [sosOtpVerfication])

  return (
    <div>
      <h1 className='text-4xl text-center text-orange-400 font-semibold'>HaloWatch</h1>
      <h3 className='text-lg text-center font-semibold mt-5'>Notifying Your Contacts</h3> 

      <div className='flex  mt-10 items-center justify-center'>
        <div className='w-48 h-48 bg-red-400 rounded-full flex item-center justify-center'>
            <div className='w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mt-7 animate-pulse'>
                <p className='text-white text-4xl font-bold'>{timeLeft}</p>
            </div>
        </div>
      </div> 
      
      <div className='flex items-center justify-center text-sm text-center font-semibold mt-5'>
        <p>During SOS event , phone captures your real time images and records surrounding noises at a time</p>
      </div>

      <div className='flex items-center justify-evenly mt-10 gap-3'>
        <button onClick={() => {setSosOtpVerification(true)}} className='w-full border border-orange-400 rounded-lg  text-orange-500'>Cancel SOS</button>
        <button onClick={() => (setSosTrigger(false))} className='w-full border bg-orange-400 text-white rounded-lg '>Skip Countdown</button>
      </div>

      <div ref={sosOtpVerficationRef} className='fixed w-[94%] z-20 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-3 top-21 border border-orange-400 rounded-lg'>
        <SosOtpVerification setSosOtpVerification={setSosOtpVerification} setSosTrigger={setSosTrigger}/>
      </div>
    </div>
  )
}

export default SosTrigger