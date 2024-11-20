import React, { useReducer } from "react";
import axios from "axios";

export const archiveContext = React.createContext();

const INIT_STATE = {
  ar_articles: [],
  ar_oneArticle: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ARCHIVE_ARTICLES":
      return { ...state, ar_articles: action.payload };
    case "GET_ONE_ARCHIVE_ARTICLE":
      return { ...state, ar_oneArticle: action.payload };
    default:
      return state;
  }
}

const ArchiveContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8000/archive_articles";

  async function getAllArchiveArticles() {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_ARCHIVE_ARTICLES",
      payload: data,
    });
  }

  // async function getAllArchiveArticles() {
  //   const res = await axios(API);
  //   console.log(res);
  //   dispatch({
  //     type: "GET_ARCHIVE_ARTICLES",
  //     payload: res.data,
  //   });
  // }

  async function getOneArchiveArticle(id) {
    let res = await fetch(`${API}/${id}`);
    const data = await res.json();
    dispatch({
      type: "GET_ONE_ARCHIVE_ARTICLE",
      payload: data,
    });
  }

  // async function getOneArchiveArticle(id) {
  //   const res = await axios(`${API}/${id}`);
  //   console.log(res);
  //   dispatch({
  //     type: "GET_ONE_ARCHIVE_ARTICLE",
  //     payload: res.data,
  //   });
  // }

  return (
    <archiveContext.Provider
      value={{
        ar_articles: state.ar_articles,
        ar_oneArticle: state.ar_oneArticle,

        getAllArchiveArticles,
        getOneArchiveArticle,
      }}>
      {children}
    </archiveContext.Provider>
  );
};

export default ArchiveContextsProvider;
