import api from "../../../../api/api";
import { Action } from "../../../../store/type";
import * as ActionType from "./constant";

export const actFetchMovieDetail = (id: string) => {
  return (dispatch: any) => {
    dispatch(actDetailMovieRequest());
    //call api
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => dispatch(actDetailMovieSuccess(result.data.content)))
      .catch((error) => dispatch(actDetailMovieFailed(error)));
  };
};
const actDetailMovieRequest = (): Action => {
  return { type: ActionType.MOVIE_DETAIL_REQUEST };
};
const actDetailMovieSuccess = (data: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};
const actDetailMovieFailed = (error: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_FAILED,
    payload: error,
  };
};
