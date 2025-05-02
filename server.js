// Backend server to handle SOS SMS requests
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware - Configure CORS more explicitly
app.use(cors({
  origin: '*', // In production, replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Twilio credentials
const accountSid = 'ACeffbc45a8cf6533b098636efbaac9e79';
const authToken = 'aa1a6e4a19009bffba58c5a6f693b340';
const client = twilio(accountSid, authToken);

// Route to send SOS SMS
app.post('/send-sos-sms', async (req, res) => {
  try {
    const { to, location } = req.body;
    
    // Default location message if none provided
    const locationInfo = location || "Current location (check tracking app)";
    
    const message = await client.messages.create({
      body: `EMERGENCY SOS! Help needed! Please send police to this location: ${locationInfo}`,
      from: "+16056006029", // Your Twilio phone number
      to: to || "+918700280644" // Default number or use the one provided in request
    });

    console.log('SOS SMS sent:', message.sid);
    res.json({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error('Error sending SOS SMS:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test route to verify server is running
app.get('/test', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the server by visiting: http://localhost:${PORT}/test`);
});