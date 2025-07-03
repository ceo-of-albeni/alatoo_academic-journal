import React, { useContext, useEffect, useState } from "react";
import classes from "./CommentsBox.module.scss";
import { articlesContext } from "../../contexts/articleContext";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [visibleComments, setVisibleComments] = useState(3); // Initially show 10 comments
  const { t } = useTranslation();

  const { id } = useParams();

  const { postComment, deleteComment, getComments, allComments } =
    useContext(articlesContext);

  useEffect(() => {
    if (id) getComments(id);
  }, []);

  function commentsPost(e) {
    e.preventDefault(); // Prevent page refresh
    if (!comment.trim()) return;
    let newComment = {
      text: comment,
    };

    postComment(id, newComment);
    setComment("");
  }

  const loadMoreComments = () => {
    setVisibleComments((prev) => Math.min(prev + 5, allComments.length)); // Load 10 more comments or the total length
  };

  return (
    <div>
      <form className={classes.commentbox__form} onSubmit={commentsPost}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t("commentsbox.ph")}
          rows="4"
          cols="50"
        />
        <button type="submit" className={classes.send__comment}>
        {t("commentsbox.add")}
        </button>
      </form>
      {allComments && allComments.length > 0 ? (
        allComments.slice(0, visibleComments).map((a_comment) => (
          <div
            className={classes.user}
            key={a_comment.id}
            style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                alt="pic"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <strong>
                  {a_comment.user?.firstName} {a_comment.user?.lastName}
                </strong>
              </div>
            </div>
            <p>{a_comment.text}</p>
            <button
              className={classes.delete}
              onClick={() => deleteComment(a_comment.id)}>
              {t("commentsbox.delete")}
            </button>
          </div>
        ))
      ) : (
        <p>{t("commentsbox.no")}</p>
      )}
      {allComments && allComments.length > visibleComments && (
        <button className={classes.loadMore} onClick={loadMoreComments}>
          {t("commentsbox.more")}
        </button>
      )}
    </div>
  );
};

export default CommentBox;
