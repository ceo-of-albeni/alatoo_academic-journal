import React, { useState, useContext, useEffect } from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
// import Loader from "../../../Loader/Loader";
import { authContext } from "../../../../contexts/authContext";

export function ConfirmReg({ closeModal }) {
  const [openSuccess, setOpenSuccess] = useState(null);
  const [seconds, setSeconds] = useState(59);
  const [timerRunning, setTimerRunning] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const { handleConfirm, setError, loading, sendCodeAgain } =
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
      setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    };

    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      setTimerRunning(false);
    }
  }, [seconds]);

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
          <div>CONFIRM</div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
          />
          <label>
            Code{" "}
            <span id="counter">0:{seconds < 10 ? `0${seconds}` : seconds}</span>
          </label>
          <input
            type="text"
            placeholder="Enter your code"
            name="code"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          {/* <button onClick={handleSigninClick} disabled={loading}>
            {timerRunning ? "Sign in" : "Resend"}
          </button> */}
          {timerRunning ? (
            <button onClick={handleSigninClick} disabled={loading}>
              Sign in
            </button>
          ) : (
            <div className={classes.resend_submit}>
              <button onClick={handleSigninClick} disabled={loading}>
                Sign in
              </button>
              <p onClick={handleSendAgain} disabled={loading}>
                Resend
              </p>
            </div>
          )}
        </form>
      </div>
      {openSuccess === "success" && <Success closeModal={closeM} />}
    </div>
  );
}
