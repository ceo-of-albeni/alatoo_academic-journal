import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

// const API = "http://52.91.159.64:3000/api";
// const API = "http://localhost:3000/api";
const API = "http://localhost:3000/api";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(newObj) {
    setLoading(true);
    console.log(newObj);
    try {
      const res = await axios.post(`${API}/auth/register`, newObj);
      console.log(res);
      // navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email) {
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

  async function handleConfirm(formData) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/confirmEmail`, formData);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUser(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
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
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/");
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        handleRegister,
        handleConfirm,
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
