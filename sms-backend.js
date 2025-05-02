const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.json());

const accountSid = 'your_account_sid'; // Replace with your Twilio Account SID
const authToken = 'your_auth_token';   // Replace with your Twilio Auth Token
const client = twilio(accountSid, authToken);

app.post('/send-sos-sms', (req, res) => {
  const { to } = req.body;
  const message = 'help needed location this';

  if (!to) {
    return res.status(400).json({ message: 'Recipient phone number is required' });
  }

  client.messages
    .create({
      body: message,
      from: '+1234567890', // Replace with your Twilio phone number
      to: to
    })
    .then(message => {
      console.log('SMS sent:', message.sid);
      res.json({ success: true, sid: message.sid });
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
      res.status(500).json({ success: false, error: error.message });
    });
});

app.listen(port, () => {
  console.log(`SMS backend server running on port ${port}`);
});
