import * as ActionType from './constants'
import { AppStateDetail, Action } from '../../../store/type'
import { CurrentUser } from './type'

const currentUser = localStorage.getItem('user')

const initialState: AppStateDetail<CurrentUser> = {
    loading: false,
    data: currentUser ? JSON.parse(currentUser) : null,
    error: false,
}

const LoginReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST: {

            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionType.LOGIN_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionType.LOGIN_FAILED: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        }

        default:
            return { ...state }
    }
}
export default LoginReducer