import React from "react";
import "./RulesPage.scss";
import Pagination from "../../components/Pagination/Pagination";
import { useTranslation } from 'react-i18next';

const RulesPage = () => {
  const { t, i18n } = useTranslation();
  // const items = Array.from({ length: 3 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="rules_main-div">
      <h3>{t('rules_page1.rules')}</h3>
      <h3>{t('rules_page1.title')}</h3>
      <p>
        {" "}
        <span>{t('rules_page1.intro1')}</span>
        <span>{t('rules_page1.intro2')}</span>
      </p>
      <h4>{t('rules_page1.structure')}</h4>
      <ul className="rules_list">
        <li>{t('rules_page1.udc')}</li>
        <li>
          {t('rules_page1.str1')}{" "}
        </li>
        <li>
          {t('rules_page1.str2')}
        </li>
        <li>
          {t('rules_page1.str3')}
        </li>
        <li>
          {t('rules_page1.str4')}
        </li>
        <li>
          {t('rules_page1.str5')}
        </li>
        <li>{t('rules_page1.str6')}</li>
        <li>
          {t('rules_page1.str7')}
        </li>
        <li>
          {t('rules_page1.str8')}
        </li>
        <li>
          {t('rules_page1.str9')}
        </li>
        <li>
          {t('rules_page1.str10')}
        </li>
        <li>
          {t('rules_page1.str11')}
        </li>
        <li>
          {t('rules_page1.str12')}
        </li>
        <li>
          {t('rules_page1.str13')}
        </li>
        <li>{t('rules_page1.str14')}</li>
        <ul>
          <li>{t('rules_page1.str14.1')}</li>
          <li>
            {t('rules_page1.str14.2')}
          </li>
          <li>
            {t('rules_page1.str14.3')}
          </li>
        </ul>
      </ul>
      <Pagination />
    </div>
  );
};

export default RulesPage;
