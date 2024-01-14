import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
// import classes from "./login.module.scss";
// import arrow from "../Navbar/modals/img/arrow.svg";
// import { Register } from "./modals/register/Register";
// import { Success } from "./modals/success/Success";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./modals/login/Login";
import UserProfilePage from "../../pages/UserProfilePage/UserProfilePage";

const Navabr = ({ closeModal }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const { handleLogout, users, getUsers, currentUser } =
    useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

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
          <a href="/profile/:id" className="header_links__item">
            Articles
          </a>
          <a href="/admin" className="header_links__item">
            Admin
          </a>

          {localStorage.getItem("email") === null ? (
            <span></span>
          ) : (
            users.map(item =>
              localStorage.getItem("email") === item.email ? (
                <a
                  onClick={() => navigate(`/profile/${item.id}`)}
                  className="header_links__item">
                  Profile
                </a>
              ) : (
                <span></span>
              )
            )
          )}
        </div>

        {localStorage.getItem("email") === null ? (
          <div className="login_btn" onClick={openLoginModal}>
            <div>Войти</div>
          </div>
        ) : (
          <div className="login_btn" onClick={handleLogout}>
            <div>Выйти</div>
          </div>
        )}
      </div>
      {isLoginModalOpen && (
        <Login closeModal={() => setLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default Navabr;
