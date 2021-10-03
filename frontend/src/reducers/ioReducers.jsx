import * as ioConstants from "../constants/ioConstants.jsx";

export function ioReducers(state = {
  Page_State:{connected:false},
  MsgBlock_State:{
    msgs:[]
  },
  UsersBlock_State:{
    users:[]
  }
}, action){
  switch (action.type){
    case ioConstants.CONNECT_TO_CHAT:{
      state = Object.assign({}, state, {
        Page_State:{connected:true}
      });
      break;
    };
    case ioConstants.MESSAGE_FROM_SERVER:{
      let msgs = state.MsgBlock_State.msgs;
      let users = action.payload.roomPpl;
      msgs.push(action.payload.msg)
      state = Object.assign({}, state, {
        MsgBlock_State:{msgs:msgs},
        UsersBlock_State:{users:users}
      });
      break;
    };
    case ioConstants.ROOM_MEET:{
      let users = action.payload.roomPpl;
      state = Object.assign({}, state, {
        UsersBlock_State:{users:users}
      });
      break;
    };
    case ioConstants.ROOM_LEAVE:{
      let users = action.payload.roomPpl;
      state = Object.assign({}, state, {
        UsersBlock_State:{users:users}
      });
      break;
    };
    case ioConstants.MSG_INCOME:{
      let msgs = state.MsgBlock_State.msgs;
      msgs.push(action.payload)
      state = Object.assign({}, state, {
        MsgBlock_State:{msgs:msgs}
      });
      break;
    };
    case ioConstants.SEND_MSG:{
      break;
    };
    case ioConstants.GO_TO_ROOM:{
      state = Object.assign({}, state, {
        MsgBlock_State:{msgs:[]}
      });
      break;
    };
  }
  return state;
}