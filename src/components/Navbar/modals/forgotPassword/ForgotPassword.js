import React, { useState, useContext, useEffect } from "react";
import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";

export function ForgotPassword({ closeModal }) {
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

    console.log(email);

    setEmail("");

    navigate("/change_password");
  }

  useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();


  return (
    <div className={classes.forgot}>
      <div className={classes.forgot__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/")} />
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
  );
}
