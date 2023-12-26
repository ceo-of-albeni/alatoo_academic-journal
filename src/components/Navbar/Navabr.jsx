import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
import classes from "./login.module.scss";
import arrow from "../Navbar/modals/img/arrow.svg";
import { Register } from "./modals/register/Register";
import { Success } from "./modals/success/Success";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Navabr = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, setError, loading, currentUser } =
    useContext(authContext);

  function loginUser() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      email: email,
      password: password,
    };
    handleLogin(newObj, email);
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

  if (openLogin || openRegister || openSuccess) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleLoginClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    setOpenLogin(false);
  };

  const closeOpenSuccess = () => {
    setOpenLogin(false);
    setOpenSuccess(true);
  };

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
          <p className="logo_p">Ala-Too Academic Journal</p>
        </div>

        <div className="header_links">
          <a href="/rules1" className="header_links__item">
            Rules
          </a>
          <a href="/archive" className="header_links__item">
            Archive
          </a>
          <a href="/" className="header_links__item">
            Articles
          </a>
          <a href="/" className="header_links__item">
            Contacts
          </a>

          {currentUser.isActive ? (
            <a
              onClick={() => navigate("/profile")}
              className="header_links__item">
              Profile
            </a>
          ) : (
            <a
              onClick={() => navigate("/profile")}
              className="header_links__item">
              NO
            </a>
          )}
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
      {openLogin && (
        <div className={classes.login} onClick={handleOutsideClick}>
          <div className={classes.login__inner} onClick={handleLoginClick}>
            <img src={arrow} alt="back" onClick={() => setOpenLogin(false)} />
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
                onClick={() => setOpenRegister(true)}>
                <a href="javascript:void(0);" className={classes.sign}>
                  Sign up
                </a>
              </div>
              <div className={classes.login__fpassword}>
                <a href="">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      )}
      {openRegister && <Register closeModal={setOpenRegister} />}
      {openSuccess && <Success closeModal={setOpenSuccess} />}
    </div>
  );
};

export default Navabr;
