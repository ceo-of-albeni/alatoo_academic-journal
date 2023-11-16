import React from "react";
import classes from "./MathPage.module.css";
import math from "./img/math.svg";
import { useNavigate } from "react-router-dom";
import search from "./img/search.svg";
import arrow from "./img/arrow.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";




export default function MathPage() {

    const navigate = useNavigate();

    return(
        <div className={classes.container}>
            <div className={classes.archive}>
                <div className={classes.archive__inner}>
                    <div className={classes.back}>
                        <img src={arrow} alt="arrow"/>
                        <a onClick={() => navigate("/archive")}>Back</a>
                    </div>
                    <div className={classes.category}>
                        <h3>Category: Mathematics Science</h3>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.filtration}>
                            <BasicDatePicker />
                        </div>
                        <form action="" className={classes.search__bar}>
                            <input type="text" placeholder="Search..." name="search"/>
                            <button><img src={search} alt="search"/></button>
                        </form>
                    </div>
                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2023, Tome 23</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2022, Tome 22</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2021, Tome 21</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2020, Tome 20</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2019, Tome 19</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2018, Tome 18</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2017, Tome 17</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2016, Tome 16</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2015, Tome 15</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2014, Tome 14</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2013, Tome 13</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">2012, Tome 12</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.pagination__container}>
                        <button onClick={() => navigate("/mathematics_science")} id={classes.pagination_btn}>
                            1
                        </button>
                        <button onClick={() => navigate("/mathematics_science2")} id={classes.pagination_btn}>
                            2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}