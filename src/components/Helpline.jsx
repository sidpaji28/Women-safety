import React, { useState } from "react";
import EmergencyService from "./EmergencyService"; // Import the service

// Keep your original code mostly intact
const helplines = [
  { name: "Police", number: "100", icon: "👮‍♂" },
  { name: "Ambulance", number: "102", icon: "🚑" },
  { name: "Fire Brigade", number: "101", icon: "🔥" },
  { name: "Women Helpline", number: "1091", icon: "👩‍🦰" },
];

function HelplinePage() {
  // Add state for call status
  const [callStatus, setCallStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle emergency call
  const handleEmergencyCall = async (event, line) => {
    // Prevent default to handle the call ourselves
    event.preventDefault();

    try {
      setIsLoading(true);
      setCallStatus("Calling ${line.name}...");

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
        "Error: Could not connect to ${line.name}. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Emergency Helplines</h2>
      {helplines.map((line, index) => (
        <a
          key={index}
          href={'tel:${line.number}'    }
          // Just modify the onClick to use our handler
          onClick={(e) => handleEmergencyCall(e, line)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "10px" }}>
            {line.icon}
          </span>
          <span>{line.name}</span>
        </a>
      ))}

      {/* Add status message display */}
      {callStatus && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "0",
            right: "0",
            margin: "0 auto",
            width: "80%",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: callStatus.includes("Error")
              ? "#f44336"
              : callStatus.includes("Connected")
              ? "#4CAF50"
              : "#2196F3",
            color: "white",
            zIndex: 1000,
          }}
        >
          {callStatus}
        </div>
      )}
    </div>
  );
}

export default HelplinePage;
