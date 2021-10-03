import React from "react";

import {connect} from "react-redux";
import store from '../../../store/store.jsx';

import ioActions from '../../../actions/ioActions.jsx'

class MsgBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      let msgs = this.props.state.msgs.map((msg, index)=>{
        return <p key = {index}>{msg}</p>
      })
      return <div>
        {msgs}
      </div>;
    }
}

function mapStateToProps(store) {
  return {
      state: store.ioContainer.MsgBlock_State
  }
}
  
  export default connect (mapStateToProps)(MsgBlock);