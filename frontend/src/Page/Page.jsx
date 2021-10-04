import React from "react";

import store from "../store/store.jsx";
import { connect } from "react-redux";

import textEditActions from '../actions/textEditActions.jsx';
import ioActions from '../actions/ioActions.jsx';

import GreetingsTitle from './Greetings/GreetingsTitle.jsx';
import Hint from './Hint/Hint.jsx';
import NickNameInput from './NickNameInput/NickNameInput.jsx';
import ButtonConnectToServer from './ButtonConnectToServer/ButtonConnectToServer.jsx';
import UsersBlock from './UsersBlock/UsersBlock.jsx';
import RoomsBlock from './RoomsBlock/RoomsBlock.jsx';
import MsgBlockView from './MsgBlockView/MsgBlockView.jsx'

import styles from './style.css';

let page;
class Page extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(styles);
    if (this.props.connected){
      page = <div className = {styles.makeGrid}>
        <RoomsBlock/>
        <MsgBlockView/>
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