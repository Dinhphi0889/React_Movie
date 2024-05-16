import * as ActionType from "./constant";
import { Action } from "../../../../../store/type";
import { AppState } from "../../../../../store/type";
import { Content, HeThongRapChieu } from "./types";

const initialState: AppState<Content> = {
  loading: false,
  data: null,
  error: null,
};

const getListCumRapReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CUM_RAP_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.CUM_RAP_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.CUM_RAP_FAILED:
      state.loading = false;
      state.data = null;
      state.error = null;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getListCumRapReducer;
