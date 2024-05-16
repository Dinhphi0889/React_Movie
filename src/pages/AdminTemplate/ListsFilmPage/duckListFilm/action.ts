import { Action } from '../../../../store/type'
import * as ActionType from './constants'

const actEditMovieAdmin = (data: any): Action => {
    return {
        type: ActionType.EDIT_MOVIE_ADMIN,
        payload: data
    }
}
export const EditMovieAdmin = (data: any) => {
    return (dispatch: any) => {
        dispatch(actEditMovieAdmin(data))
    }
}