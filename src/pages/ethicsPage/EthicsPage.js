import React from 'react';
import classes from './EthicsPage.module.css';
import { useNavigate } from 'react-router-dom';
import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';

export default function EthicsPage() {

    const { t, i18n } = useTranslation();
    
    const navigate = useNavigate();

    return (
        <div className={classes.ethics}>
            <div className={classes.container}>
                <div className={classes.back}>
                    <img src={arrow} alt="arrow" />
                    <a onClick={() => navigate("/archive")}>{t('archivepage.back')}</a>
                </div>
                <div className={classes.ethics_inner}>
                    <div className={classes.title}>
                        <h3>ALATOO ACADEMIC STUDIES</h3>
                        <p>ISSN: 1694-5263</p>
                    </div>
                    <div className={classes.text}>
                        <p>{t('ethicspage.content')}
                        </p>
                        <ol>
                            <li>{t('ethicspage.content1')}</li>
                            <li>{t('ethicspage.content2')}</li>
                            <li>{t('ethicspage.content3')}</li>
                            <li>{t('ethicspage.content4')}</li>
                            <li>
                                {t('ethicspage.content5')}
                                <ul>
                                    <li>{t('ethicspage.content5.1')}</li>
                                    <li>{t('ethicspage.content5.2')}</li>
                                    <li>{t('ethicspage.content5.3')}</li>
                                </ul>
                            </li>
                            <li>{t('ethicspage.content6')}
                                <ul>
                                    <li>{t('ethicspage.content6.1')}</li>
                                    <li>{t('ethicspage.content6.2')}</li>
                                    <li>{t('ethicspage.content6.3')}</li>
                                    <li>{t('ethicspage.content6.4')}</li>
                                    <li>{t('ethicspage.content6.5')}</li>
                                    <li>{t('ethicspage.content6.6')}</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}