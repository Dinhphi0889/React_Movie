import * as ActionType from './constants'
import { Action, AppState, AppStateBanner } from '../../../../../store/type'
import { Banner } from './type'

const initialState: AppStateBanner<Banner> = {
    loading: false,
    banner: null,
    error: null
}
const BannerReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_CAROUSEL_REQUEST:
            state.loading = true;
            state.banner = null;
            state.error = null;
            return { ...state }


        case ActionType.GET_CAROUSEL_SUCCESS:
            state.loading = false;
            state.banner = action.payload;
            state.error = null;
            return { ...state }


        case ActionType.GET_CAROUSEL_FAILED:
            state.loading = false
            state.banner = null
            state.error = action.payload
            return { ...state }

        default:
            return { ...state }
    }
}
export default BannerReducer