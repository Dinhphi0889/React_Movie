import api from "../../../../api/api";
import { Action } from "../../../../store/type";
import * as ActionType from "./constant";

export const actFetchShowTimeMovie = (id: string) => {
  return (dispatch: any) => {
    dispatch(actShowTimeMovieRquest());
    //call api
    api
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => dispatch(actShowTimeMovieSuccess(result.data.content)))
      .catch((error) => dispatch(actShowTimeMoviefailed(error)));
  };
};
const actShowTimeMovieRquest = (): Action => {
  return {
    type: ActionType.MOVIE_SHOW_TIME_REQUEST,
  };
};
const actShowTimeMovieSuccess = (data: any): Action => {
  return {
    type: ActionType.MOVIE_SHOW_TIME_SUCCESS,
    payload: data,
  };
};
const actShowTimeMoviefailed = (error: any): Action => {
  return {
    type: ActionType.MOVIE_SHOW_TIME_FAILED,
    payload: error,
  };
};
