import * as ioConstants from "../constants/ioConstants.jsx";
import axios from "axios";

export default class isActions{
  static connectToChat(nickName){
    let backData = axios.post('http://localhost/', nickName)
    let result = {
      type: ioConstants.CONNECT_TO_CHAT,
      payload: backData
    }
    return result;
  }
}