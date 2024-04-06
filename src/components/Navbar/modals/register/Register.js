import React, { useState, useContext, useEffect } from "react";
import classes from "./register.module.scss";
import arrow from "../img/arrow.svg";
import { authContext } from "../../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { ConfirmReg } from "../confirmReg/ConfirmReg";
import { Login } from "../login/Login";
import { useTranslation } from 'react-i18next';

export function Register() {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  const { t, i18n } = useTranslation();

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
          <div>{t('register.registration')}</div>
          <label>{t('register.first_name')}</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder={t('register.ph_first_name')}
            name="name"
          />
          <label>{t('register.last_name')}</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder={t('register.ph_last_name')}
            name="surname"
          />
          <label>{t('register.email')}</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('register.ph_email')}
            name="email"
          />
          <label>{t('register.password')}</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={t('register.ph_password')}
            name="password"
          />
          <label>{t('register.confirm_pw')}</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder={t('register.ph_confirm_pw')}
            name="con_password"
          />
          <button onClick={openConfirm}>
            {isLoading ? <Loader /> : t('register.signup')}
          </button>
        </form>
      </div>
    </div>
  );
}
