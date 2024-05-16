import { Action } from "../../../../store/type";
import * as ActionType from './constants'
import api from "../../../../api/api";

export const actFetchListUser = () => {
    return (dispatch: any) => {
        dispatch(actFetchListUserRequest())
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then((result) => {
                dispatch(actFetchListUserSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actFetchListUserFailed(error))
            })
    }

}

const actFetchListUserRequest = (): Action => {
    return {
        type: ActionType.LISTUSER_REQUEST,
    }
}
const actFetchListUserSuccess = (data: any): Action => {
    return {
        type: ActionType.LISTUSER_SUCCESS,
        payload: data
    }
}
const actFetchListUserFailed = (data: any): Action => {
    return {
        type: ActionType.LISTUSER_FAILED,
        payload: data,
    }
}
