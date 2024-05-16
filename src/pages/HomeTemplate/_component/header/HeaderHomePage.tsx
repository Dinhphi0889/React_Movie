import { useEffect, useState } from "react";
import LoginPage from "../../../AuthenPage/LoginPage/LoginPage";
import RegisterPage from "../../../AuthenPage/RegisterPage/RegisterPage";
import "../style.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchBanner } from "../carousel/duckGetCarousel/action";
import Carousel from "../carousel/Carousel";

const hanleSubmit = (event: any) => {
  event.preventDefault();
};

export default function HeaderHomePage() {


  const dispatch: any = useDispatch()

  const { data } = useSelector((state: RootState) => state.LoginReducer)
  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    if (data) {
      setIsLogin(true);
    }
  }, [data]);

  return <div style={{ backgroundColor: "black" }}>
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <a className="navbar-brand" href="/">
          Cyber<span className="nav-brand-cyber">Cinema</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Trang Chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ticket-movie">
                Đặt vé
              </a>
            </li>
          </ul>
          <form onSubmit={hanleSubmit} className="form-inline my-2 my-lg-0">
            {isLogin ? (
              <button
                className="btn btn-success"
                style={{
                  fontSize: "28px",
                  color: "white",
                  padding: "5px 20px",
                }}
              >
                <i className="fa-solid fa-user"></i>
              </button>
            ) : (
              <div>
                <button
                  data-toggle="modal"
                  data-target="#loginModal"
                  style={{
                    backgroundColor: "orange",
                    fontWeight: "bold",
                  }}
                  className="btn btn-warning my-2 my-sm-0"
                >
                  Đăng nhập
                </button>
              </div>
            )}
          </form>
          <LoginPage />
          <RegisterPage />
        </div>
      </nav>
    </div>
  </div>
}
