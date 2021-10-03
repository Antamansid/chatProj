import React from "react";

import ButtonSendMsg from './ButtonSendMsg/ButtonSendMsg.jsx';
import MsgInput from './MsgInput/MsgInput.jsx';
import MsgBlock from './MsgBlock/MsgBlock.jsx';

export default class MsgBlockView extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
      return <div>
        <MsgBlock/>
        <MsgInput/>
        <ButtonSendMsg/>
      </div>;
  }
}