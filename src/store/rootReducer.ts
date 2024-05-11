import { combineReducers } from 'redux'
import listMovieAdminReducer from '../pages/AdminTemplate/duck/reducer'
import modalEditMovie from '../pages/AdminTemplate/ListsFilmPage/duckListFilm/reducer'

const rootReducer = combineReducers({ listMovieAdminReducer,modalEditMovie })

export default rootReducer