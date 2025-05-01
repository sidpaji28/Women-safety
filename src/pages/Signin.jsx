import React, { useState } from 'react'
import { Link } from 'react-router-dom';
  
const Signin = () => {

  const [firstname , setFirstName] = useState('');
  const [lastname , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [mobilenum , setMobileNum] = useState('');

  const submitHandler = (e) => {
    
    e.preventDefault();

  }
  return (
    <div className='p-7 h-screen flex flex-col'>
       <form onSubmit={(e) => {
          submitHandler(e);
       }}>
            <h2 className='text-center text-2xl font-semibold mb-5'>Sign In</h2>

            <h3 className='text-lg font-medium  mb-2'>What's your E-mail</h3>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='E-mail' className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'/>

            <h3 className='text-lg font-medium  mb-2'>Password</h3>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Password' className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'/>

            <Link to='/user-home' className='w-[80%] bg-orange-400 rounded-lg flex justify-center text-xl text-white m-7 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-orange-400'>
              Sign-In
            </Link>
       </form>

    </div>
  )
}

export default Signin