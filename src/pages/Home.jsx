import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slidingImages = [
    "/src/assets/img1.jpg",
    "/src/assets/img2.jpg",
    "/src/assets/img3.jpg",
    "/src/assets/img4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % slidingImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (index) => (index - 1 + slidingImages.length) % slidingImages.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      {/* Top navigation bar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Navkiran</h1>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-500 text-lg">?</span>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <div className="flex-1 flex flex-col px-4 py-6 max-w-md mx-auto w-full">
        {/* Image carousel section */}
        <div className="mb-8 flex-1 flex flex-col">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
            {/* Image with transition */}
            <img
              src={slidingImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isTransitioning ? "opacity-60" : "opacity-100"
              }`}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {slidingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Image description text */}
          <div className="mt-4 mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Welcome to Navkiran</h2>
            <p className="text-gray-600 mt-2">
              Supporting and empowering every step of the way
            </p>
          </div>
        </div>
        
        {/* Authentication buttons */}
        <div className="space-y-4 mb-6 w-full">
          <Link
            to="/signin"
            className="flex items-center justify-center border-2 border-orange-400 py-3 px-6 w-full rounded-lg text-lg font-semibold text-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-sm"
          >
            Sign In
          </Link>
          
          <Link
            to="/signup"
            className="flex items-center justify-center bg-orange-500 text-white py-3 px-6 w-full rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md"
          >
            Sign Up
          </Link>
        </div>
        
        {/* Additional information */}
        <div className="text-center mt-auto text-sm text-gray-500">
          <p>Need help? <a href="#" className="text-orange-500 hover:underline">Contact support</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;