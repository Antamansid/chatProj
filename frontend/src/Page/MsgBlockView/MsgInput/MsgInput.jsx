import React from "react";

import {connect} from "react-redux";
import store from '../../../store/store.jsx';

import textEditActions from '../../../actions/textEditActions.jsx';

import styles from './style.css';

class MsgInput extends React.Component {
    constructor(props){
        super(props);
    }
    changeMsg(event){
      this.props.dispatch(textEditActions.changeMsg(event.currentTarget.value))
    }
    render() {
        return <div>
          <input type="text" 
          className = {styles.style}
          placeholder = "Сюда текст сообщения"
          onChange = {this.changeMsg.bind(this)} 
          value = {this.props.state.msg || ''}/>
        </div>;
    }
}

function mapStateToProps(store) {
  return {
      state: store.text.MsgInput_State
  }
}
  
  export default connect (mapStateToProps)(MsgInput);