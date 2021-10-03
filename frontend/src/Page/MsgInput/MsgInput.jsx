import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx'

class MsgInput extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div>
          <input type="text" placeholder="Сюда текст сообщения"/>
        </div>;
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(MsgInput);