import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import AddFriends from '../components/AddFriends';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SosTrigger from '../components/SosTrigger';
import VoiceRecord from '../components/VoiceRecord';
import Helpline from '../components/Helpline';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';

const UserHome = () => {
  
  const [addFriends , setAddFriends] = useState(false);
  const addFriendsRef = useRef(null);
  const [sosTrigger , setSosTrigger] = useState(false);
  const sosTriggerRef = useRef(null);
  const [sideBar , setSideBar] = useState(false);
  const sideBarRef = useRef(null);

  const navigate = useNavigate();
  
  useGSAP(() => {
    if(addFriends){
      gsap.to(addFriendsRef.current , {
        transform:'translateY(0)',
        opacity : 1,
        duration: 0.5,
      })
    }
    else{
      gsap.to(addFriendsRef.current , {
        transform : 'translateY(100%)',
        opacity : 0,
        duration : 0.5,
      })
    }
  } , [addFriends])

  useGSAP(() => {
    if(sosTrigger){
      gsap.to(sosTriggerRef.current , {
        transform:'translateY(0)',
        opacity : 1,
        duration: 0.5,
      })
    }
    else{
      gsap.to(sosTriggerRef.current , {
        transform : 'translateY(100%)',
        opacity : 0,
        duration : 0.5,
      })
    }
  } , [sosTrigger])

  useGSAP(() => {
    if(sideBar){
      gsap.to(sideBarRef.current , {
        transform:'translateX(0)',
        opacity : 1,
        duration: 0.2,
      })
    }
    else{
      gsap.to(sideBarRef.current , {
        transform : 'translateX(-100%)',
        opacity : 0,
        duration : 0.3,
      })
    }
  } , [sideBar])

  return (
    <div>
        <div className='flex justify-between p-4 text-lg font-semibold bg-orange-400 text-white'>
            <div onClick={() => {setSideBar(true)}}>
              <i className="ri-menu-line"></i>
            </div>
            <p>Home</p>
            <div>
              <i className="ri-notification-3-line"></i>
            </div>
        </div>

        <div className='flex text-sm gap-3 font-semibold m-3'>
            <i className="ri-map-pin-line"></i>
            <p>C-39 Bloack-A , sector-17 , Rohini , New Delhi</p>
        </div>

        <div className='flex flex-col m-3 font-semibold'>
            <h1>Are You In Emergency?</h1>
            <p className='text-xs'>Press the button below help will reach you soon</p>
            <img onClick={() => {setSosTrigger(true)}} className='w-[68%] p-2 m-10  border rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 rounded-full' tabIndex='0' src="https://iconape.com/wp-content/png_logo_vector/sos-traffic-sign-logo.png" alt="SOS" />
        </div>

        <div className='flex m-3 justify-center gap-10'>
            <div onClick={() => {setAddFriends(true)}} className='border border-black  w-[30%] h-[20%] rounded-lg p-2'>
                <img className='rounded-lg' src="https://files.oaiusercontent.com/file-2hAtSjNbD7btHPGxEkSGA5?se=2025-03-27T17%3A45%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3811476d-55b4-463b-b409-666dafdc99e9.webp&sig=NJUn5IqtWYy0lbvP1KZtgkzvHlbecFr0qhCkwMJi8Ic%3D" alt="" />
                <p className='text-xs text-center'>Add Friends</p>
            </div>
            <div className='border border-black w-[30%] h-[20%] rounded-lg p-2'>
                <img className='rounded-lg' src="https://files.oaiusercontent.com/file-6aJiHkSjAKBFZ9CDXpCVAx?se=2025-03-27T17%3A49%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daafc8a30-9ae3-49e2-80e5-4ff9263db6b5.webp&sig=fC6vznzL%2B34ODL%2BWtB4LRLAguDityhPnAobaBxnO8XE%3D" alt="" />
                <p className='text-xs text-center'>Safe Route</p>
            </div>
            <div className='border border-black w-[30%] h-[20%] rounded-lg p-2'>
                <img className='rounded-lg' src="https://files.oaiusercontent.com/file-3fBMvSpPNEKkyV27mnXBzT?se=2025-03-27T17%3A51%3A44Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5c025ad6-093a-4d3d-ada8-fe4b2d4368ea.webp&sig=IFzA3oRmDIBYP648TAWA0FVs719Q//rT9GeeyYeUmXY%3D" alt="" />
                <p className='text-xs text-center'>Track me</p>
            </div>
        </div>

        <div className='bottom-0 w-full flex justify-center gap-10 bg-orange-400 p-3 text-white text-center'>
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
        
        <div ref={addFriendsRef} className='fixed w-[100%] z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-3 top-0'>
          <AddFriends setAddFriends={setAddFriends}/>
        </div>

        <div ref={sosTriggerRef} className='fixed w-[100%] z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-3 top-0'>
          <SosTrigger setSosTrigger={setSosTrigger}/>
        </div>

        <div ref={sideBarRef} className='fixed left-0 top-0 h-full w-[60%] z-10 bottom-0 translate-x-full p-3 bg-white px-3 py-10 pt-3'>
          <SideBar setSideBar={setSideBar}/>
        </div>

    </div>
  )
}

export default UserHome