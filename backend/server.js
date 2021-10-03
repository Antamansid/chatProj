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

let rooms = {};

io.on('connection', function(socket) {
  let room = 'guestRoom';
  console.log(socket.handshake.query.room);
  if(socket.handshake.query.room){
    room = socket.handshake.query.room;
  }
  console.log('A user connected');
  socket.join(room);
  socket.on('sendNickName', function(data){
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
    }
    rooms[room].push(data);
    io.sockets.in(room).emit('message', {msg: data+" connected to Room", roomPpl:rooms[room]});
  })
  socket.on('sendMsg', function(data){
    let time = (new Date).toLocaleTimeString();
    io.sockets.in(room).emit('haveMsg', "["+time+"] "+data.nickName+": " + data.msg + "in room " + room);
  })
  socket.on('goToRoom', function(data){
    console.log('leaving' + room);
    console.log('rooms[room]');
    console.log(rooms[room]);
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
      console.log('what?')
    }
    let delNickPos = rooms[room].indexOf(data.nickName)
    rooms[room].splice(delNickPos, 1);
    socket.leave(room);
    io.sockets.in(room).emit('roomLeave', {roomPpl:rooms[room]});
    room = data.room;
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
    }
    console.log('joing' + room);
    socket.join(room);
    rooms[room].push(data.nickName);
    io.sockets.in(room).emit('roomMeet', {roomPpl:rooms[room]});
  })
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});


http.listen(80, function() {
  console.log('listening on *:80');
});