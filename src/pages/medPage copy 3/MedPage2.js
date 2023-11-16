import React from "react";
import classes from "./MedPage2.module.css";
import med from "./img/med.svg";
import { useNavigate } from "react-router-dom";
import search from "./img/search.svg";
import arrow from "./img/arrow.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";




export default function MedPage2() {

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
                        <h3>Category: Medical Science</h3>
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
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2011, Tome 11</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2010, Tome 10</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2009, Tome 9</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2008, Tome 8</a>
                            </div>
                        </div>
                    </div>

                    <div id={classes.ct_child2} className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2007, Tome 7</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">2006, Tome 6</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.pagination__container}>
                        <button onClick={() => navigate("/medical_science")} id={classes.pagination_btn}>
                            1
                        </button>
                        <button onClick={() => navigate("/medical_science2")} id={classes.pagination_btn}>
                            2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}