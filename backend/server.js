const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(path.resolve(__dirname, '..', 'frontend')));

//Уверен есть другой способ не настолько укуренный
app.get('/room/bundle.js', function(req, res){
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'bundle.js'));
});

app.get('/room/bundle.js.map', function(req, res){
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'bundle.js.map'));
});
app.get('/room/*', function(req, res){
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'index.html'));
});
//объект конмнат.
//Нужен для того, чтобы хранить кто в какой комнате сидит
//структура rooms.названиеКонмнаты[0-бесконечность]
let rooms = {};

io.on('connection', function(socket) {
  //Гостевая комната - стартовая
  let room = 'guestRoom';
  let nickName = socket.handshake.query.nickName;
  //если с коннектом передают название комнаты - сразу коннектимся в нее
  //вообще можно на фронте задать стандартную комнату.
  //но я тут перепроверяю
  if(socket.handshake.query.room){
    room = socket.handshake.query.room;
  }
  socket.join(room);
  if(!Array.isArray(rooms[room])){
    rooms[room]=[];
  }
  //добавляем никнэйм в юзеров комнаты
  rooms[room].push(nickName);
  //извещаем всех о том, что человечек присоединился к комнате
  io.sockets.in(room).emit('message', {msg: "["+(new Date).toLocaleTimeString()+"] "+nickName+" присоединился " + room, roomPpl:rooms[room]});
  //Обработка сообщений
  socket.on('sendMsg', function(data){
    io.sockets.in(room).emit('haveMsg', "["+(new Date).toLocaleTimeString()+"] "+nickName+": " + data.msg);
  })
  //Переход из комнаты в комнату по ссылке
  socket.on('goToRoom', function(data){
    //проверяем создан ли массив для комнаты
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
    }
    //Сообщаем, что юзер комнату покидает
    io.sockets.in(room).emit('message', {msg: "["+(new Date).toLocaleTimeString()+"] "+nickName+" покидает " + room, roomPpl:rooms[room]});
    //ищем в нем ник удаляемого человека (переходящего в другу комнату)
    let delNickPos = rooms[room].indexOf(nickName)
    //вообще тут надо проверить на -1
    rooms[room].splice(delNickPos, 1);
    socket.leave(room);
    //сообщаем всем, что человек ушел
    io.sockets.in(room).emit('roomLeave', {roomPpl:rooms[room]});
    //меняем комнату
    room = data.room;
    //проверяем создан ли массив для комнаты
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
    }
    socket.join(room);
    rooms[room].push(nickName);
    io.sockets.in(room).emit('roomMeet', {roomPpl:rooms[room]});
    //Сообщаем, что юзер зашел в комнату
    io.sockets.in(room).emit('message', {msg: "["+(new Date).toLocaleTimeString()+"] "+nickName+" присоединился " + room, roomPpl:rooms[room]});
  })
  socket.on('disconnect', function () {
    //проверяем создан ли массив для комнаты
    if(!Array.isArray(rooms[room])){
      rooms[room]=[];
    }
    //ищем в нем ник удаляемого человека 
    let delNickPos = rooms[room].indexOf(nickName)
    //вообще тут надо проверить на -1
    rooms[room].splice(delNickPos, 1);
    //сообщаем всем, что человек ушел
    io.sockets.in(room).emit('roomLeave', {roomPpl:rooms[room]});
  });
});

//вообще надо бы разделить потоки и повесить сокет на родной порт
http.listen(80, function() {
  console.log('listening on *:80');
});