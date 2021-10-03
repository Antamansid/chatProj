import * as textEditConstants from "../constants/textEditConstants.jsx";

export default class textEditActions{
  static editNickName(nickName){
    let result = {
      type: textEditConstants.NICKNAME_EDIT,
      payload: nickName
    }
    return result;
  }
}