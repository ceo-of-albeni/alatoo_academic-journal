import React, { useState, useContext, useEffect } from "react";
import classes from "./HomePageWL.module.css";
import circle from "./img/circle.png";
import content from "./img/content.png";
import horizontal from "./img/horizontal.png";
import horizontal2 from "./img/horizontal2.png";
import horizontal3 from "./img/horizontal3.png";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Navbar/modals/login/Login";
import { authContext } from "../../contexts/authContext";
import { useTranslation } from 'react-i18next';

export default function HomePageWL(closeModal) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const { users, getUsers } = useContext(authContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getUsers();
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title__area}>
        <div className={classes.title__area__inner}>
          <div className={classes.title__area__text}>
            <h1>{t('home.title')}</h1>
            <p>{t('home.description')}</p>
            {localStorage.getItem("email") === null ? (
              <button onClick={openLoginModal}>{t('button.submit')}</button> // сделай чтоб открывался Логин
            ) : (
              users.map(item =>
                localStorage.getItem("email") === item.email ? (
                  <button
                    key={item.id}
                    onClick={() => navigate(`/profile/${item.id}`)}>
                    {t('button.submit')}
                  </button>
                ) : (
                  <span key={item.id}></span>
                )
              )
            )}
          </div>
          <div className={classes.title__area__img}>
            <div className={classes.circle}></div>
            <div className={classes.circle2}></div>
            <img src={circle} alt="circle"></img>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.content__inner}>
          <div className={classes.content__frame}>
            <div className={classes.content__frame__text}>
              <h2>
                {t('home.article_title')}
              </h2>
              <p>
                {t('home.article')}
              </p>
              <button onClick={() => navigate("/archive")}>{t('home.read')}</button>
            </div>
            <div className={classes.content__frame__img}>
              <img src={content} alt="content"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.horizontal__cards}>
        <div className={classes.horizontal__cards__inner}>
          <h2>{t('about.aboutus')}</h2>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text}>
              <h3>{t('about.title1')}</h3>
              <p>
                {t('about.content1')}{" "}
              </p>
            </div>
            <div className={classes.horizontal__card__img}>
              <img src={horizontal} alt="horizontal" />
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__img__2}>
              <img src={horizontal2} alt="horizontal2" />
            </div>
            <div className={classes.horizontal__card__text__2}>
              <h3>
                {t('about.title2')}
              </h3>
              <p>
                {t('about.content2.1')}{" "}
              </p>
              <p>
                {t('about.content2.2')}
              </p>
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text__3}>
              <h3>{t('about.title3')}</h3>
              <p>
                {t('about.content3.1')}
              </p>
              <p>
                {t('about.content3.2')}
              </p>
            </div>
            <div className={classes.horizontal__card__img__3}>
              <img src={horizontal3} alt="horizontal3" />
            </div>
          </div>
        </div>
      </div>
      {isLoginModalOpen && <Login closeModal={setIsLoginModalOpen} />}

      {/* <footer>
        <p>© 2023, Name</p>
      </footer> */}

      {/* <div></div> */}
    </div>
  );
}
