import * as ActionType from './constants'
import { AppStateDetail, Action } from '../../../../store/type'
import { CurrentUser } from './type'


const initialState: AppStateDetail<CurrentUser> = {
    loading: false,
    data: null,
    error: false,
}

const RegisterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REGISTER_REQUEST: {

            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionType.REGISTER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionType.REGISTER_FAILED: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        }

        default:
            return { ...state }
    }
}
export default RegisterReducer