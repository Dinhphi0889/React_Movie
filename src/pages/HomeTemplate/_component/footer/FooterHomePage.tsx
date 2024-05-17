import "../style.css";

export default function FooterHomePage() {
  return (
    <footer className="footer-brand" style={{ backgroundColor: "black" }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              Cyber<span className="nav-brand-cyber">Cinema</span>
            </a>
            <span className="footer-copyright">
              © CyberCinema, 2023 — 2024 <br /> Create by{" "}
              <a style={{ color: "orange" }} href="#" target="_blank">
                CyberSoft-BC62
              </a>
            </span>
          </div>

          <div>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
