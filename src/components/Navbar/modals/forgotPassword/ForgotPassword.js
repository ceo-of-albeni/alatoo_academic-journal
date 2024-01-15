import React, { useState, useContext, useEffect } from "react";
import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Login } from "../login/Login";
import { ChangePassword } from "../changePassword/ChangePassword";
import { authContext } from "../../../../contexts/authContext";

export function ForgotPassword({ closeModal }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);
  const [openChange, setOpenChange] = useState(false);
  const [email, setEmail] = useState("");

  const { forgotPassword, setError } = useContext(authContext);

  function handleData() {
    if (!email.trim()) {
      alert("Input is empty!");
      return;
    }

    let obj = {
      email: email,
    };

    forgotPassword(obj);
    closeOpenChange();

    console.log(email);

    setEmail("");
  }

  useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();

  const handleForgotClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const closeOpenLogin = () => {
    setModalOpen(false);
    setOpenLogin(true);
  };

  const closeOpenChange = e => {
    // e.preventDefault();
    setModalOpen(false);
    setOpenChange(true);
  };

  return (
    <>
      {modalOpen && (
        <div className={classes.forgot} onClick={handleOutsideClick}>
          <div className={classes.forgot__inner} onClick={handleForgotClick}>
            <img src={arrow} alt="back" onClick={closeOpenLogin} />
            <form action="">
              <div>Password Reset</div>
              <div className={classes.text}>
                <p>
                  Forgotten your password? Enter your e-mail address below, and
                  we'll send you an e-mail allowing you to reset it.
                </p>
              </div>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                name="email"
              />
              <button onClick={handleData}>Reset my password</button>
            </form>
          </div>
        </div>
      )}
      {openLogin && <Login closeModal={setOpenLogin} />}
      {openChange && <ChangePassword closeModal={setOpenChange} />}
    </>
  );
}
