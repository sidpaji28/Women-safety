import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    
    <div
      className="min-h-screen flex flex-col justify-center items-center gap-5 bg-[url('https://wallpapercave.com/wp/wp4575212.jpg')] bg-cover bg-center"
    >
      <h1 className="text-4xl text-orange-400 font-bold text-center bg-opacity-50 p-3 rounded-lg">Navkiran</h1>

      <div onClick={() => {navigate('/home')}} className="border border-black flex flex-col justify-center items-center p-3 rounded-lg bg-white bg-opacity-50">
        <img src="https://th.bing.com/th/id/OIP.yhWFklQR-WOt0T8WREDu_QHaHa?w=152&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="h-12 w-25 border border-black rounded-full"/>
        <p className="text-lg font-semibold">Survivors</p>
      </div>

      <div className="border border-black flex flex-col justify-center items-center p-3 rounded-lg bg-white bg-opacity-50">
        <img src="https://th.bing.com/th/id/OIP.gMSnKOPqqBp8isT4FJf_6AHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7" className="h-12 w-25 border border-black rounded-full"/>
        <p className="text-lg font-semibold">Counselor</p>
      </div>

      <div className="border border-black flex flex-col justify-center items-center p-3 rounded-lg bg-white bg-opacity-50">
        <img src="https://th.bing.com/th/id/OIP.ChOpaUecc2bNwZtfFFIKBQHaGZ?w=189&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="h-15 w-20 border border-black rounded-full"/>
        <p className="text-lg font-semibold">Law</p>
      </div>

      <div className="border border-black flex flex-col justify-center items-center p-3 rounded-lg bg-white bg-opacity-50">
        <img src="https://th.bing.com/th/id/OIP.MyccVGgCzrfIJqPOiPZvPAHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7" alt="" className="h-15 w-20 border border-black rounded-full"/>
        <p className="text-lg font-semibold">Admin</p>
      </div>

    </div>
  );
};

export default Start;
