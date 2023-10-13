import React from "react";
import classes from "./HomePageWL.module.css";
import circle from "./img/circle.png";
import content from "./img/content.png";
import article from "./img/article.png";
import horizontal from "./img/horizontal.png";
import horizontal2 from "./img/horizontal2.png";
import horizontal3 from "./img/horizontal3.png";

export default function HomePageWL() {
  return (
    <div className={classes.container}>
      <div className={classes.title__area}>
        <div className={classes.title__area__inner}>
          <div className={classes.title__area__text}>
            <h1>Академический журнал Ала-Тоо</h1>
            <h3>
              <b>
                Добро пожаловать на издательский сайт Международного
                Университета Ала-Тоо!
              </b>
            </h3>
            <p>
              Здесь у каждого пользователя появится возможность публиковать
              статьи и следить за страницей!<br></br>
              Присоединитесь, чтоб свободно добавлять информацию!{" "}
            </p>
            <button>Присоединиться</button>
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
          <div className={classes.content__title}>
            <h1>Content</h1>
          </div>
          <div className={classes.content__frame}>
            <div className={classes.content__frame__text}>
              <h2>
                This is a featured article - the most important piece of content
              </h2>
              <p>
                Very short description what’s actually being discussed in this
                article, maybe the first senteces to provide a preview
              </p>
              <button>Read Now</button>
            </div>
            <div className={classes.content__frame__img}>
              <img src={content} alt="content"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.article__list}>
        <div className={classes.article__list__inner}>
          <div className={classes.article__list__nav}>
            <button>Все статьи</button>
            <button>Category 1</button>
            <button>Category 2</button>
            <button>Category 3</button>
          </div>
          <div className={classes.article__list__tools}>
            <div className={classes.article__list__tool}>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
            </div>
            <div className={classes.article__list__tool}>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
              <div className={classes.article__list__tool__card}>
                <img src={article} alt="article"></img>
                <div className={classes.article__list__tool__card__text}>
                  <p>CATEGORY 1</p>
                  <h3>Change the article headline</h3>
                  <a href="a">Read Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.horizontal__cards}>
        <div className={classes.horizontal__cards__inner}>
          <h2>Horizontal Cards section</h2>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text}>
              <h3>Update headline here</h3>
              <p>
                SIMILAR HERE: Horizontal card description - this is where we
                describe maybe some features or benefits in more detail, provide
                more context, or just show anything we perceive to be important{" "}
              </p>
              <button>Learn more</button>
            </div>
            <div className={classes.horizontal__card__img}>
              <img src={horizontal} alt="horizontal" />
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__img}>
              <img src={horizontal2} alt="horizontal2" />
            </div>
            <div className={classes.horizontal__card__text}>
              <h3>Second headline here</h3>
              <p>
                Description of the second horizontal card here: Horizontal card
                description - this is where we describe maybe some features or
                benefits in more detail, provide more context, or just show
                anything we perceive to be important{" "}
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text}>
              <h3>Third headline text</h3>
              <p>
                Horizontal card description - this is where we describe maybe
                some features or benefits in more detail, provide more context,
                or just show anything we perceive to be important{" "}
              </p>
              <button>Learn more</button>
            </div>
            <div className={classes.horizontal__card__img}>
              <img src={horizontal3} alt="horizontal3" />
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <p>© 2023, Name</p>
      </footer> */}

      {/* <div></div> */}
    </div>
  );
}
