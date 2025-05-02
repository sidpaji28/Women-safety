// EmergencyService.js - Separate service file for emergency call handling

/**
 * Service to handle emergency calls with backend logging
 */
export const EmergencyService = {
    /**
     * Initiates an emergency call and logs it to the backend
     * 
     * @param {String} serviceName - Name of the emergency service
     * @param {String} phoneNumber - Phone number to call
     * @returns {Promise} - Promise that resolves when call is initiated
     */
    makeEmergencyCall: async (serviceName, phoneNumber) => {
      try {
        // 1. Initiate the call directly using tel: protocol (this works immediately)
        const callElement = document.createElement('a');
        callElement.setAttribute('href', 'tel:${phoneNumber}');
        callElement.style.display = 'none';
        document.body.appendChild(callElement);
        callElement.click();
        document.body.removeChild(callElement);
        
        // 2. Log the call to backend (happens in parallel with the actual call)
        try {
          const userLocation = await EmergencyService.getCurrentLocation();
          
          fetch('/api/emergency-call', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service: serviceName,
              number: phoneNumber,
              timestamp: new Date().toISOString(),
              userLocation
            }),
          });
          
          // We don't await this because we don't want to delay the call
          // The backend logging is secondary to making the actual call
        } catch (backendError) {
          console.error('Failed to log call to backend:', backendError);
          // We don't show this error to user since the call should still be going through
        }
        
        return {
          success: true,
          message: 'Connected to ${serviceName}'
        };
      } catch (error) {
        console.error('Emergency call error:', error);
        return {
          success: false,
          message: 'Error: Could not connect to ${serviceName}'
        };
      }
    },
    
    /**
     * Gets the user's current location
     * 
     * @returns {Promise} - Promise that resolves with location object
     */
    getCurrentLocation: () => {
      return new Promise((resolve) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            () => {
              resolve({ latitude: null, longitude: null });
            }
          );
        } else {
          resolve({ latitude: null, longitude: null });
        }
      });
    }
  };
  
  export default EmergencyService;