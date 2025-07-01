import React, { useState, useContext, useEffect } from "react";
import classes from "./login.module.scss";
import arrow from "../img/arrow.svg";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../../contexts/authContext";
import { useTranslation } from "react-i18next";

export function Login({ closeModal }) {
  const [activeModal] = useState("login");
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, setError } = useContext(authContext);

  function loginUser() {
    if (!email.trim() || !password.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      email: email,
      password: password,
    };

    handleLogin(newObj, email, closeModal);
    console.log(newObj);

    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    setError(false);
  }, []);

  const handleLoginClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
    console.log("Closing modal");
  };

  const openReg = () => {
    navigate("/register");
    closeModal();
  };

  const openForg = () => {
    navigate("/forgot_password");
    closeModal();
  };

  return (
    <>
      {activeModal === "login" && (
        <div className={classes.login} onClick={handleOutsideClick}>
          <div className={classes.login__inner} onClick={handleLoginClick}>
            <img src={arrow} alt="back" onClick={() => closeModal()} />
            <form onSubmit={(e) => e.preventDefault()}>
              <div>{t("login.login")}</div>
              <label>{t("login.email")}</label>
              <input
                type="text"
                placeholder={t("login.ph_email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <label>{t("login.password")}</label>
              <input
                type="password"
                placeholder={t("login.ph_password")}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={loginUser}>{t("login.signin")}</button>
              <div className={classes.login__signup} onClick={openReg} role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') openReg(); }}>
                <span className={classes.sign}>{t("login.signup")}</span>
              </div>
              <div className={classes.login__fpassword} onClick={openForg} role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') openForg(); }}>
                <span>{t("login.forgot_pw")}</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
