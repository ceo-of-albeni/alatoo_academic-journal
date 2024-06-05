import React, { useState, useContext, useEffect } from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
import { useTranslation } from 'react-i18next';
// import Loader from "../../../Loader/Loader";
import { authContext } from "../../../../contexts/authContext";

export function ConfirmReg({ closeModal }) {
  const { t, i18n } = useTranslation();
  const [openSuccess, setOpenSuccess] = useState(null);
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("timerSeconds")) || 59
  );
  const [timerRunning, setTimerRunning] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const { handleConfirm, setError, sendCodeAgain } =
    useContext(authContext);

  function handleSendAgain() {
    if (!email.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
    };

    try {
      sendCodeAgain(newObj);

      setEmail("");
      setTimerRunning(true);
    } catch (error) {
      console.error("Error during send again:", error);
    }
  }

  function handleSigninClick() {
    if (!email.trim() || !code.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
      code: code,
    };

    try {
      handleConfirm(newObj);
      closeOpenSuccess();

      setEmail("");
      setCode("");
      setTimerRunning(true);
    } catch (error) {
      console.error("Error during confirmation:", error);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  useEffect(() => {
    const tick = () => {
      // setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));

      if (timerRunning && seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        setTimerRunning(false);
      }
    };

    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, timerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      setTimerRunning(false);
    }
  }, [seconds]);

  useEffect(() => {
    localStorage.setItem("timerSeconds", seconds);
  }, [seconds]);

  // useEffect(() => {
  //   localStorage.removeItem("timerExpired");
  // }, []);

  // useEffect(() => {
  //   const timerExpired = localStorage.getItem("timerExpired");
  //   if (timerExpired === "true") {
  //     setTimerRunning(false);
  //     setSeconds(0);
  //   }
  // }, []);

  const closeOpenSuccess = e => {
    // e.preventDefault();
    setOpenSuccess("success");
    // console.log("asduhfajsdhi");
  };

  const closeM = () => {
    setOpenSuccess(null);
  };

  const handleResendClick = () => {
    setSeconds(59);
    setTimerRunning(true);
  };

  const handleButtonClick = () => {
    if (timerRunning) {
      handleResendClick();
    } else {
      handleSigninClick();
    }
  };

  return (
    <div className={classes.confirm}>
      <div className={classes.confirm__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/register")} />
        <form action="">
          <div>{t('confirm_reg.button')}</div>
          <label>{t('confirm_reg.email')}</label>
          <input
            type="text"
            placeholder={t('confirm_reg.ph_email')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
          />

          <label>
            {t('confirm_reg.code')}{" "}
            <span id="counter">0:{seconds < 10 ? `0${seconds}` : seconds}</span>
          </label>
          <input
            type="text"
            placeholder={t('confirm_reg.ph_code')}
            name="code"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          {timerRunning ? (
            <button onClick={handleSigninClick}>
              {t('confirm_reg.signin')}
            </button>
          ) : (
            <div className={classes.resend_submit}>
              <button onClick={handleSigninClick} >
                {t('confirm_reg.signin')}
              </button>
              <p onClick={handleSendAgain}>
                {t('confirm_reg.resend')}
              </p>
            </div>
          )}
        </form>
      </div>
      {openSuccess === "success" && <Success closeModal={closeM} />}
    </div>
  );
}
