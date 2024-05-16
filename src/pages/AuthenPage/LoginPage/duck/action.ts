import { Action } from "../../../../store/type";
import * as ActionType from './constants'
import api from "../../../../api/api";

export const actFetchLogin = (user: { taiKhoan: string, matKhau: string }) => {
    return (dispatch: any) => {
        dispatch(actLoginRequest())
        api.post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.data.content))
                alert('Đăng nhập thành công')
                dispatch(actLoginSuccess(result.data.content))
            })
            .catch((error) => {
                alert('Sai Tài Khoản Hoặc Mật Khẩu')
                dispatch(actLoginFailed(error))
            })
    }
}

const actLoginRequest = (): Action => {
    return {
        type: ActionType.LOGIN_REQUEST
    }
}
const actLoginSuccess = (data: any): Action => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data
    }
}

const actLoginFailed = (data: any): Action => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload: data
    }
}