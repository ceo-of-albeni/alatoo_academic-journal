import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classes from "./CommentsPage.module.scss";
import arrow from "./img/arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import img from "./img/user.png";
import comments from "./img/comments.svg";
import CommentBox from "../../components/CommentsBox/CommentsBox";
import { articlesContext } from "../../contexts/articleContext";

export function CommentsPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { oneArticle, getOneArticle } = useContext(articlesContext);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getOneArticle(id);
    console.log(oneArticle);
  }, []);

  console.log(oneArticle);

  return (
    <div className={classes.container}>
      <div className={classes.comments}>
        <div className={classes.comments__inner}>
          <div className={classes.back}>
            <a onClick={() => navigate("/")}>
              <img src={arrow} alt="arrow" />
              <p>{t("archivepage.back")}</p>
            </a>
          </div>
          <div className={classes.category}>
            <p>CATEGORY: {oneArticle?.category?.nameEn}</p>
            <h4>{oneArticle.createdAt?.slice(0, 10)}</h4>
          </div>
          <div className={classes.publish}>
            <h2>{oneArticle.title}</h2>
            <div className={classes.author}>
              <img src={img} alt="img" />
              <div className={classes.author__name}>
                <p>{oneArticle.authorName}</p>
                <p>Position AIU: Author</p>
              </div>
            </div>
            <a href="">{oneArticle.status}</a>
            <div className={classes.publish__text}>{oneArticle.text}</div>
          </div>
          <div className={classes.comments__bar}>
            <div className={classes.comments__text}>
              <h4>2 Comments</h4>
              <img src={comments} alt="comments_ico" />
            </div>
            <div className={classes.comments__input}>
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
