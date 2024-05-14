import { Action } from "../../../../store/type";
import * as ActionType from './constants'
import api from "../../../../api/api";

export const actFetchRegister = (user: { taiKhoan: string, matKhau: string }) => {
    return (dispatch: any) => {
        dispatch(actRegisterRequest())
        api.post(`QuanLyNguoiDung/DangKy`, user)
            .then((result) => {
                alert('Đăng kí thành công')
                dispatch(actRegisterSuccess(result.data.content))
            })
            .catch((error) => {
                console.log(error.response.data.content)
                alert(error.response.data.content)
                dispatch(actRegisterFailed(error))
            })
    }
}

const actRegisterRequest = (): Action => {
    return {
        type: ActionType.REGISTER_REQUEST
    }
}
const actRegisterSuccess = (data: any): Action => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payload: data
    }
}

const actRegisterFailed = (data: any): Action => {
    return {
        type: ActionType.REGISTER_FAILED,
        payload: data
    }
}