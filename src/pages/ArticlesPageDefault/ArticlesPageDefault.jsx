import React, { useEffect, useContext, useState } from "react";
import classes from "../articlesPage/ArticlesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";
import ArticleCardDefault from "../../components/ArticleCardDefault/ArticlesCardDefault";

const ArticlesPageDefault = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const { approved_articles, getAllApproved } = useContext(articlesContext);

useEffect(() => {
  setSearchParams({ q: search });
}, [search, setSearchParams]);

useEffect(() => {
  // Получаем текущий параметр 'q' из searchParams
  const q = searchParams.get("q") || "";
  // Если нужно, можно проверять совпадение с search
  getAllApproved(q);
}, [searchParams]);

  const filteredArticles = approved_articles.filter((article) => {
    const query = search.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.authorName.toLowerCase().includes(query) ||
      article.category?.nameRu?.toLowerCase().includes(query)
    );
  });

  const itemsOnPage = 8;
  const count = Math.ceil(filteredArticles.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const currentData = () => {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return filteredArticles.slice(begin, end);
  };

  return (
    <div className={classes.list_main}>
      <div className={classes.list_main_div}>
        <h1>{t("approved_articles.title")}</h1>
        <div className={classes.filAndSr}>
          <a href="#">
            <div className={classes.icon}>
              <i className="fa-solid fa-filter fa-2xl"></i>
            </div>
          </a>
          <a href="#">
            <div className={classes.icon} id={classes.search}>
              <i
                className="fa-solid fa-magnifying-glass fa-2xl"
                id={classes.search}></i>
            </div>
          </a>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("articlespage.search")}
            className={classes.sr_inp}
          />
        </div>
          <ul className={classes.list_courses_div} style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filteredArticles.length > 0 ? (
              currentData().map((item) => (
                <ArticleCardDefault key={item.id} item={item} />
              ))
            ) : (
              <h3>{t("articlespage.no2")}</h3>
            )}
          </ul>

        <div className={classes.pagin}>
          <Pagination count={count} page={page} onChange={handlePage} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPageDefault;
