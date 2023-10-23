import React from "react";
import "../UserProfilePage.scss";

const SuccessModal = () => {
  return (
    <div className="article_form success_div">
      <h1>Successfully!</h1>
      <div className="article_form-inputs">
        <button className="ok_btn">OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
