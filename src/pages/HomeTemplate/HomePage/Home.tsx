import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "./duck/action";
import { RootState } from "../../../store";
import MovieComponent from "./Movie";
import './../_component/style.css'
import { actFetchBanner } from "../_component/carousel/duckGetCarousel/action";

export default function Home() {
  const dispatch: any = useDispatch();
  const { data, loading } = useSelector(
    (state: RootState) => state.listMovieReducer
  );

  useEffect(() => {
    dispatch(actFetchData());
  }, []);


  const renderListMovie = () => {
    if (loading)
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );

    if (data && data.length > 0) {
      return data.map((movie) => (
        <MovieComponent key={movie.biDanh} movie={movie} />
      ));
    }
  };

  return (
    <div className="container bodyHomePage">
      <h1 className="mt-4 mb-4 d-flex justify-content-center">DANH SÁCH PHIM</h1>
      <div className="row ">{renderListMovie()}</div>
    </div>
  );
}
