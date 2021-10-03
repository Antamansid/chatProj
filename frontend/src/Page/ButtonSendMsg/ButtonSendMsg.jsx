import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx'

class ButtonSendMsg extends React.Component {
    constructor(props){
        super(props);
    }
    sendMsg(){
      this.props.dispatch(ioActions.sendMsg());
      }
    render() {
        return <div>
          <button onClick={this.sendMsg.bind(this)}>Отправить сообщение</button>
        </div>
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(ButtonSendMsg);