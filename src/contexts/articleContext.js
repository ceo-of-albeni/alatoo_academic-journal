import React, { useReducer } from "react";
import axios from "axios";
import { JSON_API_ARTICLES } from "../helpers/consts.js";

export const articlesContext = React.createContext();

const INIT_STATE = {
  articles: [],
  oneArticle: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return { ...state, articles: action.payload };
    case "GET_ONE_ARTICLE":
      return { ...state, oneArticle: action.payload };
    default:
      return state;
  }
}

const ArticleContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8000/articles";
  // const location = useLocation();
  // const navigate = useNavigate();

  async function createArticle(newArticle) {
    await axios.post(JSON_API_ARTICLES, newArticle);
    getArticles();
  }

  const getArticles = async () => {
    const res = await axios(API);
    dispatch({
      type: "GET_ARTICLES",
      payload: res.data,
    });
  };

  async function deleteArticle(id) {
    await axios.delete(`${JSON_API_ARTICLES}/${id}`);
    getArticles();
  }

  async function getOneArticle(id) {
    const { data } = await axios(`${JSON_API_ARTICLES}/${id}`);
    dispatch({
      type: "GET_ONE_ARTICLE",
      payload: data,
    });
  }

  // async function createArticle(newArticle, navigate) {
  //   for (const val of newArticle) {
  //     console.log(val);
  //   }
  //   // console.log(newArticle)
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.post(`${API2}article/`, newArticle, config);
  //     console.log(res);
  //     navigate("/articles");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function getArticles() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(
  //       `${API2}article/${window.location.search}`,
  //       config
  //     );
  //     dispatch({
  //       type: "GET_ARTICLES",
  //       payload: res.data,
  //     });
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function getOneArticle(slug) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API2}article/${slug}/`, config);
  //     dispatch({
  //       type: "GET_ONE_ARTICLE",
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function UpdateArticle(slug, editedArticle, navigate) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.put(
  //       `${API2}article/${slug}`,
  //       editedArticle,
  //       config
  //     );
  //     navigate("/articles");
  //     getArticles();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function deleteArticle(slug) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.delete(`${API2}article/${slug}/`, config);
  //     getArticles();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <articlesContext.Provider
      value={{
        articles: state.articles,
        // pages: state.pages,
        oneArticle: state.oneArticle,
        deleteArticle,

        // UpdateArticle,
        getOneArticle,
        createArticle,
        getArticles,
      }}>
      {children}
    </articlesContext.Provider>
  );
};

export default ArticleContextsProvider;
