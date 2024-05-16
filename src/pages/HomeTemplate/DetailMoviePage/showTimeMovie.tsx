import { useParams } from "react-router-dom";
import { actFetchShowTimeMovie } from "./duckShowTime/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";
import dayjs from "dayjs";
import "./style.css";

export default function ShowTimeMovie() {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.showtimeReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(actFetchShowTimeMovie(id));
    }
  }, []);
  const cinemaSystem = data?.heThongRapChieu || [];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {cinemaSystem.map((item, index) => {
              return (
                <button
                  key={`cinemaSystem-${index}`}
                  className="nav-link d-flex align-items-center"
                  id={`v-pills-${item.maHeThongRap}-tab`}
                  data-toggle="pill"
                  data-target={`#v-pills-${item.maHeThongRap}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-${item.maHeThongRap}`}
                  aria-selected="true"
                  style={{ textAlign: "left" }}
                >
                  <img
                    className="mr-1"
                    src={item.logo}
                    style={{ width: 30, height: 30 }}
                  />
                  <span>{item.maHeThongRap}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {cinemaSystem.map((item, index) => {
              return (
                <div
                  key={`cinemaSystem-1-${index}`}
                  className="tab-pane fade show"
                  id={`v-pills-${item.maHeThongRap}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${item.maHeThongRap}-tab`}
                >
                  {item.cumRapChieu.map((place, index) => (
                    <div>
                      <div
                        key={`cumRapChieu-${index}`}
                        style={{ fontWeight: "bold" }}
                      >
                        {place.tenCumRap}
                      </div>
                      <div className="row">
                        {place.lichChieuPhim.map((date, index) => {
                          if (!date.ngayChieuGioChieu) {
                            return (
                              <div
                                key={`lichChieuPhim-${index}`}
                                className="col-12"
                              >
                                Không có suất chiếu nào
                              </div>
                            );
                          }

                          return (
                            <div className="col-2">
                              <button className="btn btn-dark my-1">
                                {dayjs(date.ngayChieuGioChieu).format(
                                  `DD/MM 
                                   hh:mm`
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  {item.tenHeThongRap}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
