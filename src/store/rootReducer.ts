import { combineReducers } from "redux";
import listMovieAdminReducer from "../pages/AdminTemplate/duck/reducer";
import modalEditMovie from "../pages/AdminTemplate/ListsFilmPage/duckListFilm/reducer";
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";
import LoginReducer from '../pages/AuthenPage/LoginPage/duck/reducer';
import ListUserAdmin from '../pages/AdminTemplate/listUserPage/duckListMovie/reducer';
import RegisterReducer from '../pages/AuthenPage/RegisterPage/duck/reducer';
import BannerReducer from '../pages/HomeTemplate/_component/carousel/duckGetCarousel/reducer';
import getListCumRapReducer from '../pages/HomeTemplate/SeatPage/RenderCumRap/duckCumRap/getListCumRap';
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/detailMovieReducer";
import { showtimeReducer } from "../pages/HomeTemplate/DetailMoviePage/duckShowTime/showTimeReducer";


const rootReducer = combineReducers({
  listMovieAdminReducer,
  modalEditMovie,
  listMovieReducer,
  LoginReducer,
  ListUserAdmin,
  RegisterReducer,
  detailMovieReducer,
  showtimeReducer,
  getListCumRapReducer,
  BannerReducer,
});

export default rootReducer;
