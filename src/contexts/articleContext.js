import React, { useReducer } from "react";
import axios from "axios";

export const articlesContext = React.createContext();

const INIT_STATE = {
  articles: [],
  pages: 0,
  oneArticle: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_ONE_ARTICLE":
      return {
        ...state,
        oneArticle: action.payload,
      };
    default:
      return state;
  }
}

const API2 = "http://3.92.183.40/api/";
const ArticleContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createArticle(newArticle, navigate) {
    for (const val of newArticle) {
      console.log(val);
    }
    // console.log(newArticle)
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API2}article/`, newArticle, config);
      console.log(res);
      navigate("/articles");
    } catch (err) {
      console.log(err);
    }
  }

  async function getArticles() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API2}article/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_ARTICLES",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneArticle(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API2}article/${slug}/`, config);
      dispatch({
        type: "GET_ONE_ARTICLE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function UpdateArticle(slug, editedArticle, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.put(
        `${API2}article/${slug}`,
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
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API2}article/${slug}/`, config);
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <articlesContext.Provider
      value={{
        articles: state.articles,
        pages: state.pages,
        oneArticle: state.oneArticle,
        deleteArticle,
        UpdateArticle,
        getOneArticle,
        createArticle,
        getArticles,
      }}>
      {children}
    </articlesContext.Provider>
  );
};

export default ArticleContextsProvider;
