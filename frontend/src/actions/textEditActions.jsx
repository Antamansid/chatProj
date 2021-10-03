import * as textEditConstants from "../constants/textEditConstants.jsx";

export default class textEditActions{
  static editNickName(nickName){
    let result = {
      type: textEditConstants.NICKNAME_EDIT,
      payload: nickName
    }
    return result;
  }
  static changeMsg(msg){
    let result = {
      type: textEditConstants.MSG_EDIT,
      payload: msg
    }
    return result;
  }
  static clearMsgInput(){
    let result = {
      type: textEditConstants.CLEAR_MSG_INPUT
    }
    return result;
  }
}