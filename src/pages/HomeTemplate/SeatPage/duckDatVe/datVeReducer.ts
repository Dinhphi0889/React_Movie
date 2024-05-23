import { Action, AppState } from '../../../../store/type'
import * as ActionType from './constant'
import { DatVe } from './type'


const initialState: AppState<DatVe> = {
    loading: false,
    data: null,
    error: null
}

const DatVeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DAT_VE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.DAT_VE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.DAT_VE_FAILED:
            state.loading = false;
            state.data = null;
            state.error = null;
            return { ...state };
        default:
            return { ...state }
    }
}
export default DatVeReducer