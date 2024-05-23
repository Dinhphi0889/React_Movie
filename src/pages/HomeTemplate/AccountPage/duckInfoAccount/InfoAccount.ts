import { Action, AppStateDetail } from "../../../../store/type";
import * as ActionType from "./contanst";
import { Account } from "./type";

const initialState: AppStateDetail<Account> = {
  loading: false,
  data: null,
  error: null,
};

const InfoAccountReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ACCOUNT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.ACCOUNT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.ACCOUNT_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default InfoAccountReducer;
