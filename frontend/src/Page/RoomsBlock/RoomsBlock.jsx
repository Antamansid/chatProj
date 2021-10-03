import React from "react";

import {connect} from "react-redux";
import store from '../../store/store.jsx';

import ioActions from '../../actions/ioActions.jsx';

import Room from './Room/Room.jsx'

//массив комнат
//можно сделать рандом или создавать - задел на будущее
let roomMassive = [
  {
    title:"Гостева комната",
    href:"http://localhost/room/?roomId=guestRoom"
  },
  {
    title:"Комната 1",
    href:"http://localhost/room/?roomId=room1"
  },
  {
    title:"Комната 2",
    href:"http://localhost/room/?roomId=room2"
  },
]
class RoomsBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      let rooms = roomMassive.map((room, index)=>{
        return <Room title = {room.title} href = {room.href} key = {index}/>
      })
        return <div>
          <p>Блок комнат</p>
          {rooms}
        </div>
    }
}

function mapStateToProps(store) {
  return {
      nickName: store.text.ButtonConnectToServer_State.nickName
  }
}
  
  export default connect (mapStateToProps)(RoomsBlock);