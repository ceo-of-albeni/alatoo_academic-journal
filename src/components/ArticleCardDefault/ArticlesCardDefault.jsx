import React, { useContext, useEffect } from "react";
import classes from "../ArticleCard/ArticleCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";

const ArticleCardDefault = ({ item }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const getTrimmedText = () => {
    if (!item.text) return "No preview available.";
    return item.text.length > 80
      ? item.text.substring(0, 80).trimEnd() + "..."
      : item.text;
  };

  return (
    <div
      className={classes.project_main_div}
      onClick={() => navigate(`/comments/${item.id}`)}>
      <div className={classes.container}>
        {item && (
          <div className={classes.card}>
            <h4>{item.title || "No title"}</h4>
            <p>{t("articlecard.authors")}{item.authorName || "Unknown"}</p>
           <p>{t("articlecard.category")}{item.category?.nameRu || "Uncategorized"}</p>
           <p>{getTrimmedText()}</p>
         </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCardDefault;
