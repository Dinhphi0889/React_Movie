import "../style.css";

export default function HeaderHomePage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "black" }}
        >
          <a className="navbar-brand" href="#">
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
                <a className="nav-link" href="#">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Đặt vé
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                style={{ backgroundColor: "orange", fontWeight: "bold" }}
                className="btn btn-warning my-2 my-sm-0"
                type="submit"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
