import { combineReducers } from 'redux'
import listMovieAdminReducer from '../pages/AdminTemplate/duck/reducer'
import modalEditMovie from '../pages/AdminTemplate/ListsFilmPage/duckListFilm/reducer'
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";
import LoginReducer from '../pages/AuthenPage/LoginPage/duck/reducer';
import ListUserAdmin from '../pages/AdminTemplate/listUserPage/duckListMovie/reducer';
import RegisterReducer from '../pages/AuthenPage/RegisterPage/duck/reducer';



const rootReducer = combineReducers({ listMovieAdminReducer, modalEditMovie, listMovieReducer, LoginReducer, ListUserAdmin, RegisterReducer })


export default rootReducer;
