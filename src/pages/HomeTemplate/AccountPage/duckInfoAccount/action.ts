import api from "../../../../api/api";
import { Action } from "../../../../store/type";
import * as ActionType from "./contanst";

export const actInfoAccount = (taiKhoan: string) => {
  return (dispatch: any) => {
    dispatch(actAccountRequest());
    //call api
    api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`)
      .then((result) => {
        dispatch(actAccountSuccess(result.data.content))

      })
      .catch((error) =>{
        dispatch(actAccountFailed(error))
      });
  };
};
const actAccountRequest = (): Action => {
  return { type: ActionType.ACCOUNT_REQUEST };
};
const actAccountSuccess = (data: any): Action => {
  return {
    type: ActionType.ACCOUNT_SUCCESS,
    payload: data,
  };
};
const actAccountFailed = (error: any): Action => {
  return {
    type: ActionType.ACCOUNT_FAILED,
    payload: error,
  };
};
