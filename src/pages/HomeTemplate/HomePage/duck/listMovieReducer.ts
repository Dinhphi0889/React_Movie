import * as ActionType from "./constant";
import { Action } from "../../../../store/type";
import { Appstate } from "../../../../store/type";
import { Movie } from "./types";

const initialState: Appstate<Movie> = {
  loading: false,
  data: null,
  error: null,
};

const listMovieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = null;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listMovieReducer;
