import React, { useState, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const INIT_STATE = {
  users: [],
  // oneUser: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    // case "GET_ONE_USER":
    //   return { ...state, oneUser: action.payload };
    default:
      return state;
  }
}

const API = "http://localhost:3000/api";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [oneUser, setOneUser] = useState(null);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  async function getUsers() {
    try {
      const res = await axios(`${API}/user`);
      dispatch({
        type: "GET_USERS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRegister(newObj) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/register`, newObj);
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
      setCurrentUser(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
      alert("You entered wrong password or email!");
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirm(formData) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/confirmEmail`, formData);
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
      console.log(res);
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
        users: state.users,
        // oneUser: state.oneUser,

        handleRegister,
        handleConfirm,
        setError,
        handleLogin,
        // getOneUser,
        getUsers,
        handleLogout,
        handleUser,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
