import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SosTrigger from '../components/SosTrigger';
import VoiceRecord from '../components/VoiceRecord';
import Helpline from '../components/Helpline';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  

  const navigate = useNavigate();

  const [activeTab , setActiveTab] = useState('Record');
  const [isPulsing , setIsPulsing] = useState(false);

  const handleClick = () => {

    setIsPulsing(true);

    setTimeout(() => setIsPulsing(false) , 5000)
  }


  return (
    <div>
        <div className='flex flex-col justify-between p-4 text-lg font-semibold bg-orange-400 text-white pb-2'>
            <div className='flex justify-between mb-5'>
                <i className="ri-menu-line"></i>
                <p>Voice Record</p>
                <i className="ri-notification-3-line"></i>
            </div>
            <div className='flex justify-around items-center'>
            {['Record' , 'History'].map((tab) => (
                <p key={tab} className={`cursor-pointer pb-2 ${activeTab === tab ? 'border-b-4 border-white' : ''}`} onClick={() => setActiveTab(tab)}>
                    {tab}
                </p>
              ))}
            </div>
        </div>


        <div className='flex mt-[30%] items-center justify-center'>
            <div 
                className={`w-72 h-72 border border-orange-400 rounded-full flex items-center justify-center cursor-pointer ${isPulsing ? 'animate-pulse' : ''}`} 
                onClick={handleClick}
            >
                <div className='w-60 h-60 border border-orange-600 rounded-full flex items-center justify-center mt-2'>
                    <div className='w-48 h-48 bg-orange-400 rounded-full flex items-center justify-center mt-1'>
                        <div className='w-32 h-32 bg-orange-600 rounded-full flex items-center justify-center mt-1'>
                            <p className='text-white text-4xl font-bold'><i className="ri-mic-fill"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='fixed bottom-0 left-0 w-full flex justify-center gap-10 bg-orange-400 p-3 text-white text-center'>
            <div onClick={() => {navigate('/user-home')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1' tabIndex="0">
                <i className="ri-home-9-line"></i>
                <p>Home</p>
            </div>
            <div onClick={() => {navigate('/voice-record')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1' tabIndex="0">
                <i className="ri-mic-line"></i>
                <p>Record</p>
            </div>
            <div onClick={() => {navigate('/helpline')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1' tabIndex="0">
                <i className="ri-questionnaire-line"></i>
                <p>Helpline</p>
            </div>
            <div onClick={() => {navigate('/videos')}} className='focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1' tabIndex="0">
                <i className="ri-file-video-line"></i>
                <p>Videos</p>
            </div>
        </div>
        
    </div>
  )
}

export default UserHome