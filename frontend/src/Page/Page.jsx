import React from "react";

import store from "../store/store.jsx";
import { connect } from "react-redux";

import io from 'socket.io-client';

import textEditActions from '../actions/textEditActions.jsx';
import ioActions from '../actions/ioActions.jsx';

let socket;
let page;
let room = 'guestRoom';
class Page extends React.Component{
  constructor(props){
    super(props)
  }
  changeNickName(event){
    this.props.dispatch(textEditActions.editNickName(event.currentTarget.value))
  }
  connectToGuesRoom(){
    let nickName = this.props.nickName;
    //Обрабатываем текущий урл
    //если он содержит комнату -сразу коннектимся в нее
    let urlPage = new URL(window.location.href);
    let ur = new URLSearchParams(urlPage.search);
    if(ur.get('roomId')){
      room = ur.get('roomId');
    }
    this.props.dispatch(ioActions.connectToChat({room, nickName}));
  }
  sendMsg(){
    this.props.dispatch(ioActions.sendMsg());
    }
  doWithoutGotoLink(event){
    let urlPage = new URL(event.currentTarget.href);
    let ur = new URLSearchParams(urlPage.search);
    this.props.dispatch(ioActions.goToRoom(ur.get('roomId')))
    //socket.emit('goToRoom', {room: ur.get('roomId'), nickName: this.props.nickName});
    //На чем я погорел на собеседовании =///
    event.preventDefault();  
    return false;
  }
  render(){
    if (this.props.connected){
      page = <div>
        <div>
          <p>Блок сообщений</p>
        </div>
        <div>
          <p>Блок комнат</p>
          <a title="Гостевая комната" href="http://localhost/room/?roomId=guestRoom" onClick={this.doWithoutGotoLink.bind(this)}>Гостевая комната</a>
          <a title="Комната 1" href="http://localhost/room/?roomId=room1" onClick={this.doWithoutGotoLink.bind(this)}>Комната 1</a>
          <a title="Комната 2" href="http://localhost/room/?roomId=room2" onClick={this.doWithoutGotoLink.bind(this)}>Комната 2</a>
        </div>
        <div>
          <p>Блок с юзерами в комнате</p>
        </div>
        <div>
          <input type="text" placeholder="Сюда текст сообщения"/>
        </div>
        <div>
          <button onClick={this.sendMsg.bind(this)}>Отправить сообщение</button>
        </div>
      </div>
    } else {
      page = <div>
      <h1>Hello!</h1>
      <p>Enter your name</p>
      <input type="text" 
      placeholder = "nickName"
      onChange = {this.changeNickName.bind(this)} 
      value = {this.props.nickName || ''}/>
      <button onClick={this.connectToGuesRoom.bind(this)}>Enter</button>
    </div>
    }
    return page;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.ioContainer.Page_State.connected,
      nickName: store.text.Page_State.nickName
  }
}

export default connect (mapStateToProps)(Page);