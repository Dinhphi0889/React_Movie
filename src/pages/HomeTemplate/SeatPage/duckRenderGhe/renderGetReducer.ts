import { Action, AppState } from "../../../../store/type";
import * as ActionType from "./constant";
import { DanhSachGhe } from "./types";

const initialState: AppState<DanhSachGhe> = {
  loading: false,
  data: null,
  error: null,
};

const getGheReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.RENDER_GHE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.RENDER_GHE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.RENDER_GHE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = null;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getGheReducer;
