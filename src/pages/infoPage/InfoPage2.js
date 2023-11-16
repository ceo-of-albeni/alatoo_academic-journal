import React from "react";
import classes from "./InfoPage2.module.css";
import info from "./img/info.svg";
import { useNavigate } from "react-router-dom";




export default function InfoPage2() {

    const navigate = useNavigate();

    return(
        <div className={classes.container}>
            <div className={classes.archive}>
                <div className={classes.archive__inner}>
                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2011, Tome 11</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2010, Tome 10</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2009, Tome 9</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2008, Tome 8</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2007, Tome 7</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a href="">2006, Tome 6</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.pagination__container}>
                        <button onClick={() => navigate("/info1")} id={classes.pagination_btn}>
                            1
                        </button>
                        <button onClick={() => navigate("/info2")} id={classes.pagination_btn}>
                            2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}