import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 6000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to receive police alert from ESP32
app.post('/alert/police', (req, res) => {
  console.log('Police alert received from ESP32');
  // Broadcast the alert to all connected clients
  io.emit('policeAlert', { message: 'Police alert triggered' });
  res.json({ success: true, message: 'Police alert broadcasted' });
});

server.listen(port, () => {
  console.log(`ESP32 backend server running on port ${port}`);
});
