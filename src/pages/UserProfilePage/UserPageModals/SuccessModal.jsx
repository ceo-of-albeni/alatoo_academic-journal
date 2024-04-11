import React, { useState } from "react";
import "../UserProfilePage.scss";
import { useTranslation } from 'react-i18next';

function SuccessModal({closeModal}) {
  const { t, i18n } = useTranslation();
  const close = () => {
    closeModal();
  }
  
  return (
    <div className="article_form success_div">
      <h1>{t('success.fully')}</h1>
      <div className="article_form-inputs">
        <button className="ok_btn" onClick={close}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
