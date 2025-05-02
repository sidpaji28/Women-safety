import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom'; // Import for navigation

// Updated OtpVerification component with hard-coded OTP "2829"
const OtpVerification = ({ setOtpVerification }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  
  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value.match(/^[0-9]$/) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  // Handle key press for backspace functionality
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // Handle OTP verification
  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '2829') {
      navigate('/user-home');
    } else {
      alert('Invalid OTP!');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
      <div className="flex gap-2 mb-6">
        {otp.map((digit, i) => (
          <input 
            key={i}
            ref={inputRefs[i]}
            className="w-12 h-12 text-center text-xl border-2 border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
          />
        ))}
      </div>
      <div className="flex gap-4 w-full">
        <button 
          onClick={() => setOtpVerification(false)} 
          className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition-all duration-300"
        >
          Cancel
        </button>
        <button 
          onClick={verifyOtp}
          className="flex-1 bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobilenum, setMobileNum] = useState('');
  const [otpVerification, setOtpVerification] = useState(false);
  const otpVerificationRef = useRef(null);
  const formContainerRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setOtpVerification(true);
  };

  useGSAP(() => {
    if (otpVerification) {
      gsap.to(otpVerificationRef.current, {
        transform: 'translateY(0)',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      // Add blur to background when OTP verification is active
      gsap.to(formContainerRef.current, {
        filter: 'blur(3px)',
        duration: 0.5
      });
    } else {
      gsap.to(otpVerificationRef.current, {
        transform: 'translateY(100%)',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
      
      // Remove blur when OTP verification is hidden
      gsap.to(formContainerRef.current, {
        filter: 'blur(0px)',
        duration: 0.5
      });
    }
  }, [otpVerification]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
        
        <div ref={formContainerRef} className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2">Join us today and get started</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                value={mobilenum}
                onChange={(e) => setMobileNum(e.target.value)}
                type="tel"
                placeholder="+1 (123) 456-7890"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <button
              onClick={(e) => submitHandler(e)}
              className="w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Create Account
            </button>
            
            <div className="text-center text-sm text-gray-500">
              Already have an account? <a href="/Signin" className="text-orange-500 font-medium hover:text-orange-600">Sign in</a>
            </div>
          </div>
        </div>
        
        <div
          ref={otpVerificationRef}
          className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-white rounded-t-xl shadow-lg p-8 transform translate-y-full opacity-0 z-50"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
          <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
          <OtpVerification setOtpVerification={setOtpVerification} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
