const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(path.resolve(__dirname, '..', 'frontend')));

io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});