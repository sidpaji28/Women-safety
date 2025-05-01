import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import OtpVerfication from '../components/OtpVerfication';

const Signup = () => {
  
  const [firstname , setFirstName] = useState('');
  const [lastname , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [mobilenum , setMobileNum] = useState('');
  const [otpVerfication , setOtpVerification] = useState(false);
  const otpVerificationRef = useRef(null);

  const submitHandler = (e) => {
    
    e.preventDefault();

  }

    useGSAP(() => {
      if(otpVerfication){
        gsap.to(otpVerificationRef.current , {
          transform:'translateY(0)',
          opacity : 1,
          duration: 1,
        })
      }
      else{
        gsap.to(otpVerificationRef.current , {
          transform : 'translate(100%)',
          opacity : 0,
          duration : 1,
        })
      }
    } , [otpVerfication])

  return (
    <div className='fixed p-7 h-screen flex flex-col'>
      <form onSubmit={(e) => {submitHandler(e)}}>
           <h2 className='text-center text-2xl font-semibold'>Sign Up</h2>
           <h3 className='text-lg font-medium  mb-2'>What's your Name</h3>
           <div className='flex gap-4 mb-6'>
             <input required className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-orange-400' type="text"  placeholder="First Name"  value={firstname} onChange={(e) => setFirstName(e.target.value)} />
  
             <input  required className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-orange-400' type="text" placeholder="Last Name"  value={lastname} onChange={(e) => setLastName(e.target.value)} />
           </div>
            
           <h3 className='text-lg font-medium  mb-2'>What's your E-mail</h3>
           <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='E-mail' className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'/>
           <h3 className='text-lg font-medium  mb-2'>Password</h3>
           <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Password' className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'/>
           <h3 className='text-lg font-medium  mb-2'>Mobile No.</h3>
           <input value={mobilenum} onChange={(e) => {setMobileNum(e.target.value)}} type="text" placeholder='Mobile No.' className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'/>
           <button onClick={() => {console.log("create account clicked"); setOtpVerification(true)}} className='bg-orange-400 text-white font-semibold  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-orange-400'>
               Create Account
           </button>
      </form>

      <div ref={otpVerificationRef} className='fixed w-[100%] z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-12'>
        <OtpVerfication setOtpVerification={setOtpVerification} />
      </div>


    </div>
  )
}

export default Signup