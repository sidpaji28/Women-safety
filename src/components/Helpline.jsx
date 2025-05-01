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

  const help = [
    {image:"https://th.bing.com/th/id/OIP.c4vb7HAP2tX9Phs9b1JpHgHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7" , prof:"Police" , num:"112"},
    {image:"https://th.bing.com/th/id/OIP.xPt6dvOfiMGJFhapQNla2QHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7" , prof:"Ambulance" , num:"108"},
    {image:"https://th.bing.com/th/id/OIP.bCgNzW2NtYfgnuWXc3aHfAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7" , prof:"Fire" , num:"101"},
    {image:"https://th.bing.com/th/id/OIP.c4oqIhqLWSvHPpQAflwY7gHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7" , prof:"Pregnancy" , num:"102"},
    {image:"https://th.bing.com/th/id/OIP.R8XiuWptjmjmPL6ohzyPCAHaHa?pid=ImgDet&w=189&h=189&c=7" , prof:"Women Helpline" , num:"1091"},
    {image:"https://th.bing.com/th/id/OIP.o-W9d26onAPCKa0caMjVSwAAAA?w=241&h=180&c=7&r=0&o=5&pid=1.7" , prof:"Road Accident" , num:"1073"},
]
  return (
    <div>

        <div className='flex flex-col justify-between p-4 text-lg font-semibold bg-orange-400 text-white pb-2'>
            <div className='flex justify-between mb-5'>
                <i className="ri-menu-line"></i>
                <p>National Helplines</p>
                <i className="ri-notification-3-line"></i>
            </div>
        </div>
        
        {help.map((val , index) => (
        <div key={index} className='border border-black m-2 mb-1 p-2 flex justify-between rounded-lg'>
            <div className='flex gap-5 text-lg font-semibold'>
                <img src={val.image} alt={val.prof} className='h-12  p-1 rounded-full' />
                <div>
                    <p>{val.prof}</p>
                    <p>{val.num}</p>
                </div>
            </div>
        
            <div className='text-2xl m-2'>
                <i className="ri-phone-fill"></i>
            </div>
        </div>

        ))}


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