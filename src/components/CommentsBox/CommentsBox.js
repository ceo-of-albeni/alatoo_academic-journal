import React, { useState } from 'react';
import classes from './CommentsBox.module.scss';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const user = {
    name: 'Иван Иванов',
    profilePicture: 'https://example.com/profile.jpg',
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        text: comment,
        user: user,
        timestamp: new Date(),
        likes: 0
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const handleLike = (id) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const renderComments = (comments) => {
    return comments.map(comment => (
      <div className={classes.user} key={comment.id} style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={comment.user.profilePicture}
            alt={`${comment.user.name}'s profile`}
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
          />
          <div>
            <strong>{comment.user.name}</strong>
            <small>{comment.timestamp.toLocaleString()}</small>
          </div>
        </div>
        <p>{comment.text}</p>
        <button className={classes.like} onClick={() => handleLike(comment.id)}>Like {comment.likes}</button>
        <button className={classes.delete} onClick={() => handleDelete(comment.id)}>Delete</button>
      </div>
    ));
  };

  return (
    <div>
      <form className={classes.commentbox__form} onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Enter your comment"
          rows="4"
          cols="50"
        />
        <div>
            {renderComments(comments)}
        </div>
        <button className={classes.send__comment} type="submit">Add a comment</button>
      </form>
    </div>
  );
};

export default CommentBox;
