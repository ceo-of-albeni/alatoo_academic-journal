import React, { useContext, useEffect, useState } from "react";
import { articlesContext } from "../../contexts/articleContext";
import { useTranslation } from 'react-i18next';

const RulesPage = () => {
  const { getRules, rules } = useContext(articlesContext);
  const [iframeHeight, setIframeHeight] = useState("800px");
  const { t } = useTranslation();

  useEffect(() => {
    getRules();
  }, []);

  useEffect(() => {
    if (rules) {
      adjustHeight();
    }
  }, [rules]);

  const adjustHeight = () => {
    const pageHeight = 1122; // Примерная высота одной страницы PDF
    const windowHeight = window.innerHeight;
    setIframeHeight(`${Math.max(pageHeight, windowHeight - 150)}px`);
  };

  return (
    <div className="rules_main-div" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h3>{t('rules_page.rules')}</h3>
      {rules ? (
        <iframe
          src={rules + "#view=FitH"}
          width="85%" // Уменьшил ширину на 15%
          height={iframeHeight}
          style={{ border: "none", overflow: "hidden" }}
          title="Правила"
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default RulesPage;
