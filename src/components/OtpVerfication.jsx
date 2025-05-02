import React from 'react'
import { Link } from 'react-router-dom'

const OtpVerfication = (props) => {
  return (
    <div className='flex flex-col justify-center w-[100%] '>
        <h2 className='text-2xl text-semibold text-center'>Otp Verfication</h2>

        <div className='text-center font-medium'>
           <h4>OTP has been sent to your mobile</h4>
           <p>Please enter OTP</p>
        </div>

        <div className='flex justify-center gap-2 m-4'>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
            <input required type="text" className='border h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'/>
        </div>
        
        <Link to='/user-home' onClick={() => {props.setOtpVerification(false)}} className='w-[80%] bg-orange-400 rounded-lg flex justify-center text-xl text-white m-7'>
            Verify OTP
        </Link>
    </div>
  )
}

export default OtpVerfication