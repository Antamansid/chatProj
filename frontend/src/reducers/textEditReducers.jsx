import * as textEditConstants from "../constants/textEditConstants.jsx";

export function textEditReducers(state = {Page_State:{nickName:""}}, action){
  switch (action.type){
    case textEditConstants.NICKNAME_EDITE:{
      state = Object.assign({}, state, {Page_State:{nickName:action.payload}});
      break;
    }
  }
  return state;
}