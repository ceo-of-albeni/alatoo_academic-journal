import React from "react";
import classes from "./HomePageWL.module.css";
import circle from "./img/circle.png";
import content from "./img/content.png";

export default function HomePageWL() {
    return (
        <div className={classes.container}>
            <div className={classes.title__area}>
                <div className={classes.title__area__inner}>
                    <div className={classes.title__area__inner__text}>
                        <h1>Alatoo Academic Studies</h1>
                        <p>This is  a website for fictional company that develops an app that provides features and services its users </p>
                        <button>Join us</button>
                    </div>
                    <div className={classes.title__area__inner__img}>
                        <div className={classes.circle}></div>
                        <div className={classes.circle2}></div>
                        <img src={circle} alt="circle"></img>
                    </div>
                </div>
            </div>


            <div className={classes.content}>
                <div className={classes.content__inner}>
                    <div className={classes.content__inner__title}>
                        <h1>Content</h1>
                    </div>
                    <div className={classes.content__inner__frame}>
                        <div className={classes.content__inner__frame__text}>
                            <h2>This is a featured article - the most important piece of content</h2>
                            <p>Very short description what’s actually being discussed in this article, maybe the first senteces to provide a preview</p>
                            <button>Read Now</button>
                        </div>
                        <div className={classes.content__inner__frame__img}>
                            <img src={content} alt="content" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}