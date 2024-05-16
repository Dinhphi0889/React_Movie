import { combineReducers } from "redux";
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/detailMovieReducer";
import { showtimeReducer } from "../pages/HomeTemplate/DetailMoviePage/duckShowTime/showTimeReducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  showtimeReducer,
});

export default rootReducer;
