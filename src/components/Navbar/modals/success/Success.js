import React from "react";
import classes from "./success.module.scss";
import { useNavigate } from "react-router-dom";

export function Success({ closeModal }) {
  const navigate = useNavigate();
  const handleSuccessClick = e => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const closeM = () => {
    navigate("/")
    closeModal();
  }

  return (
    <div className={classes.success} onClick={handleOutsideClick}>
      <div className={classes.success__inner} onClick={handleSuccessClick}>
        <div>Successfully!</div>
        <button onClick={closeM}>OK</button>
      </div>
    </div>
  );
}
