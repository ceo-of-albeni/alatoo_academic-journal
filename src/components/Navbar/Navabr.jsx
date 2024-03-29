import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./modals/login/Login";

const Navabr = ({ closeModal }) => {
  const [activeModal, setActiveModal] = useState(null);
  const { handleLogout, getOneUser, oneUser } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    getOneUser();
  }, []);

  const openLoginModal = () => {
    if (activeModal === null) {
      setActiveModal("login");
    }
  };

  const closeModalHandler = () => {
    setActiveModal(null);
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

        <div className="header_inner">
          <div className="header_links">
            <a href="/rules1" className="header_links__item">
              Rules
            </a>
            {/* <a href="/profile/:id" className="header_links__item">
              Articles
            </a> */}
            <a href="/archive" className="header_links__item">
              Archive
            </a>
            {/* <a href="/admin" className="header_links__item">
              Admin
            </a> */}

            {localStorage.getItem("email") != null &&
            oneUser.role === "admin" ? (
              <a href="/admin" className="header_links__item">
                Admin
              </a>
            ) : (
              <span></span>
            )}

            {localStorage.getItem("email") === null ? (
              <span></span>
            ) : (
              <a
                key={oneUser.id}
                onClick={() => navigate(`/profile/${oneUser.id}`)}
                className="header_links__item">
                Profile
              </a>
            )}
          </div>

          {localStorage.getItem("email") === null ? (
            <div className="login_btn" onClick={openLoginModal}>
              <div>Sign in</div>
            </div>
          ) : (
            <div className="login_btn" onClick={handleLogout}>
              <div>Sign Out</div>
            </div>
          )}
        </div>
      </div>
      {activeModal === "login" && <Login closeModal={closeModalHandler} />}
    </div>
  );
};

export default Navabr;
