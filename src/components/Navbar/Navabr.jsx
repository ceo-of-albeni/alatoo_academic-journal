import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navabr = () => {
  const navigate = useNavigate();
  return (
    <div className="header_navbar">
      <div className="container_header">
        <div className="header_logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png"
              alt=""
            />
          </a>
        </div>

        <div className="header_links">
          <a href="/" className="header_links__item">
            Publishes
          </a>
          <a href="/" className="header_links__item">
            Articles
          </a>
          <a href="/" className="header_links__item">
            About Us
          </a>
          <a
            onClick={() => navigate("/profile")}
            className="header_links__item">
            Profile
          </a>
        </div>

        <div className="login_btn">
          <div>Войти</div>
          {/* {isAuth ? <button>Выход</button> : <button>Войти</button>} */}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
