import React, { useState, useContext, useEffect } from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
import { useTranslation } from "react-i18next";
import { authContext } from "../../../../contexts/authContext";

export function ConfirmReg({ closeModal }) {
  const { t } = useTranslation();
  const [openSuccess, setOpenSuccess] = useState(null);
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("timerSeconds")) || 59
  );
  const [timerRunning, setTimerRunning] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const { handleConfirm, setError, sendCodeAgain } = useContext(authContext);

  async function handleSendAgain() {
    if (!email.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    try {
      await sendCodeAgain({ email });
      setTimerRunning(true);
      setSeconds(59);
    } catch (error) {
      console.error("Ошибка при повторной отправке кода:", error);
      alert("Не удалось отправить код, попробуйте позже.");
    }
  }

  async function handleSigninClick(e) {
    e.preventDefault();

    if (!email.trim() || !code.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

  const success = await handleConfirm({ email, code });

  if (success) {
      setOpenSuccess("success");
      setTimeout(() => navigate("/"), 2000);
  } else {
      alert("Неверный код подтверждения");
  }
  }

  useEffect(() => {
    setError(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerRunning && seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        setTimerRunning(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, timerRunning]);

  useEffect(() => {
    localStorage.setItem("timerSeconds", seconds);
  }, [seconds]);

  const closeM = () => setOpenSuccess(null);

  return (
    <div className={classes.confirm}>
      <div className={classes.confirm__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/register")} />
        <form>
          <div>{t("confirm_reg.button")}</div>

          <label>{t("confirm_reg.email")}</label>
          <input
            type="text"
            placeholder={t("confirm_reg.ph_email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <label>
            {t("confirm_reg.code")}{" "}
            <span id="counter">0:{seconds < 10 ? `0${seconds}` : seconds}</span>
          </label>
          <input
            type="text"
            placeholder={t("confirm_reg.ph_code")}
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {timerRunning ? (
            <button onClick={handleSigninClick}>
              {t("confirm_reg.signin")}
            </button>
          ) : (
            <div className={classes.resend_submit}>
              <button onClick={handleSigninClick}>
                {t("confirm_reg.signin")}
              </button>
              <p onClick={handleSendAgain}>{t("confirm_reg.resend")}</p>
            </div>
          )}
        </form>
      </div>

      {openSuccess === "success" && <Success closeModal={closeM} />}
    </div>
  );
}
