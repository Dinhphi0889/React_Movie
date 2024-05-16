import { Action, AppStateDetail } from "../../../../store/type";
import { Movie } from "../../HomePage/duck/types";
import * as ActionType from "./constant";

const initialState: AppStateDetail<Movie> = {
  loading: false,
  data: null,
  error: null,
};

const detailMovieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MOVIE_DETAIL_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.MOVIE_DETAIL_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.MOVIE_DETAIL_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default detailMovieReducer;
