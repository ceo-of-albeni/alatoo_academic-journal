import React, { useState, useContext, useEffect } from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
import { Register } from "../register/Register";
// import Loader from "../../../Loader/Loader";
import { authContext } from "../../../../contexts/authContext";

export function ConfirmReg({ closeModal }) {
  const [openRegister, setOpenRegister] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [timerRunning, setTimerRunning] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleConfirm, setError, loading } = useContext(authContext);

  const handleSigninClick = () => {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
      password: password,
    };

    handleConfirm(newObj, email);
    closeOpenSuccess();

    setEmail("");
    setPassword("");
    setTimerRunning(true);
  };

  useEffect(() => {
    setError(false);
  }, []);

  // if (loading) {
  //     return <Loader />;
  // }

  // if (openconfirm || openRegister || openSuccess) {
  //     document.body.style.overflow = "hidden";
  // } else {
  //     document.body.style.overflow = "auto";
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

  const handleConfirmClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const closeOpenRegister = () => {
    setModalOpen(false);
    setOpenRegister(true);
  };

  const closeOpenSuccess = e => {
    e.preventDefault();
    setModalOpen(false);
    setOpenSuccess(true);
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
  }

  return (
    <>
      {modalOpen && (
        <div className={classes.confirm} onClick={handleOutsideClick}>
          <div className={classes.confirm__inner} onClick={handleConfirmClick}>
            <img src={arrow} alt="back" onClick={closeOpenRegister} />
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
              <button onClick={handleButtonClick} disabled={loading}>
                {timerRunning ? "Sign in" : "Resend"}
              </button>
            </form>
          </div>
        </div>
      )}
      {openRegister && <Register closeModal={setOpenRegister} />}
      {openSuccess && <Success closeModal={setOpenSuccess} />}
    </>
  );
}
