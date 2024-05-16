import * as ActionType from './constants'
import { Action, AppState } from '../../../store/type'
import { TypeListMovieAdmin } from './type'


const initialState: AppState<TypeListMovieAdmin> = {
    loading: false,
    data: null,
    error: null,
}
const listMovieAdminReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LIST_MOVIE_ADMIN_REQUEST:
            state.loading = true
            state.data = null;
            state.error = null
            return { ...state }
        case ActionType.LIST_MOVIE_ADMIN_SUCCESS:
            state.loading = false
            state.data = action.payload;
            state.error = null
            return { ...state }
        case ActionType.LIST_MOVIE_ADMIN_FAILED:
            state.loading = false
            state.data = null;
            state.error = action.payload
            return { ...state }

        default:
            return { ...state }

    }
}
export default listMovieAdminReducer