import React from "react";
import "./RulesPage.scss";
import Pagination from "../../components/Pagination/Pagination";
import { useTranslation } from 'react-i18next';

const RulesPage3 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="rules_main-div">
      <h3>{t('rules_page3.title')}</h3>
      <h3>{t('rules_page3.title2')}</h3>
      <h4>{t('rules_page3.title3')}</h4>
      <p>
        <span>{t('rules_page3.abstract')}</span>
        <span><strong>{t('rules_page3.keyword')}</strong>{t('rules_page3.keywords')}</span>
        <br />
        <span><strong>{t('rules_page3.main')}</strong></span>
        <span>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxx</span>
        <span><strong>{t('rules_page3.list')}</strong></span>
        <span>1. Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
        <span>2. Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </p>
      <h4>{t('rules_page3.title4')}</h4>
      <h4>{t('rules_page3.title5')}</h4>
      <p>
        {t('rules_page3.5.1')}
        <br />{t('rules_page3.5.2')} <br /> {t('rules_page3.5.3')} <br /> {t('rules_page3.5.4')} <br /> {t('rules_page3.5.5')} <br /> {t('rules_page3.5.6')}
      </p>
      <h4>{t('rules_page3.title6')}</h4>
      <p>
        {t('rules_page3.6.1')} <br /> {t('rules_page3.6.2')} <br /> {t('rules_page3.6.3')} <br /> {t('rules_page3.6.4')}
      </p>
      <h4>{t('rules_page3.title7')}</h4>
      <p>
        {t('rules_page3.7.1')}
      </p>
      <Pagination />
    </div>
  );
};

export default RulesPage3;
