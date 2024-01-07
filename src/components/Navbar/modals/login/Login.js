import React, { useState, useContext, useEffect } from "react";
import classes from "./login.module.scss";
import arrow from "../img/arrow.svg";
import { Register } from "../register/Register";
import { Success } from "../success/Success";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../../contexts/authContext";
import Loader from "../../../Loader/Loader";
import { ForgotPassword } from "../forgotPassword/ForgotPassword";

export function Login({ closeModal }) {
  const [openLogin, setOpenLogin] = useState(true);
  const [openRegister, setOpenRegister] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, setError, loading } = useContext(authContext);

  function loginUser() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
      password: password,
    };
    handleLogin(newObj, email, navigate);
    console.log(newObj);
    closeOpenSuccess();

    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (openLogin || openRegister || openSuccess || openForgot) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleLoginClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const closeOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const closeOpenSuccess = () => {
    setOpenLogin(false);
    setOpenSuccess(true);
  };

  const closeOpenForgot = e => {
    e.preventDefault();
    setOpenLogin(false);
    setOpenForgot(true);
  };

  return (
    <>
      {openLogin && (
        <div className={classes.login} onClick={handleOutsideClick}>
          <div className={classes.login__inner} onClick={handleLoginClick}>
            <img src={arrow} alt="back" onClick={() => closeModal(false)} />
            <form action="">
              <div>LOGIN</div>
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
              />
              <label>Password</label>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button onClick={loginUser}>Sign in</button>
              <div
                className={classes.login__signup}
                onClick={closeOpenRegister}>
                <a href="javascript:void(0);" className={classes.sign}>
                  Sign up
                </a>
              </div>
              <div className={classes.login__fpassword}>
                <a href="" onClick={closeOpenForgot}>
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
      {openRegister && <Register closeModal={setOpenRegister} />}
      {openSuccess && <Success closeModal={setOpenSuccess} />}
      {openForgot && <ForgotPassword closeModal={setOpenForgot} />}
    </>
  );
}
