import * as ActionType from './constants'
import { AppStateDetail, Action, AppState } from '../../../../store/type'
import { CurrentUser } from '../../../AuthenPage/LoginPage/duck/type'
import { deflate } from 'zlib'

const initialState: AppState<CurrentUser> = {
    loading: false,
    data: null,
    error: null
}


const ListUserAdmin = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LISTUSER_REQUEST:

            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }


        case ActionType.LISTUSER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case ActionType.LISTUSER_FAILED:
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }

        default:
            return { ...state }

    }
}
export default ListUserAdmin