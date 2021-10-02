const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const url = require('url');


app.use(express.static(path.resolve(__dirname, '..', 'frontend')));

app.get('/room/bundle.js', function(req, res){
  //console.log(url.parse(req.url, true).query.roomId);
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'bundle.js'));
});

app.get('/room/bundle.js.map', function(req, res){
  //console.log(url.parse(req.url, true).query.roomId);
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'bundle.js.map'));
});
app.get('/room/*', function(req, res){
  console.log(url.parse(req.url, true).query.roomId);
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'index.html'));
});



io.on('connection', function(socket) {
  let room = 'guestRoom';
  console.log(socket.handshake.query.room);
  if(socket.handshake.query.room){
    room = socket.handshake.query.room;
  }
  console.log('A user connected');
  socket.join(room);
  socket.on('sendNickName', function(data){
    io.sockets.in(room).emit('message', data+" connected to Room");
  })
  socket.on('sendMsg', function(data){
    io.sockets.in(room).emit('haveMsg', data.nickName+": " + data.msg + "in room " + room);
  })

  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});


http.listen(80, function() {
  console.log('listening on *:80');
});