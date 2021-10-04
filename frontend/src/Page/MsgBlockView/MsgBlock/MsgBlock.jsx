import React from "react";

import {connect} from "react-redux";
import store from '../../../store/store.jsx';

import ioActions from '../../../actions/ioActions.jsx'

import styles from './style.css';

class MsgBlock extends React.Component {
    constructor(props){
        super(props);
        this.needRef = React.createRef();
    }
    render() {
      let msgs = this.props.state.msgs.map((msg, index)=>{
        return <p className = {styles.style} key = {index}>{msg}</p>
      })
      return <div className = {styles.overflowView} ref = {this.needRef}>
        {msgs}
      </div>;
    }
    componentDidUpdate(){
      this.needRef.current.scrollTo(0, this.needRef.current.clientHeight);
    }

}

function mapStateToProps(store) {
  return {
      state: store.ioContainer.MsgBlock_State
  }
}
  
  export default connect (mapStateToProps)(MsgBlock);