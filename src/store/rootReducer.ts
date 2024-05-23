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
import getGheReducer from "../pages/HomeTemplate/SeatPage/duckRenderGhe/renderGetReducer";
import DatVeReducer from "../pages/HomeTemplate/SeatPage/duckDatVe/datVeReducer";
import InfoAccountReducer from "../pages/HomeTemplate/AccountPage/duckInfoAccount/InfoAccount";
import ChangeInfoAccountReducer from "../pages/HomeTemplate/AccountPage/duckChangeInfoAccount/InfoAccount";


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
  getGheReducer,
  DatVeReducer,
  InfoAccountReducer,
  ChangeInfoAccountReducer
});

export default rootReducer;
