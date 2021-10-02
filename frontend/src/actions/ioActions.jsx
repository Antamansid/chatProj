import * as ioConstants from "../constants/ioConstants.jsx";
import axios from "axios";

export default class ioActions{
  static connectToChat(){
    //let backData = axios.post('http://localhost/', nickName)
    let result = {
      type: ioConstants.CONNECT_TO_CHAT
    }
    return result;
  }
}