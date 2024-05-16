import { Action } from "../../../../../store/type";
import * as ActionType from './constants'
import api from "../../../../../api/api";

export const actFetchBanner = () => {

    return (dispatch: any) => {
        
        dispatch(actBannerRequest())
        api.get('QuanLyPhim/LayDanhSachBanner')
            .then((result) => {
                dispatch(actBannerSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actBannerFailed(error))
            })
    }

}



const actBannerRequest = (): Action => {
    return {
        type: ActionType.GET_CAROUSEL_REQUEST
    }
}
const actBannerSuccess = (data: any): Action => {
    return {
        type: ActionType.GET_CAROUSEL_SUCCESS,
        payload: data
    }
}
const actBannerFailed = (data: any): Action => {
    return {
        type: ActionType.GET_CAROUSEL_SUCCESS,
        payload: data
    }
}