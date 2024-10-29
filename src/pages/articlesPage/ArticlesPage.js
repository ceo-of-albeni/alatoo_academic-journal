import React, { useEffect, useContext, useState } from "react";
import "./ArticlesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";

const ArticlesPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { t, i18n } = useTranslation();
  const { approved_articles, getAllApproved } = useContext(articlesContext);

  useEffect(() => {
    getAllApproved();
    console.log(approved_articles);
  }, []);

  const itemsOnPage = 6;
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
    <div>
      <div className="list_main-div">
        <h1>{t("approved_articles.title")}</h1>
        <div className="list_courses-div">
          {approved_articles ? (
            currentData().map((item) => (
              <ArticleCard key={item.id} item={item} />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </div>

        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </div>
  );
};

export default ArticlesPage;
