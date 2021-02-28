import "./../styles/Header.scss";
import "bulma/css/bulma.css";
import image from "./../assets/lp-badge-white.svg";
import { GithubOutlined } from "@ant-design/icons";

function Header() {
  return (
      <div className="hero-head">
        <nav className="navbar lp-navbar" role="navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="./">
                <img src={image} alt="Logo" className="lp-badge"></img>
              </a>

              <div
                className="navbar-burger"
                data-target="navbar-main"
                onClick={function () {
                  document
                    .querySelector(".navbar-menu")
                    .classList.toggle("is-active");
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="navbar-menu" id="navbar-main">
              <div className="navbar-end">
                <a href="./" className="navbar-item">
                  Tutorials
                </a>
                <a
                  href="https://layout-parser.readthedocs.io/en/latest/"
                  rel="noreferrer"
                  target="_blank"
                  className="navbar-item"
                >
                  Docs
                </a>
                <a href="./" className="navbar-item">
                  Discussion
                </a>
                <div className="navbar-item">
                  <a
                    href="https://github.com/Layout-Parser/layout-parser"
                    rel="noreferrer"
                    target="_blank"
                    className="icon bg-transparent button is-danger"
                  >
                    <GithubOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Header;
