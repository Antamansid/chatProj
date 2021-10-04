import React from "react";

import ButtonSendMsg from './ButtonSendMsg/ButtonSendMsg.jsx';
import MsgInput from './MsgInput/MsgInput.jsx';
import MsgBlock from './MsgBlock/MsgBlock.jsx';

import styles from './style.css';

export default class MsgBlockView extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
      return <div className = {styles.style}>
        <MsgBlock/>
        <MsgInput/>
        <ButtonSendMsg/>
      </div>;
  }
}