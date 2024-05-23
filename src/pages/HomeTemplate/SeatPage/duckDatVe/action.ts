import * as ActionType from './constant'
import api from '../../../../api/api'
import { Action } from '../../../../store/type'
import { DatVe } from './type'

export const actDatVe = (data: DatVe) => {
    return (dispatch: any) => {
        dispatch(actDatVeRequest())
        api.post('QuanLyDatVe/DatVe', data)
            .then((response) => {
                console.log(response)
                dispatch(actDatVeSuccess(response))
            })
            .catch((error) => {
                dispatch(actDatVeFailed(error))
            })

    }
}

const actDatVeRequest = (): Action => {
    return {
        type: ActionType.DAT_VE_REQUEST
    }
}
const actDatVeSuccess = (data: any): Action => {
    return {
        type: ActionType.DAT_VE_SUCCESS,
        payload: data
    }
}
const actDatVeFailed = (error: any): Action => {
    return {
        type: ActionType.DAT_VE_FAILED,
        payload: error
    }
}