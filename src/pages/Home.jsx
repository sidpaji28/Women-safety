import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slidingImages = [
    "https://files.oaiusercontent.com/file-P4csjk5Chf1m7dDBrfwWSh?se=2025-03-24T15%3A42%3A37Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6fd0bbd5-ed59-422d-a11e-691a0e0608f4.webp&sig=ojaFYTLBGDgNdx%2BERJb1Zyf/Q6cjj1mhNJfUtsSuTAA%3D",
    "https://files.oaiusercontent.com/file-VvB3RZcqNEbjsD1jJSNpMS?se=2025-03-24T15%3A44%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4f36183c-864e-4c30-98e5-b6f4ce39486d.webp&sig=JErngME7B/MZPuEn3/ZhwHrWFg0TyVEN8cCzvKbPKhQ%3D",
    "https://files.oaiusercontent.com/file-4J9qyJ8Qq7HTVy29jVsMMb?se=2025-03-24T15%3A40%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5d9ae79a-92ce-4547-83e1-fd656b3a8c24.webp&sig=z0x7ZL5JMbDQqmIiVPoKxfPbOYynrdvAFHocPhTh9cs%3D",
    "https://files.oaiusercontent.com/file-YJ6wkw2cp1DYJEBD7PCEdm?se=2025-03-24T15%3A41%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8941bd3c-b21d-422b-8e5d-2c065ddd9393.webp&sig=5cfWMF39nOMvEQUJhB/eLUMFO1JFRM%2Br1llztVPMQh0%3D",
    "https://files.oaiusercontent.com/file-U2GotjjN1zouUedHhCM8bz?se=2025-03-24T15%3A47%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0c735841-0df6-4a02-af28-541a525b8819.webp&sig=0qtpQHsnRQ55dZNbNJ7UCTBgvkDoCPYsOH3eVo21nR8%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % slidingImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + slidingImages.length) % slidingImages.length
    );
  };

  return (
    <div className="h-screen">
      <div className="h-3/5">
        <div className="h-[90%] bg-red-400 m-2 flex items-center justify-center rounded-lg">
          <img
            src={slidingImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full flex justify-evenly items-center mt-8">
          <button
            onClick={handlePrevious}
            className="border-2 w-[30%] border-orange-400 rounded-lg font-semibold"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="w-[30%] bg-orange-400 rounded-lg text-white font-semibold"
          >
            Next
          </button>
        </div>
      </div>
      <div className="h-2/5 flex flex-col gap-5 items-center p-5 mt-20">
        <Link
          to="/signin"
          className="border-2 border-orange-200 p-2 w-full rounded-lg text-lg font-semibold text-center"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-orange-400 text-white p-2 w-full rounded-lg text-lg font-semibold text-center"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
