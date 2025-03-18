import React, { useContext, useEffect, useState } from "react";
import classes from "./CommentsBox.module.scss";
import { articlesContext } from "../../contexts/articleContext";
import { useParams } from "react-router-dom";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const { id } = useParams();

  const { postComment, oneComment, deleteComment, getComments, allComments } =
    useContext(articlesContext);

  useEffect(() => {
    getComments(id);
  }, [id]);

  function commentsPost(e) {
    // e.preventDefault();
    let newComment = {
      text: comment,
    };

    postComment(id, newComment);
    console.log(oneComment);

    setComment("");
  }

  console.log(allComments);
  return (
    <>
      <div>
        <form className={classes.commentbox__form}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
            rows="4"
            cols="50"
          />
          {allComments?.map((a_comment) => (
            <div
              className={classes.user}
              key={a_comment.id}
              style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://example.com/profile.jpg"
                  alt="pic"
                  // alt={`${a_comment.user.las}'s profile`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <strong>
                    {a_comment.user.firstName} {a_comment.user.lastName}
                  </strong>
                </div>
              </div>
              <p>{a_comment.text}</p>
              <button
                className={classes.delete}
                onClick={() => deleteComment(a_comment.id)}>
                Delete
              </button>
            </div>
          ))}
          <button className={classes.send__comment} onClick={commentsPost}>
            Add a comment
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentBox;
