import { Action } from "../../../store/type";
import * as ActionType from './constants'
import { TypeListMovieAdmin } from "./type";
import api from "../../../api/api";

export const actFetchListMovieAdmin = (() => {
    return (dispatch: any) => {
        dispatch(actListMovieAdminRequest())
        api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            .then((result) => {
                dispatch(actListMovieAdminSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListMovieAdminFailed(error))
            })

    }
})

const actListMovieAdminRequest = (): Action => {
    return {
        type: ActionType.LIST_MOVIE_ADMIN_REQUEST,
    }
}
const actListMovieAdminSuccess = (data: TypeListMovieAdmin[]): Action => {
    return {
        type: ActionType.LIST_MOVIE_ADMIN_SUCCESS,
        payload: data
    }
}
const actListMovieAdminFailed = (error: any): Action => {
    return {
        type: ActionType.LIST_MOVIE_ADMIN_FAILED,
        payload: error
    }
}



