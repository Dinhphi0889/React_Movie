import { useEffect, useState } from "react";
import LoginPage from "../../../AuthenPage/LoginPage/LoginPage";
import RegisterPage from "../../../AuthenPage/RegisterPage/RegisterPage";
import "../style.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchBanner } from "../carousel/duckGetCarousel/action";
import Carousel from "../carousel/Carousel";
import { logOut } from "./logOut";

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

  const handleLogOut = () => {

    localStorage.removeItem('user')
    setIsLogin(false)
    dispatch(logOut)
  }


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

          </ul>
          <form onSubmit={hanleSubmit} className="form-inline my-2 my-lg-0">
            {isLogin ? (
              <div className="dropdown">
                <button
                  className="btn btn-success"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    fontSize: "28px",
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: '50%'
                  }}
                >
                  <i className="fa-solid fa-user"
                    style={{
                      textAlign: 'center',
                      marginRight: '0'
                    }}
                  ></i>
                </button>
                <div className="dropdown-menu">
                  <a href="account" className="dropdown-item">Cài Đặt Tài Khoản</a>
                  <button className="dropdown-item"
                    onClick={handleLogOut}
                  >Đăng Xuất</button>
                </div>

              </div>
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
