import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { actFetchMovieDetail } from "./duck/action";
import "./style.css";
import dayjs from "dayjs";
import ShowTimeMovie from "./showTimeMovie";

export default function DetailMovie() {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.detailMovieReducer
  );
  console.log(data);

  useEffect(() => {
    if (id) {
      dispatch(actFetchMovieDetail(id));
    }
  }, []);

  const date = new Date(data?.ngayKhoiChieu || "");

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container moive__detail my-5">
      <div className="row justify-content-between">
        <div className="col-4">
          <img
            src={data?.hinhAnh}
            className="w-100 rounded"
            height={400}
            alt={data?.biDanh}
            style={{ objectFit: "cover" }}
          />
          <div className="d-flex">
            <button
              style={{ fontWeight: "bold" }}
              className="btn btn-outline-warning mt-3 mr-2 w-100"
            >
              Xem trailer
            </button>
            <button
              style={{
                backgroundColor: "orange",
                fontWeight: "bold",
              }}
              className="btn-booking btn mt-3 ml-2 w-100"
            >
              Đặt vé
            </button>
          </div>
        </div>
        <div className="col-8">
          <div>
            <h4 className="font-weith-bold">Tên phim: {data?.tenPhim}</h4>
            <p>
              {" "}
              <strong> Mô tả: </strong> {data?.moTa}
            </p>
            <p>
              {" "}
              <strong>Đánh giá:</strong> {data?.danhGia}/10 điểm
            </p>
            <p>
              <strong>Ngày khởi chiếu:</strong>{" "}
              {dayjs(date).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1>Lịch chiếu</h1>
        <hr />
        <ShowTimeMovie />
      </div>
    </div>
  );
}
