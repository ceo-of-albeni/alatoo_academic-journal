import React, { useState, useContext, useEffect } from "react";
import classes from "./modals.module.css";
import arrow from "./img/arrow.svg";
import { authContext } from "../../../contexts/authContext";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";

export function Login({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, setError, loading } = useContext(authContext);
  const navigate = useNavigate();

  function loginUser() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__inner}>
        <img src={arrow} alt="back" onClick={() => closeModal(false)} />
        <form action="">
          <div>LOGIN</div>
          <label for="email">Email</label>
          <input
            className={classes.modal_inp}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            name="email"
          />
          <label for="password">Password</label>
          <input
            className={classes.modal_inp}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button>Sign in</button>
          <div className={classes.model__signup}>
            <a href="" onClick={loginUser} className={classes.sign}>
              Sign up
            </a>
          </div>
          <div className={classes.model__fpassword}>
            <a href="">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
