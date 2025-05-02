import React from 'react'

const SosTrigger = ({ setSosTrigger, sosResult }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex justify-between w-full">
        <h1 className="text-lg font-bold">SOS Alert</h1>
        <button 
          onClick={() => {setSosTrigger(false)}}
          className="text-gray-500 hover:text-black"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <img 
          src="https://iconape.com/wp-content/png_logo_vector/sos-traffic-sign-logo.png" 
          alt="SOS" 
          className="w-32 mb-8"
        />
        
        {sosResult && sosResult.success ? (
          <div className="text-center">
            <div className="text-green-600 text-2xl mb-4">
              <i className="ri-check-line"></i> SOS Alert Sent
            </div>
            <p className="mb-3">Your emergency alert has been sent.</p>
            <p className="mb-8">Help is on the way. Stay calm and in a safe location if possible.</p>
            <p className="text-xs">Message ID: {sosResult.messageSid}</p>
          </div>
        ) : sosResult && !sosResult.success ? (
          <div className="text-center">
            <div className="text-red-600 text-2xl mb-4">
              <i className="ri-error-warning-line"></i> 
            </div>
            <p className="mb-3">Your emergency alert sent.</p>
            <p className="mb-8">help is on the way.</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-blue-600 text-2xl mb-4">
              <i className="ri-loader-4-line animate-spin"></i> Sending Alert
            </div>
            <p className="mb-3">Your emergency alert is being sent.</p>
            <p className="mb-8">Please wait...</p>
          </div>
        )}
        
        <button
          onClick={() => {setSosTrigger(false)}}
          className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SosTrigger