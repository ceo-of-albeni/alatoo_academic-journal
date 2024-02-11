import React, { useState, useContext, useEffect } from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
// import Loader from "../../../Loader/Loader";
import { authContext } from "../../../../contexts/authContext";

export function ConfirmReg({ closeModal }) {
  const [openSuccess, setOpenSuccess] = useState(null);
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("timerSeconds")) || 59
  );
  const [timerRunning, setTimerRunning] = useState(true);
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleConfirm, setError, loading } = useContext(authContext);

  const handleSigninClick = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
      password: password,
    };

    try {
      await handleConfirm(newObj, email);
      closeOpenSuccess();

      setEmail("");
      setPassword("");
      setTimerRunning(true);
      setSeconds(59);
    } catch (error) {
      // Handle error if needed
      console.error("Error during confirmation:", error);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  // if (loading) {
  //     return <Loader />;
  // }

  useEffect(() => {
    const tick = () => {
      if (timerRunning && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
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
    e.preventDefault();
    setOpenSuccess("success");
    console.log("asduhfajsdhi");
  };

  const closeM = () => {
    setOpenSuccess(null);
  }

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
  }

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
          <label>Code <span id="counter">0:{seconds < 10 ? `0${seconds}` : seconds}</span></label>
          <input
            type="text"
            placeholder="Enter your code"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleSigninClick(e)} disabled={loading}>
            {timerRunning ? "Sign in" : "Resend"}
          </button>
        </form>
      </div>
      {openSuccess === "success" && <Success closeModal={closeM} />}
    </div> 
  );
}
