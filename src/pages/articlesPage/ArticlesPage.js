import React, { useEffect, useContext, useState } from "react";
import classes from "./ArticlesPage.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";

const ArticlesPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { t, i18n } = useTranslation();

  const { id, categoryName } = useParams();

  const { editionArticlesByCategory, getEditionArticlesByCategory } =
    useContext(articlesContext);

  useEffect(() => {
    getEditionArticlesByCategory(id, categoryName);
  }, []);

  console.log(editionArticlesByCategory);
  const [articlesArr, setArchiveVar] = useState([]);

  useEffect(() => {
    setArchiveVar(
      editionArticlesByCategory.articles
        ? editionArticlesByCategory.articles
        : []
    );
  }, [editionArticlesByCategory.articles]);

  console.log(articlesArr);
  const itemsOnPage = 8;
  const count = Math.ceil((articlesArr?.length || 0) / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const currentData = () => {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return articlesArr?.slice(begin, end);
  };

  return (
    <div className={classes.list_main}>
      <div className={classes.list_main_div}>
        <h1>{t("approved_articles.title")}</h1>
        <div className={classes.list_courses_div}>
          {articlesArr ? (
            currentData().map((item) => (
              <ArticleCard key={item.id} item={item} />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </div>

        <div className={classes.pagin}>
          <Pagination count={count} page={page} onChange={handlePage} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
