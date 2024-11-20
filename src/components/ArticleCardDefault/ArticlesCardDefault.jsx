import React, { useContext, useEffect } from "react";
import classes from "../ArticleCard/ArticleCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";

const ArticleCardDefault = ({ item }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const getTrimmedText = () => {
    if (item.text.length > 80) {
      return item.text.substring(0, 80).trimEnd() + "...";
    } else {
      return item.text;
    }
  };

  return (
    <div
      className={classes.project_main_div}
      onClick={() => navigate(`/comments/${item.id}`)}>
      <div className={classes.container}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <h4>{item.title}</h4>
            <p>Author(s): {item.authorName}</p>
            <p>Category: {item.category}</p>
            <p>{getTrimmedText()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardDefault;
