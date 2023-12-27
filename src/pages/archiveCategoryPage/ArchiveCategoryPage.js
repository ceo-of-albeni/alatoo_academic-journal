import React, { useState } from "react";
import classes from "./ArchiveCategoryPage.module.css";
import arrow from "./img/arrow.svg"
import search from "./img/search.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";



export default function ArchiveCategoryPage() {

    const navigate = useNavigate();

    const dropdowns = [
        { year: "2023, Том 23", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2022, Том 22", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2021, Том 21", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2020, Том 20", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2019, Том 19", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2018, Том 18", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2017, Том 17", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2016, Том 16", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2015, Том 15", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2014, Том 14", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2013, Том 13", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2012, Том 12", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2011, Том 11", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2010, Том 10", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2009, Том 9", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2008, Том 8", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2007, Том 7", releases: ["Выпуск № 1", "Выпуск № 2"] },
        { year: "2006, Том 6", releases: ["Выпуск № 1", "Выпуск № 2"] },
      ];

    const [openSubs, setOpenSubs] = useState(Array(dropdowns.length).fill(false));

    const toggleOpenSub = (index) => {
        const updatedOpenSubs = [...openSubs];
        updatedOpenSubs[index] = !updatedOpenSubs[index];
        setOpenSubs(updatedOpenSubs);
    };

    return(
        <div className={classes.container}>
            <div className={classes.archive}>
                <div className={classes.archive__inner}>
                    <div className={classes.back}>
                        <img src={arrow} alt="arrow"/>
                        <a onClick={() => navigate("/archive")}>Back</a>
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
                    <div className={classes.archive__inner__1}>
                        <div className={classes.years}>
                            {dropdowns.map((dropdown, index) => (
                                <div key={index} className={`${openSubs[index] ? '' : classes.sub__menu__end}`}>
                                    <div className={`${classes.year} ${openSubs[index] ? classes.rotate : classes.rotate__end}` } onClick={() => toggleOpenSub(index)}>
                                        <p>{dropdown.year}</p>
                                        <i class='bx bx-chevron-right'></i>
                                    </div>
                                    <div className={openSubs[index] ? classes.sub__menu : classes.sub__menu__hide}>
                                        {dropdown.releases.map((release, releaseIndex) => (
                                            <div  className={classes.release}>
                                                <p>{release}</p>
                                                <ul className={classes.sub__menu2}>
                                                    <li><a href="#">ФИЛОЛОГИЧЕСКИЕ НАУКИ <span>(10)</span></a></li>
                                                    <li><a href="#">ПЕДАГОГИЧЕСКИЕ НАУКИ <span>(20)</span></a></li>
                                                    <li><a href="#">ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ <span>(16)</span></a></li>
                                                    <li><a href="#">МАТЕМАТИКА, ИНФОРМАТИКА <span>(4)</span></a></li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={classes.archive__inner__2}>
                        <div className={classes.slider}>
                            {/* SLIDER ALIIA */}
                        </div>
                        <div className={classes.text}>
                            <h3>Ежеквартальный научный журнал</h3>
                            <div className={classes.text1}>
                                <p>Учредитель:</p>
                                <p>Международный университет Ала-Тоо</p>
                            </div>
                            <div className={classes.text2}>
                                <p><b>Журнал</b> «Alatoo Academic Studies» включен в Перечень 
                                    рекомендованных Высшей аттестационной комиссией Кыргызской 
                                    Республики (ВАК КР) рецензируемых периодических изданий 
                                    (Приказ № 2 от 12 февраля 2008 г.)</p>
                            </div>
                            <div className={classes.text3}>
                                <p>ISSN: 1694-5263 <span>(печатная версия)</span></p>
                                <p>ISSN: 1694-7916 <span>(электронная версия)</span></p>
                            </div>
                            <div className={classes.text4}>
                                <p><b>Адрес редакции:</b></p>
                                <p>720048, Кыргызская Республика, г. Бишкек, мкр. Тунгуч, ул. Анкара, 1/8</p>
                                <p><b>тел.: </b>+996 (312) 63 14 25</p>
                                <p><b>факс: </b>+996(312) 630409</p>
                                <p><b>Е-mail: </b>aas@iaau.edu.kg</p>
                            </div>
                            <div className={classes.text5}>
                                <p><b>РЕДАКЦИОННЫЙ СОВЕТ ЖУРНАЛА</b></p>
                                <p><b>Санжарбек Эрдолатов – </b>главный редактор, ректор Международного университета «Ала-Тоо», канд.пед.наук;</p>
                                <p><b>Салидин Калдыбаев – </b>зам. гл. редактора, д-р пед.наук, профессор МУА (педагогика);</p>
                                <p><b>Зеки Пекташ – </b>aas@iaau.edu.kg</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}