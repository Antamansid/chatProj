import React from "react";

import {connect} from "react-redux";
import store from '../../../store/store.jsx';

import ioActions from '../../../actions/ioActions.jsx'

import textEditActions from '../../../actions/textEditActions.jsx'

import styles from './style.css';

class ButtonSendMsg extends React.Component {
    constructor(props){
        super(props);
    }
    sendMsg(){
      this.props.dispatch(ioActions.sendMsg(this.props.state.msg));
      this.props.dispatch(textEditActions.clearMsgInput());
      }
    render() {
        return <div>
          <button className = {styles.style} onClick={this.sendMsg.bind(this)}>Отправить сообщение</button>
        </div>
    }
}

function mapStateToProps(store) {
  return {
      state: store.text.ButtonSendMsg_State
  }
}
  
  export default connect (mapStateToProps)(ButtonSendMsg);