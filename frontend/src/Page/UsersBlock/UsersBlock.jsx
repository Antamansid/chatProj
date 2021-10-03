import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx'

class UsersBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div>
          <p>Блок с юзерами</p>
        </div>;
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(UsersBlock);