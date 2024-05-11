import "../style.css";

export default function FooterHomePage() {
  return (
    <footer className="footer-brand" style={{ backgroundColor: "black" }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "black" }}
        >
          <a className="navbar-brand" href="#">
            Cyber<span className="nav-brand-cyber">Cinema</span>
          </a>
          <span className="footer-copyright">
            © CyberCinema, 2023 — 2024 <br /> Create by{" "}
            <a style={{ color: "orange" }} href="#" target="_blank">
              CyberSoft-BC62
            </a>
          </span>
        </nav>
      </div>
    </footer>
  );
}
