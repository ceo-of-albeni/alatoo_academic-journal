import React from "react";
import classes from "./HomePageWL.module.css";
import circle from "./img/circle.png";
import content from "./img/content.png";
import article from "./img/article.png";

export default function HomePageWL() {
    return (
        <div className={classes.container}>

            <div className={classes.title__area}>
                <div className={classes.title__area__inner}>
                    <div className={classes.title__area__text}>
                        <h1>Alatoo Academic Studies</h1>
                        <p>This is  a website for fictional company that develops an app that provides features and services its users </p>
                        <button>Join us</button>
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
                            <h2>This is a featured article - the most important piece of content</h2>
                            <p>Very short description what’s actually being discussed in this article, maybe the first senteces to provide a preview</p>
                            <button>Read Now</button>
                        </div>
                        <div className={classes.content__frame__img}>
                            <img src={content} alt="content" ></img>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classes.article__list}>
                <div className={classes.article__list__inner}>
                    <div className={classes.article__list__nav}>
                        <button>All articles</button>
                        <button>Category 1</button>
                        <button>Category 2</button>
                        <button>Category 3</button>
                    </div>
                    <div className={classes.article__list__tools}>
                        <div className={classes.article__list__tools__1}>
                            <div className={classes.article__list__tools__cards}>
                                <img src={article} alt="article"></img>
                                <div className={classes.article__list__tools__cards__text}>
                                    <p>CATEGORY 1</p>
                                    <h3>Change the article headline</h3>
                                    <a href="a">Read Now</a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.article__list__tools__2}>
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}