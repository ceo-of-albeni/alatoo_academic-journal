import React, { useState, useContext, useEffect } from "react";
import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authContext } from "../../../../contexts/authContext";
import { useTranslation } from "react-i18next";

const apiUrl = process.env.REACT_APP_API_URL
const API = `${apiUrl}/api`;

export function ForgotPassword({ closeModal }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { setError } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); // 1 - ввод email, 2 - ввод кода
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Отправка email для восстановления пароля
  async function handleSendEmail(e) {
    e.preventDefault();
    setErrorMsg("");
    if (!email.trim()) {
      setErrorMsg(t("forgot_password.empty_email") || "Поле не заполнено!");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/auth/forgotPassword`, { email });
      setStep(2);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Ошибка при отправке email");
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // Подтверждение кода из email
async function handleConfirmCode(e) {
  e.preventDefault();
  setErrorMsg("");
  if (!code.trim()) {
    setErrorMsg(t("forgot_password.empty_code") || "Введите код из письма");
    return;
  }

  setLoading(true);
  try {
    const response = await axios.post(`${API}/auth/confirmCode`, { email, code });
    const accessToken = response.data.access_token; // проверь, как именно приходит токен
    if (accessToken) {
      localStorage.setItem("temp_access_token", accessToken.access_token);
    }
    alert(t("forgot_password.code_confirmed") || "Код подтвержден! Можно менять пароль.");
    navigate("/change_password");
  } catch (err) {
    console.error(err);
    setErrorMsg(err.response?.data?.message || "Ошибка при подтверждении кода");
    setError(err);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className={classes.forgot}>
      <div className={classes.forgot__inner}>
        <img src="/img/arrow.svg" alt="back" onClick={() => navigate("/")} />
        {step === 1 && (
          <form onSubmit={handleSendEmail}>
            <div>{t("forgot_password.reset_pw")}</div>
            <div className={classes.text}>
              <p>{t("forgot_password.text")}</p>
            </div>
            <label>{t("forgot_password.email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("forgot_password.ph_email")}
              name="email"
            />
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <button type="submit" disabled={loading}>
              {loading ? t("forgot_password.sending") || "Отправка..." : t("forgot_password.reset_btn")}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleConfirmCode}>
            <div>{t("forgot_password.enter_code") || "Введите код из письма"}</div>
            <label>{t("forgot_password.code_label") || "Код"}</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t("forgot_password.code_ph") || "Код из письма"}
              name="code"
            />
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <button type="submit" disabled={loading}>
              {loading ? t("forgot_password.verifying") || "Проверка..." : t("forgot_password.submit_code_btn") || "Подтвердить"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
