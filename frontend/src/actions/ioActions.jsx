import * as ioConstants from "../constants/ioConstants.jsx";
import axios from "axios";

import store from '../store/store.jsx'
import io from 'socket.io-client';

let socket;
let nickName;

export default class ioActions{
  static connectToChat(data){
    nickName = data.nickName;
    socket = io('http://localhost:80', {query:data});
    socket.on('message', function(data){
      store.dispatch(messageFromServer(data));
    })
    socket.on('roomMeet', function(data){
      store.dispatch(roomMeet(data));
    })
    socket.on('roomLeave', function(data){
      store.dispatch(roomLeave(data));
    });
    socket.on('haveMsg', function(data){
      store.dispatch(msgIncome(data));
    })
    let result = {
      type: ioConstants.CONNECT_TO_CHAT
    }
    return result;
  }
  static sendMsg(data){
    socket.emit('sendMsg', {nickName, msg:'Hello everyOne!'});
    let result = {
      type: ioConstants.SEND_MSG
    }
    return result;
  }
  static goToRoom(room){
    socket.emit('goToRoom', {room, nickName});
    let result = {
      type: ioConstants.GO_TO_ROOM
    }
    return result;
  }
}
let messageFromServer = (data)=> {
  let result = {
    type: ioConstants.MESSAGE_FROM_SERVER,
    payload: data
  }
  return result;
};
let roomMeet = (data)=> {
  let result = {
    type: ioConstants.ROOM_MEET,
    payload: data
  }
  return result;
};
let roomLeave = (data)=> {
  let result = {
    type: ioConstants.ROOM_LEAVE,
    payload: data
  }
  return result;
};
let msgIncome = (data)=> {
  let result = {
    type: ioConstants.MSG_INCOME,
    payload: data
  }
  return result;
};