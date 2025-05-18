import React, { useState, useContext, useEffect } from "react";
import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";
import { useTranslation } from "react-i18next";

export function ForgotPassword({ closeModal }) {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const { forgotPassword, setError } = useContext(authContext);

  function handleData() {
    if (!email.trim()) {
      alert("Поле не заполнено!");
      return;
    }

    let obj = {
      email: email,
    };

    forgotPassword(obj);

    console.log(email);

    setEmail("");

    navigate("/change_password");
  }

  useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();

  return (
    <div className={classes.forgot}>
      <div className={classes.forgot__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/")} />
        <form action="">
          <div>{t("forgot_password.reset_pw")}</div>
          <div className={classes.text}>
            <p>{t("forgot_password.text")}</p>
          </div>
          <label>{t("forgot_password.email")}</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("forgot_password.ph_email")}
            // value={email}
            // onChange={e => setEmail(e.target.value)}
            name="email"
          />
          <button onClick={handleData}>{t("forgot_password.reset_btn")}</button>
        </form>
      </div>
    </div>
  );
}
