import axios from "axios";

import * as ActionType from './constant'
import api from "../../../../api/api";
import { Action } from "../../../../store/type";


export const actFetchGhe = (data: any) => {

  return (dispatch: any) => {
    dispatch(actRenderGheRequest());
    api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${data}`)
      .then((result) => {
        dispatch(actRenderGheSuccess(result.data.content.danhSachGhe));
      })
      .catch((error) => {
        dispatch(actRenderGheFailed(error));
      });
  };
};
const actRenderGheRequest = (): Action => {
  return {
    type: ActionType.RENDER_GHE_REQUEST,
  };
};
const actRenderGheSuccess = (data: any): Action => {
  return {
    type: ActionType.RENDER_GHE_SUCCESS,
    payload: data,
  };
};
const actRenderGheFailed = (error: any): Action => {
  return {
    type: ActionType.RENDER_GHE_FAILED,
    payload: error,
  };
};
