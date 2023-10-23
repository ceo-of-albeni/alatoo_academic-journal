import React, { useState } from "react";
import "../UserProfilePage.scss";

function SuccessModal({closeModal}) {
  const close = () => {
    closeModal();
  }
  
  return (
    <div className="article_form success_div">
      <h1>Successfully!</h1>
      <div className="article_form-inputs">
        <button className="ok_btn" onClick={close}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
