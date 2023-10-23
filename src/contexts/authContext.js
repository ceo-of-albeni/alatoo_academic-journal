import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const API = "http://52.91.159.64:3000/api";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      navigate("/register-success");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/login`, formData);
      console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // async function handleLogin(email, password, navigate) {
  //   fetch(`${API}/auth/login`)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.map(item => {
  //         console.log(item);
  //         if (item.email == email && item.password == password) {
  //           localStorage.setItem("email", email);
  //           localStorage.setItem("password", password);
  //           navigate("/");
  //         } else {
  //           alert("invalid username or password");
  //         }
  //       });
  //     });
  // }

  async function handleUser(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/user-profile/`, newProduct, config);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("username");
    setCurrentUser(false);
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        handleRegister,
        setError,
        handleLogin,

        handleLogout,
        handleUser,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
