import React from "react";
import classes from "./ArticleCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArticleCard = ({ item }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  console.log(item);

  const getTrimmedText = () => {
    if (item.text.length > 80) {
      return item.text.substring(0, 80).trimEnd() + "...";
    } else {
      return item.text;
    }
  };

  return (
    <div className={classes.project_main_div}>
      <div className={classes.container}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <h4>
              adsjfklajdfljksdjfhadsklfhlkjadhflkjadhlfkjahsdkljfhaljdhfljk
            </h4>
            <p>Author(s): {item.authorName}</p>
            <p>Category: Abiy gay</p>
            <p>{getTrimmedText()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
