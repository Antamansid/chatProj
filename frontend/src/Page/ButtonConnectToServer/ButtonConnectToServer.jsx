import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx'

let room = 'guestRoom';
class ButtonConnectToServer extends React.Component {
    constructor(props){
        super(props);
    }
    connectToGuesRoom(){
      let nickName = this.props.nickName;
      //Обрабатываем текущий урл
      //если он содержит комнату -сразу коннектимся в нее
      //честно говоря тут бы переделал под реакт-роутер, но уже некогда
      let urlPage = new URL(window.location.href);
      let ur = new URLSearchParams(urlPage.search);
      if(ur.get('roomId')){
        room = ur.get('roomId');
      }
      this.props.dispatch(ioActions.connectToChat({room, nickName}));
    }
    render() {
        return <div>
          <button onClick={this.connectToGuesRoom.bind(this)}>Присоединиться</button>
        </div>;
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(ButtonConnectToServer);