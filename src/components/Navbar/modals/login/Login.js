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
  const [activeModal, setActiveModal] = useState("login");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

    handleLogin(newObj, email, closeModal);
    console.log(newObj);

    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleLoginClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
    console.log("Closing modal");
  };

  const openReg = () => {
    navigate("/register");
    closeModal();
  }

  const openForg = () => {
    navigate("/forgot_password");
    closeModal();
  }

  return (
    <>
      {activeModal === "login" && (
        <div className={classes.login} onClick={handleOutsideClick}>
          <div className={classes.login__inner} onClick={handleLoginClick}>
            <img src={arrow} alt="back" onClick={() => closeModal()} />
            <form>
              <div>LOGIN</div>
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={loginUser}>Sign in</button>
              <div className={classes.login__signup} onClick={openReg}>
                <a href="javascript:void(0);" className={classes.sign}>
                  Sign up
                </a>
              </div>
              <div className={classes.login__fpassword} onClick={openForg}>
                <a href="javascript:void(0);">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
