import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const Start = () => {
  const navigate = useNavigate();
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x0a0a3c,
        backgroundColor: 0x000028,
        amplitudeFactor: 2.0,
        size: 1.5,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  // Navigation card component for better reusability
  const NavCard = ({ icon, title, onClick, href }) => {
    const cardContent = (
      <>
        <div className="h-16 w-16 mb-2 overflow-hidden rounded-full border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <img src={icon} alt={title} className="h-full w-full object-cover" />
        </div>
        <p className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-800">
          {title}
        </p>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center rounded-xl bg-white bg-opacity-80 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-95 hover:shadow-xl"
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div
        onClick={onClick}
        className="group cursor-pointer flex flex-col items-center justify-center rounded-xl bg-white bg-opacity-80 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-95 hover:shadow-xl"
      >
        {cardContent}
      </div>
    );
  };

  return (
    <div
      ref={vantaRef}
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-purple-900 to-indigo-900"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4">
        {/* Title with text shadow and animation */}
        <h1 className="text-6xl md:text-8xl text-white font-bold text-center mb-12 font-osake tracking-wider animate-pulse-slow">
          <span className="inline-block bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
            Navkiran
          </span>
        </h1>

        {/* Navigation cards in a responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl">
          <NavCard
            icon="https://th.bing.com/th/id/OIP.yhWFklQR-WOt0T8WREDu_QHaHa?w=152&h=180&c=7&r=0&o=5&pid=1.7"
            title="Survivors"
            onClick={() => navigate("/home")}
          />
          
          <NavCard
            icon="https://th.bing.com/th/id/OIP.gMSnKOPqqBp8isT4FJf_6AHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7"
            title="Counselor"
            href="https://chat.earkick.com/"
          />
          
          <NavCard
            icon="https://th.bing.com/th/id/OIP.ChOpaUecc2bNwZtfFFIKBQHaGZ?w=189&h=180&c=7&r=0&o=5&pid=1.7"
            title="Law"
            href="https://womensafetywing.telangana.gov.in/sahas/support-forum/"
          />
          
          <NavCard
            icon="https://th.bing.com/th/id/OIP.MyccVGgCzrfIJqPOiPZvPAHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
            title="Admin"
          />
        </div>
        
        {/* Footer text */}
        <p className="mt-12 text-white text-opacity-80 text-center">
          Supporting and empowering every step of the way
        </p>
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
// @keyframes gradient-x {
//   0%, 100% { background-position: 0% 50% }
//   50% { background-position: 100% 50% }
// }

// .animate-gradient-x {
//   animation: gradient-x 15s ease infinite;
//   background-size: 200% 200%;
// }

// .animate-pulse-slow {
//   animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

export default Start;