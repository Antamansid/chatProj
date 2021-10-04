import React from "react";

import {connect} from "react-redux";
import store from '../../../store/store.jsx';

import ioActions from '../../../actions/ioActions.jsx'

import styles from './style.css'

class Room extends React.Component {
    constructor(props){
        super(props);
    }
    doWithoutGotoLink(event){
      //честно говоря тут бы переделал под реакт-роутер, но уже некогда
      let urlPage = new URL(event.currentTarget.href);
      let ur = new URLSearchParams(urlPage.search);
      this.props.dispatch(ioActions.goToRoom(ur.get('roomId')))
      //На чем я погорел на собеседовании =///
      event.preventDefault();  
      return false;
    }
    render() {
        return <div className = {styles.roomDiv}>
          <a className = {styles.room} title={this.props.title} href={this.props.href} onClick={this.doWithoutGotoLink.bind(this)}>{this.props.title}</a>
        </div>
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(Room);