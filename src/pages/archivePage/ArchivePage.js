import React from "react"
import classes from "./ArchivePage.module.css";
import biology from "./img/biology.svg";
import info from "./img/info.svg";
import math from "./img/math.svg";
import med from "./img/med.svg";
import philology from "./img/philology.svg";
import pedagog from "./img/pedagog.svg";
import gum from "./img/gum.svg";
import { useNavigate } from "react-router-dom";

export default function ArchivePage() {

    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.archive}>
                <div className={classes.archive__inner}>
                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img1} className={classes.category__tool__card}>
                                <img src={biology} alt="biology"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Biology</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img2} className={classes.category__tool__card}>
                                <img src={info} alt="inforamtics"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Informatics Science</h4>
                                <a onClick={() => navigate("/informatics_science")}>Go to</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img3} className={classes.category__tool__card}>
                                <img src={math} alt="math"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Mathematics Science</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img4} className={classes.category__tool__card}>
                                <img src={med} alt="medicine"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Medical Science</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.category__tools}>
                        <div className={classes.category__tool}>
                            <div id={classes.img5} className={classes.category__tool__card}>
                                <img src={philology} alt="philology"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Philological Science</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img6} className={classes.category__tool__card}>
                                <img src={pedagog} alt="pedagogocal"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Pedagogical Science</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                        <div className={classes.category__tool}>
                            <div id={classes.img7} className={classes.category__tool__card}>
                                <img src={gum} alt="humanitarian"/>
                            </div>
                            <div className={classes.category__tool__text}>
                                <p>CATEGORY</p>
                                <h4>Social and Humanitrain Science</h4>
                                <a href="">Go to</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}