import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import classes from "./login.module.css"
import arrow from "../Navbar/modals/img/arrow.svg";
import { Register } from "./modals/register/Register";
import { Success } from "./modals/success/Success";
// import { Login } from "../modals/login/Login";
import { useNavigate } from "react-router-dom";

const Navabr = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false)
  
  if (openLogin || openRegister || openSuccess) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleLoginClick = (e) => {
      e.stopPropagation();
  };

  const handleOutsideClick = () => {
      setOpenLogin(false);
  };

  const closeOpenSuccess = () => {
      setOpenLogin(false);
      setOpenSuccess(true);
  }

  const navigate = useNavigate();
  return (
    <div className="header_navbar">
      <div className="container_header">
        <div className="header_logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png"
              alt=""
            />
          </a>
        </div>

        <div className="header_links">
          <a href="/rules1" className="header_links__item">
            Rules for authors
          </a>
          <a href="/" className="header_links__item">
            Archive
          </a>
          <a href="/" className="header_links__item">
            Articles
          </a>
          <a href="/" className="header_links__item">
            Contacts
          </a>

          <a
            onClick={() => navigate("/profile")}
            className="header_links__item">
            Профиль
          </a>
        </div>

        <div
          className="login_btn"
          onClick={() => {
            setOpenLogin(true);
          }}>
          <div>Войти</div>
          {/* {isAuth ? <button>Выход</button> : <button>Войти</button>} */}
        </div>
      </div>
      {openLogin && (<div className={classes.login} onClick={handleOutsideClick}>
            <div className={classes.login__inner} onClick={handleLoginClick}>
                <img src={arrow} alt="back" onClick={() => setOpenLogin(false)}/>
                <form action="">
                    <div>LOGIN</div>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter your email" name="email"/>
                    <label for="password">Password</label>
                    <input type="text" placeholder="Enter your password" name="password"/>
                    <button onClick={closeOpenSuccess}>Sign in</button>
                    <div className={classes.login__signup} onClick={() => setOpenRegister(true)}>
                        <a href="javascript:void(0);" className={classes.sign}>Sign up</a>
                    </div>
                    <div className={classes.login__fpassword}><a href="">Forgot password?</a></div>
                </form>
            </div>
        </div>)}
        {openRegister && <Register closeModal={setOpenRegister}/>}
        {openSuccess && <Success closeModal={setOpenSuccess}/>}
    </div>
  );
};

export default Navabr;
