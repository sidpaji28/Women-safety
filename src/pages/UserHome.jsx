import React, { useRef, useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import AddFriends from '../components/AddFriends';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SosTrigger from '../components/SosTrigger';
import VoiceRecord from '../components/VoiceRecord';
import Helpline from '../components/Helpline';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';

// SVG Logo Components
const AddFriendsLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-orange-500">
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="16" y1="11" x2="22" y2="11" />
  </svg>
);

const SafeRouteLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-green-600">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    <path d="M12 22V12" strokeDasharray="4 2" />
  </svg>
);

const TrackMeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-blue-600">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z" />
  </svg>
);

const UserHome = () => {
  
  const [addFriends, setAddFriends] = useState(false);
  const addFriendsRef = useRef(null);
  const [sosTrigger, setSosTrigger] = useState(false);
  const sosTriggerRef = useRef(null);
  const [sideBar, setSideBar] = useState(false);
  const sideBarRef = useRef(null);
  const [location, setLocation] = useState('');
  const [sendingSos, setSendingSos] = useState(false);
  const [sosResult, setSosResult] = useState(null);

  // Get user's location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('C-39 Block-A, sector-17, Rohini, New Delhi'); // Fallback location
        }
      );
    } else {
      setLocation('C-39 Block-A, sector-17, Rohini, New Delhi'); // Fallback location
    }
  }, []);

  const navigate = useNavigate();
  
  useGSAP(() => {
    if(addFriends){
      gsap.to(addFriendsRef.current, {
        transform: 'translateY(0)',
        opacity: 1,
        duration: 0.5,
      })
    }
    else{
      gsap.to(addFriendsRef.current, {
        transform: 'translateY(100%)',
        opacity: 0,
        duration: 0.5,
      })
    }
  }, [addFriends])

  useGSAP(() => {
    if(sosTrigger){
      gsap.to(sosTriggerRef.current, {
        transform: 'translateY(0)',
        opacity: 1,
        duration: 0.5,
      })
    }
    else{
      gsap.to(sosTriggerRef.current, {
        transform: 'translateY(100%)',
        opacity: 0,
        duration: 0.5,
      })
    }
  }, [sosTrigger])

  useGSAP(() => {
    if(sideBar){
      gsap.to(sideBarRef.current, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 0.2,
      })
    }
    else{
      gsap.to(sideBarRef.current, {
        transform: 'translateX(-100%)',
        opacity: 0,
        duration: 0.3,
      })
    }
  }, [sideBar])

  // Function to verify if the server is running
  const checkServerConnection = async () => {
    try {
      const response = await fetch('http://localhost:7000/test', { 
        method: 'GET',
        // No-cache header to ensure we're not getting a cached response
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (response.ok) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Server connection test failed:', error);
      return false;
    }
  };

  // Function to handle SOS trigger
  const handleSosClick = async () => {
    setSendingSos(true);
    setSosTrigger(true);
    
    // First check if server is available
    const isServerRunning = await checkServerConnection();
    
    if (!isServerRunning) {
      console.error('Backend server is not available');
      setSosResult({ 
        success: false, 
        error: 'Backend server is not running. Make sure to start the server with "node server.js"'
      });
      setSendingSos(false);
      return;
    }
    
    try {
      // Add timestamp to prevent caching issues
      const serverUrl = `http://localhost:7000/send-sos-sms?_=${Date.now()}`;
      
      console.log('Sending SOS request to:', serverUrl);
      console.log('With data:', { to: '+918700280644', location: location });
      
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({ 
          to: '+918700280644', // Emergency contact number
          location: location 
        })
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Server response:', data);
      setSosResult(data);
      
      if (data.success) {
        alert('SOS alert sent successfully. Help is on the way!');
      } else {
        alert('Failed to send SOS alert. Please try calling emergency services directly.');
      }
    } catch (error) {
      console.error('Error sending SOS:', error);
      
      // Provide more specific error message based on error type
      let errorMessage = error.message;
      if (error.message === 'Failed to fetch') {
        errorMessage = 'Cannot connect to the server. Make sure the server is running on port 7000.';
      }
      
      alert('Error sending SOS. Please try calling emergency services directly: ' + errorMessage);
      setSosResult({ success: false, error: errorMessage });
    } finally {
      setSendingSos(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
        <div className='flex justify-between p-4 text-lg font-semibold bg-orange-400 text-white'>
            <div onClick={() => {setSideBar(true)}} className="cursor-pointer">
              <i className="ri-menu-line"></i>
            </div>
            <p>Home</p>
            <div>
              <i className="ri-notification-3-line"></i>
            </div>
        </div>

        <div className='flex text-sm gap-3 font-semibold m-3'>
            <i className="ri-map-pin-line"></i>
            <p>{location || 'Getting your location...'}</p>
        </div>

        <div className='flex flex-col m-3 font-semibold items-center'>
            <h1 className="text-xl">Are You In Emergency?</h1>
            <p className='text-xs mt-2'>Press the button below - help will reach you soon</p>
            <button
              onClick={handleSosClick}
              disabled={sendingSos}
              className='relative mt-6 mb-6 focus:outline-none focus:ring-4 focus:ring-red-500 rounded-full hover:scale-105 transition-transform duration-300'
            >
              <img
                className='w-48 p-2 border rounded-full'
                src="https://iconape.com/wp-content/png_logo_vector/sos-traffic-sign-logo.png"
                alt="SOS"
              />
              {sendingSos && (
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-30">
                  <div className="animate-pulse text-white font-bold">Sending...</div>
                </div>
              )}
            </button>
            {sosResult && sosResult.success && (
              <p className="text-green-600 font-bold">SOS Alert Sent Successfully!</p>
            )}
        </div>

        <div className='flex m-3 justify-center gap-5 flex-grow'>
            <div onClick={() => {setAddFriends(true)}} className='border border-black w-[30%] rounded-lg p-2 cursor-pointer hover:bg-orange-50 transition-colors'>
                <div className='h-24 w-full flex items-center justify-center p-2'>
                  <AddFriendsLogo />
                </div>
                <p className='text-xs text-center mt-2 font-medium'>Add Friends</p>
            </div>
            <div onClick={() => navigate('/safe-route')} className='border border-black w-[30%] rounded-lg p-2 cursor-pointer hover:bg-orange-50 transition-colors'>
                <div className='h-24 w-full flex items-center justify-center p-2'>
                  <SafeRouteLogo />
                </div>
                <p className='text-xs text-center mt-2 font-medium'>Safe Route</p>
            </div>
            <div onClick={() => navigate('/track-me')} className='border border-black w-[30%] rounded-lg p-2 cursor-pointer hover:bg-orange-50 transition-colors'>
                <div className='h-24 w-full flex items-center justify-center p-2'>
                  <TrackMeLogo />
                </div>
                <p className='text-xs text-center mt-2 font-medium'>Track me</p>
            </div>
        </div>

        <div className='sticky bottom-0 w-full flex justify-center gap-10 bg-orange-400 p-3 text-white text-center'>
            <div onClick={() => {navigate('/user-home')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1 cursor-pointer' tabIndex="0">
                <i className="ri-home-9-line"></i>
                <p>Home</p>
            </div>
            <div onClick={() => {navigate('/voice-record')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1 cursor-pointer' tabIndex="0">
                <i className="ri-mic-line"></i>
                <p>Record</p>
            </div>
            <div onClick={() => {navigate('/helpline')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1 cursor-pointer' tabIndex="0">
                <i className="ri-questionnaire-line"></i>
                <p>Helpline</p>
            </div>
            <div onClick={() => {navigate('/videos')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1 cursor-pointer' tabIndex="0">
                <i className="ri-file-video-line"></i>
                <p>Videos</p>
            </div>
        </div>
        
        <div ref={addFriendsRef} className='fixed w-[100%] z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-3 top-0'>
          <AddFriends setAddFriends={setAddFriends}/>
        </div>

        <div ref={sosTriggerRef} className='fixed w-[100%] z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-3 top-0'>
          <SosTrigger setSosTrigger={setSosTrigger} sosResult={sosResult} />
        </div>

        <div ref={sideBarRef} className='fixed left-0 top-0 h-full w-[60%] z-10 bottom-0 translate-x-full p-3 bg-white px-3 py-10 pt-3'>
          <SideBar setSideBar={setSideBar}/>
        </div>
    </div>
  )
}

export default UserHome