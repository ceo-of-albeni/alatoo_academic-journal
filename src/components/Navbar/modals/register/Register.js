import React, { useState, useContext, useEffect } from "react";
import classes from "./register.module.scss";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { ConfirmReg } from "../confirmReg/ConfirmReg";
import { Login } from "../login/Login";

export function Register() {
  const { handleRegister, error, setError, loading } = useContext(authContext);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const createUser = async () => {
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

    if (password !== passwordConfirm) {
      alert("Passwords are not the same!");
      return;
    }

    setIsLoading(true);

    let newObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      await handleRegister(newObj);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  const openConfirm = () => {
    createUser();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      password !== passwordConfirm
    ) {
      // alert("You filled the form incorrectly!!");
      // return;
    } else {
      navigate("/confirm");
    }
  };

  return (
    <div className={classes.register}>
      <div className={classes.register__inner}>
        <img src={arrow} alt="back" onClick={() => navigate("/")} />
        <form action="">
          <div>REGISTRATION</div>
          <label>First name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter your name"
            name="name"
          />
          <label>Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter your surname"
            name="surname"
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            name="email"
          />
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            name="password"
          />
          <label>Confirm Password</label>
          <input
            type="text"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder="Enter your password"
            name="con_password"
          />
          <button onClick={openConfirm}>
            {isLoading ? <Loader /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
