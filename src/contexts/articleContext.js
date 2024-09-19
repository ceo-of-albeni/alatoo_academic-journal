import React, { useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const articlesContext = React.createContext();

const INIT_STATE = {
  archive: [],
  oneArticle: [],
  categories: [],
  my_articles: [],
  notPublished: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ARCHIVE":
      return { ...state, archive: action.payload };
    case "GET_MY_ARTICLES":
      return { ...state, my_articles: action.payload };
    case "GET_ONE_ARTICLE":
      return { ...state, oneArticle: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "NOT_PUBLISHED_ARTICLE":
      return { ...state, notPublished: action.payload };
    default:
      return state;
  }
}

const ArticleContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:3001/api";

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

  async function getAllNotPublished() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/article/all/notPublished`, config);
      dispatch({
        type: "NOT_PUBLISHED_ARTICLE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getArchive() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/archive`, config);
      dispatch({
        type: "GET_ARCHIVE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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

  async function paymentArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const res = await fetch(`${API}/article/payment/${id}`, {
        method: "POST",
        headers: {
          Authorization,
        },
      });
      alert("Approved for payment! Refresh the page!");
    } catch (err) {
      console.log(err);
    }
  }

  async function approveArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const res = await fetch(`${API}/article/approve/${id}`, {
        method: "POST",
        headers: {
          Authorization,
        },
      });
      alert("Article was approved! Refresh the page!");
    } catch (err) {
      console.log(err);
    }
  }

  async function declineArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const res = await fetch(`${API}/article/decline/${id}`, {
        method: "POST",
        // body: newArticle,
        headers: {
          Authorization,
        },
      });
      alert("Article was declined! Refresh the page!");
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (!tokens || !tokens.access_token) {
        console.log("Access token not found");
      } else {
        console.log(tokens.access_token);
      }
      const Authorization = `Bearer ${tokens.access_token}`;
      const res = await fetch(`${API}/article/approve/${id}`, {
        method: "POST",
        // body: newArticle,
        headers: {
          Authorization,
        },
      });

      console.log("Article deleted successfully:", res.data);
      alert("Article was deleted! Refresh the page!");
    } catch (err) {
      console.error("Error deleting article:", err);
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
      // getArticles();
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

  async function createCategory(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/category/create`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  async function addVolumes(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/archive/add/volume`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  async function addEditions(formData, volumeId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/archive/add/edition/to/${volumeId}`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  async function addArchiveArticles(formData, editionId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/archive/add/article/${editionId}`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  async function editArchive(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/archive/edit`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  async function editCouncilMembers(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/archive/edit/members`, formData, config);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <articlesContext.Provider
      value={{
        archive: state.archive,
        loading,
        oneArticle: state.oneArticle,
        categories: state.categories,
        my_articles: state.my_articles,
        notPublished: state.notPublished,

        updateArticle,
        getOneArticle,
        getCategories,
        addArchiveArticles,
        getAllMyArticles,
        fetchByParams,
        paymentArticle,
        deleteArticle,
        createCategory,
        declineArticle,
        getAllNotPublished,
        approveArticle,
        addVolumes,
        addEditions,
        getArchive,
        setLoading,
        editArchive,
        editCouncilMembers,
      }}>
      {children}
    </articlesContext.Provider>
  );
};

export default ArticleContextsProvider;
