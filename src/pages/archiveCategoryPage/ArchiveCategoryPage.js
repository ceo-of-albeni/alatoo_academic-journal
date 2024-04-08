import React, { useState } from "react";
import classes from "./ArchiveCategoryPage.module.scss";
import arrow from "./img/arrow.svg";
import search from "./img/search.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

export default function ArchiveCategoryPage() {
  const navigate = useNavigate();

  const dropdowns = [
    {
      year: "2023, Том 23",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2022, Том 22",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2021, Том 21",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2020, Том 20",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2019, Том 19",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2018, Том 18",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2017, Том 17",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2016, Том 16",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2015, Том 14",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2013, Том 13",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2012, Том 12",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2011, Том 11",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2010, Том 10",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2009, Том 9",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2008, Том 8",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2007, Том 7",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
    {
      year: "2006, Том 6",
      releases: [
        {
          name: "Выпуск № 1",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
        {
          name: "Выпуск № 2",
          categories: [
            { name: "ФИЛОЛОГИЧЕСКИЕ НАУКИ", count: 10 },
            { name: "ПЕДАГОГИЧЕСКИЕ НАУКИ", count: 20 },
            { name: "ОБЩЕСТВЕННО – ГУМАНИТАРНЫЕ НАУКИ", count: 16 },
            { name: "МАТЕМАТИКА, ИНФОРМАТИКА", count: 4 },
          ],
        },
      ],
    },
  ];

  const [openSubs, setOpenSubs] = useState(Array(dropdowns.length).fill(false));

  const toggleOpenSub = index => {
    const updatedOpenSubs = [...openSubs];
    updatedOpenSubs[index] = !updatedOpenSubs[index];
    setOpenSubs(updatedOpenSubs);
  };

  return (
    <div className={classes.container}>
      <div className={classes.archive}>
        <div className={classes.archive__inner}>
          <div className={classes.back}>
              <a onClick={() => navigate("/archive")}>
                <img src={arrow} alt="arrow" />
                <p>Back</p>
              </a>
          </div>
          <div className={classes.archive__inner__1}>
            <div className={classes.years}>
              <div className={classes.search}>
                <div className={classes.filtration}>
                  <BasicDatePicker />
                </div>
                <form action="" className={classes.search__bar}>
                  <input type="text" placeholder="Search..." name="search" />
                  <button>
                    <img src={search} alt="search" />
                  </button>
                </form>
              </div>
              {dropdowns.map((dropdown, index) => (
                <div
                  key={index}
                  className={`${
                    openSubs[index] ? "" : classes.sub__menu__end
                  }`}>
                  <div
                    className={`${classes.year} ${
                      openSubs[index] ? classes.rotate : classes.rotate__end
                    }`}
                    onClick={() => toggleOpenSub(index)}>
                    <p>{dropdown.year}</p>
                    <i className="bx bx-chevron-right"></i>
                  </div>
                  <div
                    className={
                      openSubs[index]
                        ? classes.sub__menu
                        : classes.sub__menu__hide
                    }>
                    {dropdown.releases.map((release, releaseIndex) => (
                      <div key={releaseIndex} className={classes.release}>
                        <p>{release.name}</p>
                        <ul className={classes.sub__menu2}>
                          {release.categories.map((category, categoryIndex) => (
                            <li key={categoryIndex}>
                              <a href="/category__">
                                {category.name} <span>({category.count})</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.archive__inner__2}>
              <div className={classes.slider}>
                <Slider />
              </div>
              <div className={classes.text}>
                <h3>Ежеквартальный научный журнал</h3>
                <div className={classes.text1}>
                  <p>Учредитель:</p>
                  <p>Международный университет Ала-Тоо</p>
                </div>
                <div className={classes.text2}>
                  <p>
                    <b>Журнал</b> «Alatoo Academic Studies» включен в Перечень
                    рекомендованных Высшей аттестационной комиссией Кыргызской
                    Республики (ВАК КР) рецензируемых периодических изданий
                    (Приказ № 2 от 12 февраля 2008 г.)
                  </p>
                </div>
                <div className={classes.text3}>
                  <p>
                    ISSN: 1694-5263 <span>(печатная версия)</span>
                  </p>
                  <p>
                    ISSN: 1694-7916 <span>(электронная версия)</span>
                  </p>
                </div>
                <div className={classes.text4}>
                  <p>
                    <b>Адрес редакции:</b>
                  </p>
                  <p>
                    720048, Кыргызская Республика, г. Бишкек, мкр. Тунгуч, ул.
                    Анкара, 1/8
                  </p>
                  <p>
                    <b>тел.: </b>+996 (312) 63 14 25
                  </p>
                  <p>
                    <b>факс: </b>+996(312) 630409
                  </p>
                  <p>
                    <b>Е-mail: </b>aas@iaau.edu.kg
                  </p>
                </div>
                <div className={classes.text5}>
                  <p>
                    <b>РЕДАКЦИОННЫЙ СОВЕТ ЖУРНАЛА</b>
                  </p>
                  <p>
                    <b>Санжарбек Эрдолатов – </b>главный редактор, ректор
                    Международного университета «Ала-Тоо», канд.пед.наук;
                  </p>
                  <p>
                    <b>Салидин Калдыбаев – </b>зам. гл. редактора, д-р пед.наук,
                    профессор МУА (педагогика);
                  </p>
                  <p>
                    <b>Зеки Пекташ – </b>aas@iaau.edu.kg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
