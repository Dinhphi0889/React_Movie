import { combineReducers } from "redux";
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/listMovieReducer";

const rootReducer = combineReducers({ listMovieReducer });

export default rootReducer;
