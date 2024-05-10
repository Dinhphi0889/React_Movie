import * as ActionType from "./constant";
import axios from "axios";
import { Movie } from "./types";
import { Action } from "../../../../store/type";

export const actFetchData = () => {
  return (dispatch: any) => {
    dispatch(actListMovieRequest());

    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM",
      },
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actListMovieFailed(error));
      });
  };
};
const actListMovieRequest = (): Action => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};
const actListMovieSuccess = (data: Movie[]): Action => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};
const actListMovieFailed = (error: any): Action => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
