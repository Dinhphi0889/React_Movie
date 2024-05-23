import * as ActionType from "./constant";
import { Action, AppStateHeThongRap } from "../../../../../store/type";
import { AppState } from "../../../../../store/type";
import { Content } from "./types";

const initialState: AppStateHeThongRap<Content> = {
  loading: false,
  heThongRap: null,
  error: null,
};

const getListCumRapReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CUM_RAP_REQUEST:
      state.loading = true;
      state.heThongRap = null;
      state.error = null;
      return { ...state };
    case ActionType.CUM_RAP_SUCCESS:
      state.loading = false;
      state.heThongRap = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.CUM_RAP_FAILED:
      state.loading = false;
      state.heThongRap = null;
      state.error = null;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getListCumRapReducer;
