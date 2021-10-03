import * as textEditConstants from "../constants/textEditConstants.jsx";

export function textEditReducers(state = {
  NickName_State:{nickName:""},
  ButtonConnectToServer_State:{nickName:""},
  MsgInput_State:{msg:""},
  ButtonSendMsg_State:{msg:""}
  }, action){
  switch (action.type){
    case textEditConstants.NICKNAME_EDIT:{
      state = Object.assign({}, state, {
        NickName_State:{nickName:action.payload},
        ButtonConnectToServer_State:{nickName:action.payload}
      });
      break;
    };
    case textEditConstants.MSG_EDIT:{
      state = Object.assign({}, state, {
        MsgInput_State:{msg:action.payload},
        ButtonSendMsg_State:{msg:action.payload}
      });
      break;
    }
    case textEditConstants.CLEAR_MSG_INPUT:{
      state = Object.assign({}, state, {
        MsgInput_State:{msg:""},
        ButtonSendMsg_State:{msg:""}
      });
      break;
    }
  }
  return state;
}