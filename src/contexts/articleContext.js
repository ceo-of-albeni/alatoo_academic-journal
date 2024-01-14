import React, { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const articlesContext = React.createContext();

const INIT_STATE = {
  articles: [],
  oneArticle: [],
  categories: [],
  my_articles: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return { ...state, articles: action.payload };
    case "GET_MY_ARTICLES":
      return { ...state, my_articles: action.payload };
    case "GET_ONE_ARTICLE":
      return { ...state, oneArticle: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    // case "APPROVE_ARTICLE":
    //   return {...state, approved}
    default:
      return state;
  }
}

const ArticleContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:3000/api";

  const location = useLocation();
  const navigate = useNavigate();

  async function getCategories() {
    try {
      const res = await axios(`${API}/category/list`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getArticles() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/article/all/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_ARTICLES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllMyArticles() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/article/allMy`, config);
      dispatch({
        type: "GET_MY_ARTICLES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/article/${id}/`, config);
      dispatch({
        type: "GET_ONE_ARTICLE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function approveArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/article/approve/${id}`, config);
      // dispatch({
      //   type: "APPROVE_ARTICLE",
      //   payload: res.data,
      // });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/article/delete/${id}`, config);
      // dispatch({
      //   type: "APPROVE_ARTICLE",
      //   payload: res.data,
      // });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateArticle(slug, editedArticle) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.put(
        `${API}article/${slug}`,
        editedArticle,
        config
      );
      navigate("/articles");
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArticle(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/article/${slug}/`, config);
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "articles") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };

  return (
    <articlesContext.Provider
      value={{
        articles: state.articles,
        // pages: state.pages,
        oneArticle: state.oneArticle,
        categories: state.categories,
        my_articles: state.my_articles,
        deleteArticle,

        updateArticle,
        getOneArticle,
        getCategories,
        getAllMyArticles,
        fetchByParams,
        getArticles,
        approveArticle,
        deleteArticle,
      }}>
      {children}
    </articlesContext.Provider>
  );
};

export default ArticleContextsProvider;
