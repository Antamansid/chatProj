import * as ioConstants from "../constants/ioConstants.jsx";

export function ioReducers(state = {Page_State:{connected:false}}, action){
  switch (action.type){
    case ioConstants.CONNECT_TO_CHAT:{
      state = Object.assign({}, state, {Page_State:{connected:true}});
      break;
    };
    case ioConstants.MESSAGE_FROM_SERVER:{
      console.log(action.payload);
      break;
    };
    case ioConstants.ROOM_MEET:{
      console.log(action.payload);
      break;
    };
    case ioConstants.ROOM_LEAVE:{
      console.log(action.payload);
      break;
    };
    case ioConstants.MSG_INCOME:{
      console.log(action.payload);
      break;
    };
    case ioConstants.SEND_MSG:{
      console.log(action.payload);
      break;
    };
    case ioConstants.GO_TO_ROOM:{
      console.log(action.payload);
      break;
    };
  }
  return state;
}