import React from "react";

import store from "../store/store.jsx";
import { connect } from "react-redux";

import textEditActions from '../actions/textEditActions.jsx';
import ioActions from '../actions/ioActions.jsx';

import GreetingsTitle from './Greetings/GreetingsTitle.jsx';
import Hint from './Hint/Hint.jsx';
import NickNameInput from './NickNameInput/NickNameInput.jsx';
import ButtonConnectToServer from './ButtonConnectToServer/ButtonConnectToServer.jsx';
import MsgBlock from './MsgBlock/MsgBlock.jsx';
import UsersBlock from './UsersBlock/UsersBlock.jsx';
import MsgInput from './MsgInput/MsgInput.jsx';
import RoomsBlock from './RoomsBlock/RoomsBlock.jsx';
import ButtonSendMsg from './ButtonSendMsg/ButtonSendMsg.jsx';

let page;
class Page extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    if (this.props.connected){
      page = <div>
        <RoomsBlock/>
        <MsgBlock/>
        <MsgInput/>
        <ButtonSendMsg/>
        <UsersBlock/>
      </div>
    } else {
      page = <div>
      <GreetingsTitle/>
      <Hint/>
      <NickNameInput/>
      <ButtonConnectToServer/>
    </div>
    }
    return page;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.ioContainer.Page_State.connected
  }
}

export default connect (mapStateToProps)(Page);