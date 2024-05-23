import axios from "axios";
import { Action } from "../../../../../store/type";
import * as ActionType from './constant'
import api from "../../../../../api/api";

export const actFetchListCumRap = (data: any) => {

  return (dispatch: any) => {
    dispatch(actGetCumRapRequest());
    api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${data}`)
      .then((result) => {
        dispatch(actGetCumRapSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actGetCumRapFailed(error));
      });
  };
};
const actGetCumRapRequest = (): Action => {
  return {
    type: ActionType.CUM_RAP_REQUEST,
  };
};
const actGetCumRapSuccess = (data: any): Action => {
  return {
    type: ActionType.CUM_RAP_SUCCESS,
    payload: data,
  };
};
const actGetCumRapFailed = (error: any): Action => {
  return {
    type: ActionType.CUM_RAP_FAILED,
    payload: error,
  };
};
