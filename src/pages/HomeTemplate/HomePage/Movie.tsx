import { Movie } from "./duck/types";
import "./style.css";

type Props = {
  movie: Movie;
};

export default function MovieComponent(props: Props) {
  const { movie } = props;
  return (
    <div className="col-3 mt-3">
      <div className="card text-white bg-dark ">
        <div className="card-before">
          <img
            src={movie.hinhAnh}
            className="card-img-top"
            alt={movie.biDanh}
          />
          <a className=" play-button card__play">
            <i className="fa-regular fa-circle-play" />
          </a>
        </div>

        <div className="card-body">
          <h5 className="card-title">{movie.tenPhim}</h5>
          <p className="card-text mb-0">
            <small>Điểm: {movie.danhGia}/10</small>
          </p>
          <p className="card-text">
            <small>
              Trình trạng:{" "}
              {movie.dangChieu == true ? "Đang chiếu" : "Sắp chiếu"}
            </small>
          </p>
          <div className="d-flex justify-content-center">
            <a href="detail-movie"
              style={{ fontWeight: "bold" }}
              className="btn btn-outline-warning my-2 my-sm-0 mr-4 px-3"
              type="button"
            >
              Chi tiết
            </a>
            <a href="ticket-movie"
              style={{
                backgroundColor: "orange",
                fontWeight: "bold",
              }}
              className="btn-booking btn btn-warning my-2 my-sm-0 px-3"
              type="button"
            >
              Đặt vé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
