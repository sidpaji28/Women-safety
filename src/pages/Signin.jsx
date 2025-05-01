import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5173/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Sign-in successful, navigate to user home
        navigate('/user-home');
      } else {
        // Show error message
        setError(data.message || 'Sign-in failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <div className='p-7 h-screen flex flex-col'>
      <form onSubmit={submitHandler}>
        <h2 className='text-center text-2xl font-semibold mb-5'>Sign In</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <h3 className='text-lg font-medium mb-2'>What's your E-mail</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='E-mail'
          className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'
          required
        />

        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
          className='bg-[#eeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400'
          required
        />

        <button
          type="submit"
          className='w-[80%] bg-orange-400 rounded-lg flex justify-center text-xl text-white m-7 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-orange-400'
        >
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default Signin;
