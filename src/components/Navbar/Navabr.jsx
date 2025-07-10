import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./modals/login/Login";
import { useTranslation } from "react-i18next";

const Navabr = ({ closeModal }) => {
  const [activeModal, setActiveModal] = useState(null);
  const { handleLogout, getOneUser, oneUser, checkLoginTime } = useContext(authContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Новое состояние для окна подтверждения выхода
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    checkLoginTime();
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

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  // Обработчик клика на кнопку выхода — показывает модалку подтверждения
  const onLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  // Подтверждение выхода
  const confirmLogout = () => {
    handleLogout();
    setShowLogoutConfirm(false);
  };

  // Отмена выхода — закрывает модалку
  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <div className="header_navbar">
        <div className="container_header">
          <div className="header_logo">
            <a href="/">
              <img
                src="/img/logo.png"
                alt="Logo"
              />
            </a>
            <p className="logo_p">Alatoo Academic Studies</p>
          </div>

          <div className="header_inner">
            <div>
              <select
                className="change_lang"
                onChange={handleChangeLanguage}
                value={i18n.language}
              >
                <option value="en">{t("En")}</option>
                <option value="ru">{t("Ru")}</option>
                <option value="ky">{t("Kg")}</option>
              </select>
            </div>

            <div className="header_links">
              <a href="/rules" className="header_links__item">
                {t("navbar.rules")}
              </a>
              <a href="/archive" className="header_links__item">
                {t("navbar.archive")}
              </a>
              <a href="/all_articles" className="header_links__item">
                {t("navbar.articles")}
              </a>

              {localStorage.getItem("email") != null && oneUser.role === "admin" ? (
                <a href="/admin" className="header_links__item">
                  {t("navbar.admin")}
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
                  className="header_links__item"
                >
                  {t("navbar.profile")}
                </a>
              )}
            </div>

            {localStorage.getItem("email") === null ? (
              <div className="login_btn" onClick={openLoginModal}>
                <div>{t("navbar.signin")}</div>
              </div>
            ) : (
              <div className="login_btn" onClick={onLogoutClick}>
                <div>{t("navbar.signout")}</div>
              </div>
            )}
          </div>
        </div>

        {activeModal === "login" && <Login closeModal={closeModalHandler} />}
      </div>

      {/* Модальное окно подтверждения выхода */}
      {showLogoutConfirm && (
        <div className="logout-confirm-overlay">
          <div className="logout-confirm-modal">
            <p>{t("navbar.logout_confirm_message") || "Вы уверены, что хотите выйти?"}</p>
            <button onClick={confirmLogout}>
              {t("navbar.logout_confirm_yes") || "Выйти"}
            </button>
            <button onClick={cancelLogout}>
              {t("navbar.logout_confirm_no") || "Остаться"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navabr;