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
  approved_articles: [],
  volumeInfo: [],
  editionArticlesByCategory: [],
  publishedNews: [],
  allNews: [],
  rules: [],
  oneComment: [],
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
    case "APPROVED_ARTICLES":
      return { ...state, approved_articles: action.payload };
    case "GET_VOLUME_INFO":
      return { ...state, volumeInfo: action.payload };
    case "GET_EDITION_ARTICLES_BY_CATEGORY":
      return { ...state, editionArticlesByCategory: action.payload };
    case "GET_PUBLISHED_NEWS":
      return { ...state, publishedNews: action.payload };
    case "GET_ALL_NEWS":
      return { ...state, allNews: action.payload };
    case "GET_RULES":
      return { ...state, rules: action.payload };
    case "GET_COMMENT":
      return { ...state, oneComment: action.payload };
    case "GET_ALL_COMMENTS":
      return { ...state, allComments: action.payload };
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

  async function getAllApproved() {
    try {
      const res = await axios(`${API}/article/get/approved`);
      dispatch({
        type: "APPROVED_ARTICLES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getArchive() {
    try {
      const res = await axios(`${API}/archive`);
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

  async function getVolumeInfo(id) {
    try {
      const res = await axios(`${API}/archive/${id}`);
      dispatch({
        type: "GET_VOLUME_INFO",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getEditionArticlesByCategory(id, categoryName) {
    try {
      const res = await axios(`${API}/archive/${id}/${categoryName}`);
      dispatch({
        type: "GET_EDITION_ARTICLES_BY_CATEGORY",
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
      const res = await axios(`${API}/article/find/${id}`);
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
      alert("Одобрено для оплаты! Обновите страницу!");
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
      alert("Статья одобрена! Обновите страницу!");
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
      alert("Статья отказана! Обновите страницу!");
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
      const res = await fetch(`${API}/article/delete/${id}`, {
        method: "POST",
        // body: newArticle,
        headers: {
          Authorization,
        },
      });

      console.log("Article deleted successfully:", res.data);
      alert("Статья удалена! Обновите страницу!");
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
      const res = await axios.patch(
        `${API}/archive/add/volume`,
        formData,
        config
      );
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
      const res = await axios.patch(
        `${API}/archive/add/edition/to/${volumeId}`,
        formData,
        config
      );
      console.log(res);
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
      const res = await axios.patch(
        `${API}/archive/add/article/${editionId}`,
        formData,
        config
      );
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
      const res = await axios.patch(
        `${API}/archive/edit/members`,
        formData,
        config
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArchiveVolume(id, obj) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.request({
        method: "DELETE",
        url: `${API}/archive/delete/volume/${id}`,
        data: obj,
        ...config,
      });
      alert("Том удален!");
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArchiveEdition(id, obj) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.request({
        method: "DELETE",
        url: `${API}/archive/delete/edition/${id}`,
        data: obj,
        ...config,
      });

      alert("Выпуск удален!");
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArchiveArticle(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(
        `${API}/archive/delete/article/${id}`,
        config
      );

      alert("Статья удалена!");
    } catch (err) {
      console.log(err);
    }
  }

  //NEWS

  async function getPublishedNews() {
    try {
      const res = await axios(`${API}/news/published`);
      dispatch({
        type: "GET_PUBLISHED_NEWS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getAllNews() {
    try {
      const res = await axios(`${API}/news/all`);
      dispatch({
        type: "GET_ALL_NEWS",
        payload: res.data,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function uploadNews(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/news/upload`, formData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function publishNews(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const res = await fetch(`${API}/news/publish/${id}`, {
        method: "POST",
        headers: {
          Authorization,
        },
      });
      alert("Новость опубликована! Обновите страницу!");      
    } catch (err) {
      console.log(err);
    }
  }

  // Функция для получения PDF с API
  async function getRules() {
    try {
      const res = await axios.get(`${API}/files/get/rules`, {
        responseType: 'arraybuffer',  // Получаем бинарные данные
      });
  
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob); // Создаем объект URL
  
      dispatch({
        type: "GET_RULES",
        payload: pdfUrl, // Сохраняем URL в состояние
      });
  
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }


  async function uploadRules(formData) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/files/upload`, formData, config);
      alert('Файл загружен!')
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  async function postComment(id, newComment) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/comment/to/${id}`,
        newComment,
        config
      );
      dispatch({
        type: "GET_COMMENT",
        payload: res.data,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteComment(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.request({
        method: "DELETE",
        url: `${API}/comment/delete/${id}`,
        // data: obj,
        ...config,
      });
      alert("Комментарий удален!");
    } catch (err) {
      console.log(err);
    }
  }

  async function getComments(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/comment/${id}`, config);
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: res.data,
      });
      // console.log(res);
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
        approved_articles: state.approved_articles,
        volumeInfo: state.volumeInfo,
        editionArticlesByCategory: state.editionArticlesByCategory,
        publishedNews: state.publishedNews,
        allNews: state.allNews,
        rules: state.rules,
        oneComment: state.oneComment,
        allComments: state.allComments,

        updateArticle,
        uploadNews,
        publishNews,
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
        deleteArchiveArticle,
        deleteArchiveEdition,
        deleteArchiveVolume,
        getAllApproved,
        getVolumeInfo,
        getEditionArticlesByCategory,
        getPublishedNews,
        getAllNews,
        getRules,
        uploadRules,
        postComment,
        deleteComment,
        getComments,
      }}>
      {children}
    </articlesContext.Provider>
  );
};

export default ArticleContextsProvider;
