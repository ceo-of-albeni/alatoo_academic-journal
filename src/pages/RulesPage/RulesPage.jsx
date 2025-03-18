import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { articlesContext } from "../../contexts/articleContext";

const RulesPage = () => {
  const { getRules, rules } = useContext(articlesContext);

  useEffect(() => {
    getRules();
  }, []);

  return (
    <div className="rules_main-div">
      <h3>Rules Page</h3>
    </div>
  );
};

export default RulesPage;
