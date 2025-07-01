import React, { useState, useContext, useEffect } from "react";
import classes from "./register.module.scss";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { useTranslation } from "react-i18next";

export function Register() {
  const { handleRegister, error, setError } = useContext(authContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    setError(false);
  }, []);

  const createUser = async () => {
  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !password.trim() ||
    !passwordConfirm.trim()
  ) {
    alert("Некоторые поля пустые!");
    return;
  }

  if (password !== passwordConfirm) {
    alert("Пароли не совпадают!");
    return;
  }

  const newObj = {
    firstName,
    lastName,
    email,
    password,
  };

  try {
    setIsLoading(true);
    const success = await handleRegister(newObj);
    if (success) {
      navigate("/confirm", { state: { email } }); // переходим только при успехе
    } else {
      alert("Ошибка регистрации. Проверьте введённые данные.");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className={classes.register}>
      <div className={classes.register__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/")} />
        <form onSubmit={(e) => e.preventDefault()}>
          <div>{t("register.registration")}</div>

          <label>{t("register.first_name")}</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t("register.ph_first_name")}
          />

          <label>{t("register.last_name")}</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t("register.ph_last_name")}
          />

          <label>{t("register.email")}</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("register.ph_email")}
          />

          <label>{t("register.password")}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("register.ph_password")}
          />

          <label>{t("register.confirm_pw")}</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder={t("register.ph_confirm_pw")}
          />

          <button onClick={createUser} disabled={isLoading}>
            {isLoading ? <Loader /> : t("register.signup")}
          </button>
        </form>
      </div>
    </div>
  );
}
