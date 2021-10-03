import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import textEditActions from '../../actions/textEditActions.jsx';

class NickName extends React.Component {
    constructor(props){
        super(props);
    }
    changeNickName(event){
      this.props.dispatch(textEditActions.editNickName(event.currentTarget.value))
    }
    render() {
        return <div>
          <input type="text" 
          placeholder = "Имя или Никнэйм"
          onChange = {this.changeNickName.bind(this)} 
          value = {this.props.nickName || ''}/>
        </div>;
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.NickName_State.nickName
  }
}
  
  export default connect (mapStateToProps)(NickName);