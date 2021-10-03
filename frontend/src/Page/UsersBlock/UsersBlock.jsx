import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx'

class UsersBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      let users = this.props.state.users.map((user, index)=>{
        return <p key = {index}>{user}</p>
      })
      return <div>
        {users}
      </div>;
    }
}

function mapStateToProps(store) {
  return {
    state: store.ioContainer.UsersBlock_State
  }
}
  
  export default connect (mapStateToProps)(UsersBlock);