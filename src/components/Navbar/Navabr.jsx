import React, { useState } from "react";
import "./Navbar.scss";
import { Login } from "./modals/Login";
import { useNavigate } from "react-router-dom";

const Navabr = () => {
  const [openLogin, setOpenLogin] = useState(false);
  
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
            Исследования
          </a>
          <a href="/" className="header_links__item">
            Статьи
          </a>
          <a href="/" className="header_links__item">
            О нас
          </a>
          <a
            onClick={() => navigate("/profile")}
            className="header_links__item">
            Профиль
          </a>
        </div>

        <div className="login_btn"
          onClick={() => {
            setOpenLogin(true);
          }}>
          <div>Войти</div>
          {/* {isAuth ? <button>Выход</button> : <button>Войти</button>} */}
        </div>
      </div>
      {openLogin && <Login closeModal={setOpenLogin} />}
    </div>
  );
};

export default Navabr;