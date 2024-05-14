import { combineReducers } from 'redux'
import listMovieAdminReducer from '../pages/AdminTemplate/duck/reducer'
import modalEditMovie from '../pages/AdminTemplate/ListsFilmPage/duckListFilm/reducer'
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";
import LoginReducer from '../pages/AuthenPage/duck/reducer';
import ListUserAdmin from '../pages/AdminTemplate/listUserPage/duckListMovie/reducer';



const rootReducer = combineReducers({ listMovieAdminReducer, modalEditMovie, listMovieReducer, LoginReducer,ListUserAdmin })


export default rootReducer;
