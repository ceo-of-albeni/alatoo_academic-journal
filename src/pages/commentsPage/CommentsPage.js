import React, { useCallback, useContext, useEffect, useState } from "react";
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
  const { t } = useTranslation();

  const {
    oneArticle,
    getOneArticle,
    getComments,
    allComments = [],
  } = useContext(articlesContext);
  const { id } = useParams();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    getOneArticle(id);
    setUserRole(localStorage.getItem("role"));
  }, [getOneArticle, id]);

  useEffect(() => {
    getComments(id);
  }, [id]);

  const downloadPDF = useCallback(() => {
    if (!oneArticle?.fileUrl) {
      console.error("File URL is missing");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = oneArticle.fileUrl;
      link.target = "_blank";
      link.download = oneArticle.fileUrl.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }, [oneArticle?.fileUrl]);

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
            <p>{oneArticle?.category?.nameRu}</p>
            <h4>{oneArticle.createdAt?.slice(0, 10)}</h4>
          </div>
          <div className={classes.link}>
            <a href={oneArticle?.fileUrl} target="_blank" rel="noreferrer">
            {t("commentspage.open")}
            </a>
          </div>
          <div className={classes.publish}>
            <h2>{oneArticle.title}</h2>
            <h5>{t("commentspage.authors")}{oneArticle.coauthors}</h5>
            <div className={classes.author}>
              <div className={classes.author_info}>
                <img src={img} alt="img" />
                <div className={classes.author__name}>
                <p>{`${oneArticle.user?.firstName} ${oneArticle.user?.lastName}`}</p>
                <p>{t("commentspage.uploaded")}</p>
                </div>
              </div>
              <div className={classes.pdf_downl}>
                <button onClick={downloadPDF}>{t("commentspage.pdf")}</button>
              </div>
            </div>
            <div className={classes.publish__text}>{oneArticle.text}</div>
          </div>
          {oneArticle.user?.role === userRole ||
          userRole === "admin" ? (
            <div className={classes.comments__bar}>
              <div className={classes.comments__text}>
                <h4>
                  {Array.isArray(allComments) ? allComments.length : 0} {t("commentspage.comments")}
                </h4>
                <img src={comments} alt="comments_ico" />
              </div>
              <div className={classes.comments__input}>
                <CommentBox />
              </div>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}
