import { Action, AppStateDetail } from "../../../../store/type";
import { MovieDetail } from "./type";
import * as ActionType from "./constant";
const intialState: AppStateDetail<MovieDetail> = {
  loading: false,
  data: null,
  error: null,
};
export const showtimeReducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case ActionType.MOVIE_SHOW_TIME_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.MOVIE_SHOW_TIME_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.MOVIE_SHOW_TIME_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
