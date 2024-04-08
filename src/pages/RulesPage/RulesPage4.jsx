import React from "react";
import "./RulesPage.scss";
import Pagination from "../../components/Pagination/Pagination";
import { useTranslation } from 'react-i18next';

const RulesPage4 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="rules_main-div">
      <h3>{t('rules_page4.title')}</h3>
      <h4>{t('rules_page4.title2')}</h4>
      <p>
        {t('rules_page4.2.1')} <br /> <br /> {t('rules_page4.2.2')} <br /> <br /> {t('rules_page4.2.3')}{" "}
        <br /> <br />
        {t('rules_page4.2.4')} <br /> <br /> {t('rules_page4.2.5')}
      </p>
      <h4>{t('rules_page4.title3')}</h4>
      <p>
        {t('rules_page4.3.1')} <br /> {t('rules_page4.3.2')} <br /> {t('rules_page4.3.3')} <br /> <br />{" "}
        <strong>{t('rules_page4.title4')}</strong>
        <br />
        {t('rules_page4.4.1')} <br /> <br /> {t('rules_page4.4.2')} <br /> {t('rules_page4.4.3')} <br /> {t('rules_page4.4.4')}
        <br />
        <br />
        <strong>{t('rules_page4.title5')}</strong> {t('rules_page4.5.1')}
        <strong>
          {t('rules_page4.5.2')}
        </strong>{" "}
        <br />
        <br />
        <strong>
          {t('rules_page4.title6')}{" "}
          <span className="blue_text">{t('rules_page4.6.1')}</span>;
        </strong>
      </p>
      <br />
      {/* <br /> */}
      <h4 className="blue_text">{t('rules_page4.title7')}</h4>
      <p>
        <strong>{t('rules_page4.7.1')}</strong>
        <br /><strong>{t('rules_page4.7.2')}</strong> 02702199710063 <strong>{t('rules_page4.7.3')}</strong>
        21633376
        <br />
        <strong>
          {t('rules_page4.7.4')}
        </strong>{" "}
        <br />
        <strong>{t('rules_page4.7.5')}</strong> <br />
        {t('rules_page4.7.6')} <br />
        <br /> {t('rules_page4.7.7')}
      </p>

      <Pagination />
    </div>
  );
};

export default RulesPage4;
