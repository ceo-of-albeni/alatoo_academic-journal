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
  const [password, setPassword] = useState("");

  const { handleConfirm, setError, loading } = useContext(authContext);

  const handleSigninClick = async (e) => {
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
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
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
  }, [seconds])

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
