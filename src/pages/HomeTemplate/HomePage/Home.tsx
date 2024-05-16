import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "./duck/action";
import { RootState } from "../../../store";
import MovieComponent from "./Movie";

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
    <div className="container">
      <h3 className="my-5">NEW ITEMS</h3>
      <div className="row my-3">{renderListMovie()}</div>
    </div>
  );
}
