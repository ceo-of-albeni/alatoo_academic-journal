import { useContext, useEffect, useState } from "react";
import { articlesContext } from "../../contexts/articleContext";
import { useTranslation } from 'react-i18next';

const RulesPage = () => {
  const { getRules, rules } = useContext(articlesContext);
  const [iframeHeight, setIframeHeight] = useState("800px");
  const { t } = useTranslation();

  const adjustHeight = () => {
    const pageHeight = 1122; // Примерная высота одной страницы PDF
    const windowHeight = window.innerHeight;
    setIframeHeight(`${Math.max(pageHeight, windowHeight - 150)}px`);
  };

  useEffect(() => {
    getRules();
  }, []);

  useEffect(() => {
    if (rules) {
      adjustHeight();
      // Добавим слушатель изменения окна
      window.addEventListener("resize", adjustHeight);
      return () => {
        window.removeEventListener("resize", adjustHeight);
      };
    }
  }, [rules]);

  return (
    <div className="rules_main-div" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h3>{t('rules_page.rules')}</h3>
      {rules ? (
        <iframe
          src={rules + "#zoom=100"}
          width="85%" 
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
