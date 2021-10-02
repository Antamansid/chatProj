import * as ioConstants from "../constants/ioConstants.jsx";

export function ioReducers(state = {Page_State:{connected:false}}, action){
  switch (action.type){
    case ioConstants.CONNECT_TO_CHAT:{
      state = Object.assign({}, state, {Page_State:{connected:true}});
      break;
    }
  }
  return state;
}