import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
// import classes from "./login.module.scss";
// import arrow from "../Navbar/modals/img/arrow.svg";
// import { Register } from "./modals/register/Register";
// import { Success } from "./modals/success/Success";
import { useNavigate } from "react-router-dom";
// import { authContext } from "../../contexts/authContext";
// import Loader from "../Loader/Loader";
import { Login } from "./modals/login/Login";

const Navabr = ({closeModal}) => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

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
          <p className="logo_p">Ala-Too Academic Journal</p>
        </div>

        <div className="header_links">
          <a href="/rules1" className="header_links__item">
            Rules
          </a>
          <a href="/archive" className="header_links__item">
            Archive
          </a>
          <a href="/" className="header_links__item">
            Articles
          </a>
          <a href="/" className="header_links__item">
            Contacts
          </a>

          <a
            onClick={() => navigate("/profile")}
            className="header_links__item">
            Профиль
          </a>
        </div>

        <div
          className="login_btn"
          onClick={
            openLoginModal
          }>
          <div>Войти</div>
          {/* {isAuth ? <button>Выход</button> : <button>Войти</button>} */}
        </div>
      </div>
      {isLoginModalOpen && <Login closeModal={() => setLoginModalOpen(false)} />}
    </div>
  );
};

export default Navabr;
