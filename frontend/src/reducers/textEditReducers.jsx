import * as textEditConstants from "../constants/textEditConstants.jsx";

export function textEditReducers(state = {
  NickName_State:{nickName:""},
  ButtonConnectToServer_State:{nickName:""}
  }, action){
  switch (action.type){
    case textEditConstants.NICKNAME_EDIT:{
      state = Object.assign({}, state, {
        NickName_State:{nickName:action.payload},
        ButtonConnectToServer_State:{nickName:action.payload}
      });
      break;
    }
  }
  return state;
}