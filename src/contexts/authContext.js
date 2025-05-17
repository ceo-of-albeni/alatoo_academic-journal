import React, { useState, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const INIT_STATE = {
  users: [],
  oneUser: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_ONE_USER":
      return { ...state, oneUser: action.payload };
    default:
      return state;
  }
}

const API = "http://localhost:3001/api";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);

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

async function getOneUser() {
  try {
    const tokens = localStorage.getItem("tokens");
    if (!tokens) {
      console.warn("No tokens found in localStorage");
      return;
    }

    const { access_token } = JSON.parse(tokens);
    if (!access_token) {
      console.warn("No access token found");
      return;
    }

    const res = await axios.get(`${API}/user/get/profile`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    dispatch({
      type: "GET_ONE_USER",
      payload: res.data,
    });
  } catch (err) {
    console.error("Error fetching user profile:", err);

    if (err.response) {
      if (err.response.status === 401) {
        console.warn("Unauthorized: Redirecting to login...");
        // Например, перенаправление на страницу логина
        // window.location.href = "/login";
      }
    }
  }
}


  async function handleRegister(newObj) {
    try {
      await axios.post(`${API}/auth/register`, newObj);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  async function handleLogin(formData, email, closeModal) {
    try {
      const res = await axios.post(`${API}/auth/login`, formData);
      console.log(res.config);
      
  
      if (res.data.access_token) {
        localStorage.setItem("tokens", JSON.stringify(res.data));  // Сохраняем токен
        localStorage.setItem("email", email);  // Сохраняем email
        localStorage.setItem("role", res.data.role);
  
        setCurrentUser(res);
        alert("Вы успешно вошли в систему!");
        navigate("/");  // Навигация после логина
  
        // Закрываем модальное окно, если оно открыто
        if (closeModal) {
          closeModal();
        }
      } else {
        throw new Error("No access token returned from login");
      }
    } catch (err) {
      console.log(err);
      setError(err);
      alert("Вы ввели неправильную почту или пароль!");
    }
  }

  async function handleConfirm(formData) {
    try {
      await axios.post(`${API}/auth/confirmEmail`, formData);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Ошибка!");
      setError(err);
    }
  }

  async function sendCodeAgain(formData) {
    try {
      await axios.patch(`${API}/auth/sendCodeAgain`, formData);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  async function forgotPassword(email) {
    try {
      await axios.post(`${API}/auth/forgotPassword`, email);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  async function handleUser(newProduct) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/user-profile/`, newProduct, config);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("timerSeconds");
    setCurrentUser(null);  // Сбрасываем состояние пользователя
    navigate("/");  // Редиректим на главную страницу
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        users: state.users,
        oneUser: state.oneUser,
        handleRegister,
        handleConfirm,
        setError,
        handleLogin,
        getOneUser,
        getUsers,
        handleLogout,
        handleUser,
        sendCodeAgain,
        forgotPassword,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
