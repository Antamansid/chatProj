import React from "react";

import store from "../store/store.jsx";
import { connect } from "react-redux";

class Page extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div>
      <p>Hello!</p>
    </div>
  }
}

function mapStateToProps(store) {
  return {
      ioContainer: store.ioContainer
  }
}

export default connect (mapStateToProps)(Page);