import React, { useEffect, useContext, useState } from "react";
import classes from "../articlesPage/ArticlesPage.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";
import ArticleCardDefault from "../../components/ArticleCardDefault/ArticlesCardDefault";

const ArticlesPageDefault = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const { approved_articles, getAllApproved } = useContext(articlesContext);

  useEffect(() => {
    getAllApproved();
    console.log(approved_articles);
  }, []);

  console.log(approved_articles);

  const itemsOnPage = 8;
  const count = Math.ceil(approved_articles.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const currentData = () => {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return approved_articles.slice(begin, end);
  };

  return (
    <div className={classes.list_main}>
      <div className={classes.list_main_div}>
        <h1>{t("approved_articles.title")}</h1>
        <div className={classes.list_courses_div}>
          {approved_articles ? (
            currentData().map((item) => (
              <ArticleCardDefault key={item.id} item={item} />
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

export default ArticlesPageDefault;
