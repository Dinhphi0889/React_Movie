import { combineReducers } from 'redux'
import listMovieAdminReducer from '../pages/AdminTemplate/duck/reducer'
import modalEditMovie from '../pages/AdminTemplate/ListsFilmPage/duckListFilm/reducer'
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";

const rootReducer = combineReducers({ listMovieAdminReducer, modalEditMovie, listMovieReducer })


export default rootReducer;
