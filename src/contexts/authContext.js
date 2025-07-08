import React, { useState, useReducer, useCallback } from "react";
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
const apiUrl = process.env.REACT_APP_API_URL;
const API = `${apiUrl}/api`;

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

const getOneUser = useCallback(async () => {
  try {
    const tokens = localStorage.getItem("tokens");
    if (!tokens) {
      dispatch({ type: "RESET_USER" });
      return;
    }

    const { access_token } = JSON.parse(tokens);
    const res = await axios.get(`${API}/user/get/profile`, {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    // Простое обновление без проверки
    dispatch({ type: "GET_ONE_USER", payload: res.data });

  } catch (err) {
    if (err.response?.status === 401) {
      dispatch({ type: "RESET_USER" });
    }
  }
}, [API]);


  async function handleRegister(newObj) {
  try {
    await axios.post(`${API}/auth/register`, newObj);
    return true; // Успешная регистрация
  } catch (err) {
    console.log(err);
    setError(err);
    return false; // Ошибка регистрации
  }
}


 async function handleLogin(formData, email, closeModal) {
  try {
    const res = await axios.post(`${API}/auth/login`, formData);

    if (res.data.access_token) {
      if (res.data.access_token) {
        localStorage.setItem("tokens", JSON.stringify(res.data));
        localStorage.setItem("email", email);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("loginTime", new Date().toISOString());

        setCurrentUser(res);
        if (closeModal) closeModal();
        alert("Вы успешно вошли в систему!");
        navigate("/");
        return true;
      }         
      setCurrentUser(res);
      if (closeModal) closeModal();
      alert("Вы успешно вошли в систему!");
      navigate("/");
      return true; // Успешный логин
    } else {
      throw new Error("No access token returned from login");
    }
  } catch (err) {
    setError(err);
    alert("Вы ввели неправильную почту или пароль!");
    return false; // Ошибка логина
  }
}

async function handleConfirm(newObj) {
    try {
        const response = await axios.post(`${API}/auth/confirmEmail`, newObj);
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        setError(err);
        return false;
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



  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("timerSeconds");
    localStorage.removeItem("loginTime");
    setCurrentUser(null);  // Сбрасываем состояние пользователя
    navigate("/");  // Редиректим на главную страницу
  }

  function checkLoginTime() {
    const loginTime = localStorage.getItem("loginTime");
    if (loginTime) {
      const currentTime = new Date();
      const timeDiff = currentTime - new Date(loginTime);
      const minutesDiff = Math.floor(timeDiff / 1000 / 60);
      if (minutesDiff > 1440) {
        handleLogout();
      }
    }
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
        sendCodeAgain,
        checkLoginTime,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
