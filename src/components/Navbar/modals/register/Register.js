import React, { useState, useContext, useEffect } from "react";
import classes from "./register.module.scss";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";

export function Register({ closeModal }) {
  const { handleRegister, error, setError, loading } = useContext(authContext);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function createUser() {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }

    if (password != passwordConfirm) {
      alert("Passwords are not same!");
      return;
    }
    let newObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(newObj);
    handleRegister(newObj);
  }
  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleRegisterClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  return (
    <div className={classes.register} onClick={handleOutsideClick}>
      <div className={classes.register__inner} onClick={handleRegisterClick}>
        <img src={arrow} alt="back" onClick={() => closeModal(false)} />
        <form action="">
          <div>REGISTRATION</div>
          <label for="name">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter your name"
            name="name"
          />
          <label for="surname">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter your surname"
            name="surname"
          />
          <label for="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            name="email"
          />
          <label for="password">Password</label>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            name="password"
          />
          <label for="con_password">Confirm Password</label>
          <input
            type="text"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder="Enter your password"
            name="con_password"
          />
          <button onClick={createUser}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
