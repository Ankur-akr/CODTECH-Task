const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

let documentData = "";

io.on('connection', socket => {
  console.log('User connected:', socket.id);
  socket.emit('load-document', documentData);

  socket.on('send-changes', delta => {
    socket.broadcast.emit('receive-changes', delta);
    documentData = delta;
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
