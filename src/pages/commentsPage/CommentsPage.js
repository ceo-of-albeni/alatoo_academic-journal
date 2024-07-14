import React from 'react';
import { useTranslation } from "react-i18next";
import classes from './CommentsPage.module.scss';
import arrow from "./img/arrow.svg";
import { useNavigate } from 'react-router-dom';
import img from './img/user.png';
import comments from './img/comments.svg';
import CommentBox from '../../components/CommentsBox/CommentsBox';


export function CommentsPage() {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.container}>
            <div className={classes.comments}>
                <div className={classes.comments__inner}>
                    <div className={classes.back}>
                        <a onClick={() => navigate("/")}>
                            <img src={arrow} alt="arrow" />
                            <p>{t('archivepage.back')}</p>
                        </a>
                    </div>
                    <div className={classes.category}>
                        <p>CATEGORY: Philological science</p>
                        <h4>OCT 20th, 2023</h4>
                    </div>
                    <div className={classes.publish}>
                        <h2>Mathematical and Statistical Skills</h2>
                        <div className={classes.author}>
                            <img src={img} alt='img'/>
                            <div className={classes.author__name}>
                                <p>So Hyun Kim</p>
                                <p>Position AIU: Author</p>
                            </div>
                        </div>
                        <a href=''>Published</a>
                        <div className={classes.publish__text}>
                            <p>This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. </p>
                            <p>This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. This is the article name - headline  lorem ipsum. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                            <p>The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system. </p>
                        </div>
                    </div>
                    <div className={classes.comments__bar}>
                        <div className={classes.comments__text}>
                            <h4>2 Comments</h4>
                            <img src={comments} alt='comments_ico'/>
                        </div>
                        <div className={classes.comments__input}>
                            <CommentBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}