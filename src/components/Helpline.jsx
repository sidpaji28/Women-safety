import React, { useState, useEffect } from "react";
import EmergencyService from "./EmergencyService"; // Import the service
import { io } from "socket.io-client";

// Enhanced helplines with more details and improved icons
const helplines = [
  { 
    name: "Police", 
    number: "100", 
    icon: "👮‍♂️", 
    color: "#1a4d8c",
    description: "For emergency police assistance"
  },
  { 
    name: "Ambulance", 
    number: "102", 
    icon: "🚑", 
    color: "#e53935",
    description: "For medical emergencies and ambulance services"
  },
  { 
    name: "Fire Brigade", 
    number: "101", 
    icon: "🚒", 
    color: "#d84315",
    description: "For fire emergencies and rescue operations"
  },
  { 
    name: "Women Helpline", 
    number: "1091", 
    icon: "👩‍⚖️", 
    color: "#6a1b9a",
    description: "24/7 women's emergency helpline"
  },
];

function HelplinePage() {
  // Add state for call status
  const [callStatus, setCallStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeHelpline, setActiveHelpline] = useState(null);

  // Handle emergency call
  const handleEmergencyCall = async (event, line) => {
    if (event) event.preventDefault();
    
    try {
      setIsLoading(true);
      setActiveHelpline(line.name);
      setCallStatus(`Calling ${line.name}...`);
      
      // Use the EmergencyService to make the call
      const result = await EmergencyService.makeEmergencyCall(
        line.name,
        line.number
      );
      
      if (result.success) {
        setCallStatus(result.message);
      } else {
        setCallStatus(result.message + ". Please try again.");
      }

      // Clear status after 5 seconds
      setTimeout(() => setCallStatus(""), 5000);
    } catch (error) {
      console.error("Call handling error:", error);
      setCallStatus(
        `Error: Could not connect to ${line.name}. Please try again.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Connect to the ESP32 backend WebSocket server
    const socket = io("http://localhost:6000");
    
    // Listen for police alert event
    socket.on("policeAlert", () => {
      // Find the police helpline
      const policeLine = helplines.find((line) => line.name === "Police");
      if (policeLine) {
        // Trigger the police call handler programmatically
        handleEmergencyCall(null, policeLine);
      }
    });
    
    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-4 md:p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-4 md:p-6">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <span className="animate-pulse">🆘</span> 
            Emergency Helplines
          </h2>
          <p className="text-center text-white/80 mt-1 text-sm">
            Tap on a helpline to call immediately
          </p>
        </div>

        {/* Helpline List */}
        <div className="p-4 md:p-6 space-y-3">
          {helplines.map((line, index) => (
            <a
              key={index}
              href={`tel:${line.number}`}
              onClick={(e) => handleEmergencyCall(e, line)}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md
                ${activeHelpline === line.name 
                  ? "bg-blue-100 border-2 border-blue-400" 
                  : "bg-white border border-gray-200 hover:border-blue-300"}`}
              style={{
                transform: activeHelpline === line.name ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${line.color}20` }}
              >
                <span>{line.icon}</span>
              </div>
              
              <div className="ml-4 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{line.name}</span>
                  <span className="text-lg font-mono font-bold text-blue-600">{line.number}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{line.description}</p>
              </div>
              
              {/* Call icon */}
              <div className="ml-2 p-2 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional information */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            In case of emergency, call <span className="font-semibold">112</span> - The National Emergency Number
          </p>
        </div>
      </div>

      {/* Emergency guide button */}
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
          Emergency Guide
        </button>
      </div>

      {/* Status Toast */}
      {callStatus && (
        <div 
          className={`fixed bottom-6 left-0 right-0 mx-auto w-11/12 max-w-sm p-4 rounded-lg shadow-lg text-center text-white font-medium animate-fade-in z-50
            ${callStatus.includes("Error") 
              ? "bg-red-600" 
              : callStatus.includes("Connected") 
                ? "bg-green-600" 
                : "bg-blue-600"}`}
        >
          <div className="flex items-center justify-center gap-2">
            {isLoading && (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {callStatus}
          </div>
        </div>
      )}
    </div>
  );
}

// You might need to add this to your global CSS for the fade-in animation
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in {
//   animation: fadeIn 0.3s ease-out forwards;
// }

export default HelplinePage;
