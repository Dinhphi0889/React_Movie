import api from "../../../../api/api";
import { Action } from "../../../../store/type";
import * as ActionType from "./contanst";

export const actChangeInfo = (data: any) => {
  return (dispatch: any) => {
    dispatch(actChangeInfoRequest());
    //call api
    api.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
      .then((result) => {
        console.log(result)
        dispatch(actChangeInfoSuccess(result.data.content))

      })
      .catch((error) => {
        dispatch(actChangeInfoFailed(error))
      });
  };
};
const actChangeInfoRequest = (): Action => {
  return { type: ActionType.CHANGE_INFO_REQUEST };
};
const actChangeInfoSuccess = (data: any): Action => {
  return {
    type: ActionType.CHANGE_INFO_SUCCESS,
    payload: data,
  };
};
const actChangeInfoFailed = (error: any): Action => {
  return {
    type: ActionType.CHANGE_INFO_FAILED,
    payload: error,
  };
};
