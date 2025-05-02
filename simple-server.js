// Simplified server.js - Focus on making the connection work first
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = 7000;

// Configure middleware with very permissive CORS
app.use(cors({
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Simple test route
app.get('/test', (req, res) => {
  console.log('Test endpoint was called!');
  res.json({ status: 'Server is running', message: 'Connection successful!' });
});

// Simple SOS route that just returns success (no Twilio integration yet)
app.post('/send-sos-sms', (req, res) => {
  console.log('SOS endpoint was called with data:', req.body);
  
  // Just return success for now to test connection
  res.json({ 
    success: true, 
    message: 'SOS request received successfully!',
    data: req.body
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`====================================`);
  console.log(`Simple test server running on http://localhost:${PORT}`);
  console.log(`Test the server by visiting: http://localhost:${PORT}/test`);
  console.log(`====================================`);
});