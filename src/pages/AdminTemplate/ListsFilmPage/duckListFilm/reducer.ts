import * as ActionType from './constants'
import { Action } from '../../../../store/type'
import {DataEdit} from './../duckListFilm/typeEdit'
import { TypeListMovieAdmin } from '../../duck/type'

const initialState: DataEdit<TypeListMovieAdmin> = {
    data: null,
}
const modalEditMovie = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.EDIT_MOVIE_ADMIN:
            state.data = action.payload;
            return { ...state }
        default:
            return { ...state }

    }
}
export default modalEditMovie