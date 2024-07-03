import React, { useState, useEffect } from "react";
import classes from "./ArchiveCategoryPage.module.scss";
import arrow from "./img/arrow.svg";
import search from "./img/search.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AddVolume } from "../../components/Navbar/modals/addVolume/AddVolume";
import { AddEdition } from "../../components/Navbar/modals/addEdition/AddEdition";
import { AddArticle } from "../../components/Navbar/modals/addArticle/AddArticle";
import { Delete } from "../../components/Navbar/modals/delete/Delete";
import { Edit } from "../../components/Navbar/modals/edit/Edit";

export default function ArchiveCategoryPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [dropdowns, setDropdowns] = useState([
    {
      year: "2023",
      tom: "Том 23",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1_OQnqlqOyzYnQZjSmMmODFziOWZqfQ0U/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/9IkGHXbXHN0gNJdvGMzM",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/5isUUUysZfNxUkm2MSZS",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/12S2bCsx1et1ehfB0m0S",
            },
            {
              name: "INFORMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
            },
            {
              name: "MATHEMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1QCCIeztso5-ByKWMHBR6TQQaBWGxrFJt/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/zJtq08HF4mlSAAS2UwMP",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/O2OcpzaOfz3KRBRXg4HI",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/QEgW5Ya3sNdLbMWzSCN2",
            },
            {
              name: "INFORMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/G8kDXxCEGINYdPrKU99n",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1VrtPfwvKtpVoCTSlqb8b2HJ5bTVUace1/view?usp=sharing",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/NXsGcIfq6flwBS5kxCVw",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/1NrdECqiKnvUYhv4knyy",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/re7qu73Oc9s2aC7XSDO0",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/QOPFF8p8dXz46RgIkPrw",
            },
            {
              name: "MATHEMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/zuGae4stptRILOCu6giq",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1VrtPfwvKtpVoCTSlqb8b2HJ5bTVUace1/view?usp=sharing",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/zPKCk23JF5wgRcupLBaN",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/tp2Q52y2KZFeJs9ty7Px",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/EFJkMEbDuIq8kxbjtQ9E",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/5oVj9O5opclG46zKjgek",
            },
          ],
        },
      ],
    },
    {
      year: "2022",
      tom: "Том 22",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1e3v41APUi51H5PxJj4dIaN9_nieuKQt-/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/ZIlyessSfUlKhZoQjJTMink",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/5VxWUud6txoEBOcKNxVG",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/kaX0oLnKZ0HXuYXRHgrX",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/ZeW0Gg19vOJiGQs2AOOf",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1AV8v0oVyGmz_QW-AAwLlk9Hu9u3HBQaY/view?usp=sharing",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/QvdlURZB0IGxsI3hi9aY",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/Fd6JqiIsQo5cBGDijsJO",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/jDamJcVutBpolpFPnozL",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/I7v0Dg5NUrDhpf0FmccI",
            },
            {
              name: "MATHEMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/cBJGeLvsU8w1aspMqSLI",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/18nUO8tywvaEwl0X_VzL65hL8RSFd77if/view?usp=sharing",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/ibkVu5ZyvyLmJUyCHrDB",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/KIKMyiAZcQVz0AVmZ08P",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/9QA5XkHGAA8Jj8TGdNbt",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/FW3HG3SBxmNgxYSwcyBH",
            },
            {
              name: "MATHEMATICS",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/dFWyI6A5xZdAb19moTU7",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1RNgwKaVmzaJnKlC0GiWWX_7SsnQNaIkZ/view?usp=sharing",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/fQFPOwuc9plGnN7RuUr3",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/GmPKdbr9mVsvYIPgmLEc",
            },
            {
              name: "SOCIAL AND HUMANITARIAN SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/XmnTrCfiMizHH16f97as",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/dL572tOn2ZNPSFPGMrGM",
            },
          ],
        },
      ],
    },
    {
      year: "2021",
      tom: "Том 21",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1nJsi7felKi2duHBDecK5hqOqALBsASlp/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/l4Qz21l9Wn6GcswRuIAi",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/G4KDNy04IGOiYoFdOfhx",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/ihNwvla8JFNRbuOSr5Xi",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/BoA6jtOrf6knrwVBjr2i",
            },
            {
              name: "КУЛЬТУРОЛОГИЯ СОЦИОЛОГИЯ ПОЛИТОЛОГИЯ ИСТОРИЯ",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/3lT9DEe4cGkjGWuox8Lz",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1rkGc0Tasxkiszjd7grVixbz0giV_ewPX/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/FfvByoIBZwQ83Vu47zuc",
            },
            {
              name: "PHILOSOPHY",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/VtCaqVDB2vN3oh8wY7MC",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/4FOs9PqFjYJ7j93EkX2F",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/0O9y9Jha1FvtQ3tU7MX8",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/o5GsuvTKHzQdB1JwoUyX",
            },
            {
              name: "ЖУРНАЛИСТИКА",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/tUbbxD9QpZQGWmj177AP",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/GWH0QBNQFXf7UYWUCth0",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1B7TOvHGIa0ch8C92d_-FWc4hx7EKjju5/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/yiLRpvLycl42MGQxh0fN",
            },
            {
              name: "ФИЛОСОФИЯ ИСТОРИЯ ЖУРНАЛИСТИКА ЭКОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/Mfs3NC9q4FatA6bEqdUG",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/StXtgUIm38C0SZ9H76Lm",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/F23AmaI1y5LhsTGY2vYq",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/qOdUAlAtqq3BHmgpR3Wz",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/D3ACuyAlVhablCIPK4xE",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1e0aLA4h_av9qq2Um1XvM6KLT9VB9YB51/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/urPwGKtGtmBJUYOKvAkT",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/xmSxvQZcjM93lFJJPyfi",
            },
            {
              name: "ФИЗИКА ИНФОРМАТИКА",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/yBCxvyBALg269mCMhwIW",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/pAvgTTZfoIvf6sNORvGv",
            },
            {
              name: "ЖУРНАЛИСТИКА ИСТОРИЯ ФИЛОСОФИЯ",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/fNjPKqxalltzWpyLtxDv",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/CkAg0yZlJVWgjnql2wRc",
            },
          ],
        },
        // {
        //   name: "Special Release",
        //   tomLink: "https://drive.google.com/file/d/1LAmx8X0rE-_dENHsH9Osea9G0I5F7W3w/view",
        //   categories: [
        //     { name: "Атайын_чыгарылыш", count: 10, link: "" },
        //   ],
        // },
      ],
    },
    {
      year: "2020",
      tom: "Том 20",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1KyDkzIv5Y2g4_5WsA7Md8UAPiO-OB56H/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/gMcjMK6RvyHJTuyOXlFz",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/w1NGIyzC6cflvGRWC8AE",
            },
            {
              name: "СЕЛЬСКОХОЗЯЙСТВЕННЫЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/LRjt5n6lpB0bR7rVl9Y2",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/viVF28wfvfsHndMf2pI9",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/9KfYh35nyGUREyiCg94O",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1aHa-yjdeP88UvXVWdMGNTuuKx8fvZQm-/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/quTkdxfbYNfSbVhySaSn",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/7sLQe8UHFRhndLEprXcr",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/1MzXk4stwyIcj6DsFDAz",
            },
            {
              name: "ИСТОРИЯ ФИЛОСОФИЯ КУЛЬТУРОЛОГИЯ СОЦИОЛОГИЯ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/LpvvoXff4BB8dC3xFvffvRjt5n6lpB0bR7rVl9Y2",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/z4wBtBykq0LQVZMCN4YI",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/hUAhiXjV3eDgREdJqNCZ",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/16QeZNQwu1a_G35IQbWL_JB7o2FR6VxWr/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/jSESRbFqsZU78uXqK3gc",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/zuo8JgalwmHmHxuiLPHy",
            },
            {
              name: "SOCIOLOGY",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/TBpz0KnzlGRWZOY1Kf03",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/UoIYaHPKxve5laE0STpS",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/chWdQ6aOzKpvd3VtbHFM",
            },
            { name: "ПОЛИТОЛОГИЯ", count: 16, link: "" },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1oLbvKl2lur1O6Qj7_pV0gvrCiITu5ic0/view",
          categories: [
            {
              name: "ЮРИДИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/N8gWQwB8y7JY6Sl5kXNV",
            },
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/sNG9mdBSIhtK0mEzOo2e",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/Rv1ODZQwIpOTGHTqHEfx",
            },
            {
              name: "SOCIOLOGY",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/yVt0LCWnEWArwmW8NrOC",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/6c9QpdNTEu8GhZAFlFxI",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 4,
              link: "https://aas.alatoo.edu.kg/article/peMI6HgHNgTmKoimGGKm",
            },
            {
              name: "BIOLOGY",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/CiiyZX64pzeLiEj3JIZ3",
            },
          ],
        },
      ],
    },
    {
      year: "2019",
      tom: "Том 19",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/11SJ4708CZESdPj-1osGaMAlLxSn7LkpU/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/3l818sQWh3z6VWd2i4lv",
            },
            {
              name: "SOCIOLOGY",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/DsBY8uEmErIxT4oIxBFk",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/zKElOl61E1up8XWweTNp",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ",
              count: 10,
              link: "ГОСУДАРСТВО И ПРАВО. ЮРИДИЧЕСКИЕ НАУКИ",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/u/1/d/17cRp8DuhB-keSKa-VofNjNynLv__MImM/view?usp=drive_open",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/EGSAj28Dl60cjqN3dWRG",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/xIe3dqzXSifIF9aran6S",
            },
            {
              name: "ИСТОРИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/bgiUfomsREWVcctCoJPU",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/5LfhKiaqL67zJWkRMJu2",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/052AuIMFSclQ3xjI91V2",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/16bFPRZHPr0ePq7Ht_6rd6prn14ko2kbx/view",
          categories: [
            {
              name: "ЮРИДИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/NrUGpSrD2KAtcKHSVCgv",
            },
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/NRsTrGWm01WPSfBqEhI5",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/NSKNtRnUKUT4qcFByU6l",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/L0UscpnViCfv99y93VX1",
            },
            {
              name: "ИСТОРИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/L3IgjrJ9Uzx1xkplLH6H",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1M1su_cLiur8sASUUMGninOrxjGu-0w_W/view",
          categories: [
            {
              name: "ЮРИДИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/nT12ZymgNGoDXYd65Zv0",
            },
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/hlf5BJxwlCemyduskoHM",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/8mmQJNE7NQPYnNwiJeZS",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/pAzlZjQ4fOFS5Pl88akk",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/j2vIISDCYGrj5cnacLBh",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/CQOE7I0cBNVX8xtr9HWN",
            },
            {
              name: "ИСТОРИЯ",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/whcPYYBuCY1SidpviF2X",
            },
            {
              name: "ИНФОРМАТИКА МАТЕМАТИКА ФИЗИКА",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/JEUkM7WotknyNwP7dsPJ",
            },
          ],
        },
      ],
    },
    {
      year: "2018",
      tom: "Том 18",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/16UHJl7AYq141J_yThcY9zQ0BxCUT18Rt/view",
          categories: [
            {
              name: "ЯЗЫКОЗНАНИЕ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/4wj5QIJP7oSwTnRZWLEA",
            },
            {
              name: "ECOLOGY ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/y2VaguBItVhH3L6Bz1Y0",
            },
            {
              name: "ПОЛИТИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/NpvLy6r2nUkIUfHRwbKX",
            },
            {
              name: "ОБЩАЯ ПЕДАГОГИКА НАРОДНОЕ ОБРАЗОВАНИЕ ПЕДАГОГИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/t22ZIONmUARlxLumtk7e",
            },
            {
              name: "ИНФОРМАТИКА МАТЕМАТИКА ФИЗИКА SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/JsOxbeOudDUxb9EmijtP",
            },
            {
              name: "ЖУРНАЛИСТИКА",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/Hx1GoX2xv212ibxH10YU",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1nHfOggYwRoVc-4AGhyY3H_11GMGz_UF-/view",
          categories: [
            {
              name: "ЮРИДИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/YHDtOtmSAqZ4CJfI8wDx",
            },
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/08Q6taSxdinYfb7La5aD",
            },
            {
              name: "ФИЛОСОФИЯ ИСТОРИЯ ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/qU0UlNhBuwBtBr2eZyy0",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/A92sBRHS8ndOrYtqKhs0",
            },
            {
              name: "ТЕХНИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/iZ2PdX7LBCYTkaRiQYeb",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/K2NJ6BggzCUC7ONay67P",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1z8noZDFxqTjam4N2Qedy4s096vikTOdd/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/XqiqDp5CQ8YSgeGheU9z",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/ZvuvbiJVwAEQ2aaiaCMe",
            },
            {
              name: "СОЦИОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/wyo7LinohzJwyT8Fcz8L",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/QIcytUCuz2NEuKt0lUEs",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/TbDgfoWjaMFzZKBlmBAR",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/17DLvbnGR43BKyh3oe42w6EtsC8ZOD1ux/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/AqNEnu7oGfHc3qDcKty7",
            },
            {
              name: "ТЕХНИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/cp6NxAVzZRKxyewYsTDx",
            },
            {
              name: "SOCIOLOGY",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/rBwttSb3t63rhIfnoLpY",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/G2AZU0FQvhHFfhh6NCEX",
            },
            {
              name: "MEDICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/0lRgV09b4zK5hJMEOdyB",
            },
            {
              name: "ГОСУДАРСТВО И ПРАВО ЮРИДИЧЕСКИЕ НАУКИ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/okYEH1LLyFfayl0brrcT",
            },
          ],
        },
      ],
    },
    {
      year: "2017",
      tom: "Том 17",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1cFTeCQytKMkpxFoCnNFUiDqLWSYf5YvE/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/H31RzprNindWyn1HVh5N",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/iol6OpdeUsMoCLYkQSuf",
            },
            {
              name: "SOCIOLOGY",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/U1vqCn8YZI5AscEiAJmE",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/8xLdtuldy6bMFVi08GqJ",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/EnT7YdaLaGR3z8UugqSo",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1ws2nffATv1oST8uyBDWmrYv5Gw7qSJ2h/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/Fb9Rpq9wnufxcaPMyQ3A",
            },
            {
              name: "ФИЛОСОФИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/0NMxTVrvtJvBqn0b1ODc",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/3kdEl19nRFE28NQBd1XC",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/FKGjhEAJjNNaHSgpgklX",
            },
            {
              name: "SOCIOLOGY",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/guHkV8d1hefy7bWecm3Q",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/KDiB9X2MNR6eh3LL3AS3",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/6WbeaPHo8vUADobc3XDY",
            },
            {
              name: "ИСТОРИЯ",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/zozD699kw1GDOeMQoaJq",
            },
            {
              name: "ГЕОЛОГИЯ ЭКОЛОГИЯ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/7r35XGWwHx5WpDpVIHEg",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1Z1SMkNwYl9HQmzPOTukZ9TjXTeFQfMjP/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/HZcBxf17K3PrNWKp0OEx",
            },
            {
              name: "PHILOSOPHY",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/37OS3BLqgSAwZPnSlyZS",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/SOVmf9TwvNAuxJ16gU6N",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/6yo9DjMapzrAPi6zeXcw",
            },
            {
              name: "SOCIOLOGY",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/0CgjGypvson2zNCzmqp8",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/uEPfG4rxyYRnr008uZX6",
            },
            {
              name: "HISTORY",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/mZNxTJBBDp0qllJutnRT",
            },
            {
              name: "ГЕОЛОГИЯ ЭКОЛОГИЯ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/JCd3gA9IyhPq2vJqklfq",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1UN-MNkuWzPigF6CLq0R4vZw_yY9I138l/view",
          categories: [
            {
              name: "ЯЗЫКОЗНАНИЕ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/ocDYJzlQtN5JNPejpNWz",
            },
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/bMJRlaZvg010huyt3E1H",
            },
            {
              name: "PHILOSOPHY",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/FQNngTKpJpPgzFn84Xwa",
            },
            {
              name: "ПОЛИТИЧЕСКИЕ НАУКИ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/JYsLvw6TqombSFD92Tyi",
            },
            {
              name: "ОБЩАЯ ПЕДАГОГИКА НАРОДНОЕ ОБРАЗОВАНИЕ ПЕДАГОГИКА",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/UihOezJPVQ0mWpdivvyD",
            },
            {
              name: "ЛИТЕРАТУРА ЛИТЕРАТУРОВЕДЕНИЕ УСТНОЕ НАРОДНОЕ ТВОРЧЕСТВО",
              count: 16,
              link: "https://aas.alatoo.edu.kg/article/jt0HriOLhUb15By2baK4",
            },
            {
              name: "ИСКУССТВО ИСКУССТВОВЕДЕНИЕ",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/QdVc2yAxinyo63wntSt1",
            },
          ],
        },
      ],
    },
    {
      year: "2016",
      tom: "Том 16",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1MiJoSAcIGwe_jctlfrSCdh8-eu3_gZxW/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/WYKFwSr5K9N47WfFf0yf",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/qmXTnGXKTh7OoxiHP5tg",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/jFUvQ58pG6h5mmL1LFPO",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/gZnDCP4lawcmZNdFMAb9",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/Maqr3YzqFKlRGDseAXid",
            },
            {
              name: "ГЕОЛОГИЯ ЭКОЛОГИЯ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/IGNksOAnAiakED6Cov0Z",
            },
          ],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1Bnr13WCx4y_OpNKffXtGP_YSdSKFvqmw/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/LiEviWWz3XQvb8c6HOgp",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/I8b0MhrpMmRogooWg7lb",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/NsgWlPqTKOi1JsIQ6ATo",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/ry8aatXruSLRclaCyw5o",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/HHQWKG8RqAHyzeeA1nWt",
            },
            {
              name: "ГЕОЛОГИЯ ЭКОЛОГИЯ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/SxPlV8E6xkBp51NXz6vN",
            },
          ],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1RxcGbMWNbUIT62hwkcv4dpRS61adBv7b/view",
          categories: [
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/8sKVEmURYObIcUdpTtrb",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/BXey0AsRH3XdSP6q4wx0",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/dGweU4BlDq7MrWd47Lyu",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/EHPf8oSmexgR1VSFB1Su",
            },
          ],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1rFG9PHLlp3k0osjPxjGArZQXgaD0RboL/view",
          categories: [
            {
              name: "ECONOMICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/TU6BQQ4xl80OedkyPUiy",
            },
            {
              name: "PHILOLOGICAL SCIENCE",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/djDFnvZ4m5CZQSvvrM2T",
            },
            {
              name: "ФИЗИКА МАТЕМАТИКА И ТЕХНИКА",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/CjedYBbzXq6D3o3PW71b",
            },
            {
              name: "ПОЛИТОЛОГИЯ",
              count: 10,
              link: "https://aas.alatoo.edu.kg/article/kWeoRRO0QCQo1GlIZMfk",
            },
            {
              name: "PEDAGOGICAL SCIENCE",
              count: 20,
              link: "https://aas.alatoo.edu.kg/article/99s3VgmAlIOVc0v4wg78",
            },
          ],
        },
      ],
    },
    {
      year: "2015",
      tom: "Том 15",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1cohxA2gXov1jAZWLStC2e4YY2t0I3oBT/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1-87hwc0HGgtm-ycL60CihoJFON6zNukM/view",
          categories: [],
        },
        {
          name: "3",
          tomLink:
            "https://drive.google.com/file/d/1UlS7lO36DHnuV39Su3S1oo6T0sTb4ANt/view",
          categories: [],
        },
        {
          name: "4",
          tomLink:
            "https://drive.google.com/file/d/1mqMgK8LQRa0ztzrSRMSYBdH2jvJRloUY/view",
          categories: [],
        },
      ],
    },
    {
      year: "2014",
      tom: "Том 14",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/11d5fPw_ncROYRlmqQ61tz1nfMgF6wQBi/view",
          categories: [],
        },
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/18mj7mI89VjKAGq5pQX67SZiKY6su1GTU/view",
          categories: [],
        },
      ],
    },
    {
      year: "2013",
      tom: "Том 13",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/15xpNW8yfupg2ZAQaIB1LdqBMMq78oBUC/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1LbrwXA6Y54tvWAQmOlyyTPZnu0U30Yzc/view",
          categories: [],
        },
      ],
    },
    {
      year: "2012",
      tom: "Том 12",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1DQv0IMUe_Rifwq301mWQ8sYpakwTO2nr/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/19W6fvUcECW9VsUBJ-C8K7X7hrde119fg/view",
          categories: [],
        },
      ],
    },
    {
      year: "2011",
      tom: "Том 11",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1i1vB-xRm8DA7ukQiVmD1m1MijluBzhvk/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1ij2rAc-XIVbSyPalKb9pqOoYm8wyfHrA/view",
          categories: [],
        },
      ],
    },
    {
      year: "2010",
      tom: "Том 10",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1RGA1N6URZOsRPVO0VgIG8rBYtz8M73eU/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1alMBNS_zSSu0haVbl3V92VTj2fryWMwC/view",
          categories: [],
        },
      ],
    },
    {
      year: "2009",
      tom: "Том 09",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1BrTwxqO-VrBVN6J27I6xePgSz4PCgqQ8/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1XCtx2VOQKwO8YzxjOyAtKC8cc6lvbvXv/view",
          categories: [],
        },
      ],
    },
    {
      year: "2008",
      tom: "Том 08",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1Yati5rb-gUUwp_akp_J2QK2XsyEmssBu/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1FYurHzh94ErWrCjQxDQ3829ZJTURte2n/view",
          categories: [],
        },
      ],
    },
    {
      year: "2007",
      tom: "Том 07",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1htkh9E0lwLv5CwWxEHriy3Do0-aqvgEZ/view",
          categories: [],
        },
        {
          name: "2",
          tomLink:
            "https://drive.google.com/file/d/1je0OTwSu3jMgft0CdXNM_L2K32w3z4E9/view",
          categories: [],
        },
      ],
    },
    {
      year: "2006",
      tom: "Том 06",
      releases: [
        {
          name: "1",
          tomLink:
            "https://drive.google.com/file/d/1X7Khq0_0WWoO4S551fVU_NdIa2KOjKPp/view",
          categories: [],
        },
      ],
    },
  ]);

  const [openSubs, setOpenSubs] = useState(Array(dropdowns.length).fill(false));

  const toggleOpenSub = index => {
    const updatedOpenSubs = [...openSubs];
    updatedOpenSubs[index] = !updatedOpenSubs[index];
    setOpenSubs(updatedOpenSubs);
  };

  const [openCouns, setOpenCouns] = useState(false);

  const toggleOpenCoun = () => {
    setOpenCouns(!openCouns);
  };

  // const addVolume = () => {
  //   setDropdowns([
  //     ...dropdowns,
  //     { year: '', tom: '', releases: [{ name: '', tomLink: '', categories: [] }] },
  //   ]);
  //   setOpenSubs([...openSubs, false]);
  // };

  // const addRelease = (index) => {
  //   const newDropdowns = [...dropdowns];
  //   newDropdowns[index].releases.push({ name: '', tomLink: '', categories: [] });
  //   setDropdowns(newDropdowns);
  // };

  // const addArticle = (dropdownIndex, releaseIndex) => {
  //   const newDropdowns = [...dropdowns];
  //   newDropdowns[dropdownIndex].releases[releaseIndex].categories.push({
  //     name: '',
  //     link: '#',
  //   });
  //   setDropdowns(newDropdowns);
  // };

  const [activeVolume, setActiveVolume] = useState(null);
  const [activeEdition, setActiveEdition] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeDelete, setActiveDelete] = useState(null);
  const [activeEdit, setActiveEdit] = useState(null);

  const openVolumeModal = () => {
    if (activeVolume === null) {
      setActiveVolume("addVolume");
    }
  };

  const openEditionModal = () => {
    if (activeEdition === null) {
      setActiveEdition("addEdition");
    }
  };

  const openArticleModal = () => {
    if (activeArticle === null) {
      setActiveArticle("addArticle");
    }
  };
  
  const openDeleteModal = () => {
    if (activeDelete === null) {
      setActiveDelete("delete");
    }
  };
  const openEditModal = () => {
    if (activeEdit === null) {
      setActiveEdit("edit");
    }
  };

  const closeModalHandler = () => {
    setActiveVolume(null);
    setActiveEdition(null);
    setActiveArticle(null);
    setActiveDelete(null);
    setActiveEdit(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.archive}>
        <div className={classes.archive__inner}>
          <div className={classes.back}>
            <a onClick={() => navigate("/")}>
              <img src={arrow} alt="arrow" />
              <p>{t('archivepage.back')}</p>
            </a>
          </div>
          <div className={classes.archive__inner__1}>
            <div className={classes.years}>
              <br />
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
              <div className={classes.add__vol}>
                <p>+</p>
                <button onClick={openVolumeModal}>Add Volume</button>
              </div>
              {dropdowns.map((dropdown, index) => (
                <div
                  key={index}
                  className={`${openSubs[index] ? "" : classes.sub__menu__end}`}>
                  <div className={classes.trash}>
                    <div
                      className={`${classes.year} ${
                        openSubs[index] ? classes.rotate : classes.rotate__end
                      }`}
                      onClick={() => toggleOpenSub(index)}>
                      <p>
                        {dropdown.year}, {dropdown.tom}
                      </p>
                      <i className="bx bx-chevron-right"></i>
                    </div>
                    <FontAwesomeIcon icon={faTrash} className={classes.trash__icon} onClick={openDeleteModal}/>
                  </div>
                  <div
                    className={
                      openSubs[index]
                        ? classes.sub__menu
                        : classes.sub__menu__hide
                    }>
                    <div className={classes.add__edit}>
                      <p>+</p>
                      <button onClick={openEditionModal}>Edition</button>
                    </div>
                    {dropdown.releases.map((release, releaseIndex) => (
                      <div key={releaseIndex} className={classes.release}>
                        <div className={classes.trash2}>
                          <p className={classes.release_link_a}>
                            Выпуск № {release.name}
                          </p>
                          <FontAwesomeIcon icon={faTrash} className={classes.trash__icon2} onClick={openDeleteModal}/>
                        </div>
                        <div className={classes.add__art}>
                          <p>+</p>
                          <button onClick={openArticleModal}>Add article</button>
                        </div>
                        <ul className={classes.sub__menu2}>
                          {release.categories.map((category, categoryIndex) => (
                            <li key={categoryIndex}>
                              <a href={category.link}>
                                {category.name} {/*<span>({category.count})</span>*/}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={`${openCouns ? "" : classes.sub__couns__end}`}>
                <div
                  className={`${classes.council} ${
                    openCouns ? classes.rotate : classes.rotate__end
                  }`}
                  onClick={toggleOpenCoun}>
                  <p>{t('archivepage.council')}</p>
                  <i className="bx bx-chevron-right"></i>
                </div>
                <div
                  className={
                    openCouns ? classes.sub__couns : classes.sub__couns__hide
                  }>
                  <div className={classes.members}>
                    <p>
                      1. Эдилова Мариям Миталиповна, д. филос. наук, профессор МУА
                      (философия);
                    </p>
                    <p>
                      2. Тогусаков Осмон Асанкулович, д. филос. наук, профессор,
                      член-корреспондент НАН КР (философия);
                    </p>
                    <p>
                      3. Дыйканбаева Гульнура Каныбековна, канд. филос. наук,
                      доцент МУА (философия);
                    </p>
                    <p>
                      4. Гусейнова Мавлюда Джабировна, канд. куль. наук, доцент
                      МУА (культурология);
                    </p>
                    <p>5. Кенан Гумуштекин, PhD, доцент МУА (медицина);</p>
                    <p>
                      6. Кыдыралиева Рыскуль Бекбоевна, д. мед. наук, профессор,
                      МУА (медицина);
                    </p>
                    <p>
                      7. Мусуралиева Гульнара Турсунбековна, канд. мед. наук,
                      доцент, МУА (микробиология);
                    </p>
                    <p>
                      8. Малтабаров Бакытбек Амирович, канд. социол. наук, доцент
                      БГУ им. К. Карасаева (социология);
                    </p>
                    <p>9. Халил Коч, канд. экон. наук, доцент МУА (экономика);</p>
                    <p>
                      10. Эсеналиева Назира Солтонбекона, канд. экон. наук, доцент
                      МУА (экономика);
                    </p>
                    <p>
                      11. Акмолдоев Кыялбек Маматалиевич, PhD, доцент МУА
                      (экономика);
                    </p>
                    <p>
                      12. Жоробеков Жолборс Жоробекович, д. полит. наук, профессор
                      КНУ им. Ж. Баласагына (политология);
                    </p>
                    <p>
                      13. Халим Незихоглу, канд. полит. наук, доцент МУА
                      (политология);
                    </p>
                    <p>
                      14. Ибрахим Конжак, канд. полит. наук, доцент МУА
                      (политология);
                    </p>
                    <p>
                      15. Усубалиев Бейшенбай Шеңкеевич, д. филол. наук, профессор
                      Восточного Университета им. М. Кашгари-Барскани (кыргызское
                      языкознание);
                    </p>
                    <p>
                      16. Жузупекова Кундуз Нуркалыковна, канд. филол. наук,
                      доцент МУА (филология);
                    </p>
                    <p>
                      17. Садыков Ташполот Садыкович д. филол. наук, профессор МУА
                      (тюркология);
                    </p>
                    <p>
                      18. Казакова Нурзат Аскаровна, канд. филол. наук, доцент МУА
                      (филология);
                    </p>
                    <p>
                      19. Жаманбаев Мурат Адырович д.физ.-мат. наук, профессор КТУ
                      им. И. Раззакова (математика);
                    </p>
                    <p>20. Иса Муслу, PhD, доцент МУА (математика);</p>
                    <p>
                      21. Исаев Руслан Рамилевич, к. физ.-мат. наук., доцент МУА
                      (информатика);
                    </p>
                    <p>
                      22. Жакшылыков Жылдызбек Жакшылыкович, канд. пед. наук,
                      доцент МУА (педагогика);
                    </p>
                    <p>
                      23. Жолчиева Айнуру Алибековна, канд. пед. наук, доцент МУА
                      (педагогика);
                    </p>
                    <p>
                      24. Исмаилов Нурлан Асанович, канд. юрид. наук, доцент МУА
                      (юриспруденция);
                    </p>
                    <p>
                      25. Тегизбекова Жылдыз Чынарбековна, канд. юрид. наук,
                      доцент МУА (юриспруденция).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.archive__inner__2}>
              <div className={classes.slider}>
                <Slider />
              </div>
              <div className={classes.text}>
                <h3>{t('archivepage.title')}</h3>
                <div className={classes.text1}>
                  <p>{t('archivepage.title2')}</p>
                  <p>{t('archivepage.title3')}</p>
                </div>
                <div className={classes.text2}>
                  <p>
                    <b>{t('archivepage.title4')}</b> {t('archivepage.4.content')}
                  </p>
                </div>
                <div className={classes.text3}>
                  <p>
                    ISSN: 1694-5263 <span>{t('archivepage.version1')}</span>
                  </p>
                  <p>
                    ISSN: 1694-7916 <span>{t('archivepage.version2')}</span>
                  </p>
                </div>
                <div className={classes.text4}>
                  <p>
                    <b>{t('archivepage.title5')}</b>
                  </p>
                  <p>
                  {t('archivepage.address')}
                  </p>
                  <p>
                    <b>{t('archivepage.tel')}</b>+996 (312) 63 14 25
                  </p>
                  <p>
                    <b>{t('archivepage.fax')}</b>+996(312) 630409
                  </p>
                  <p>
                    <b>Е-mail: </b>aas@iaau.edu.kg
                  </p>
                </div>
                <div className={classes.text5}>
                  <p>
                    <b>{t('archivepage.board')}</b>
                  </p>
                  <p>
                    <b>{t('archivepage.name')}</b>{t('archivepage.description')}
                  </p>
                  <p>
                    <b>{t('archivepage.name2')}</b>{t('archivepage.description2')}
                  </p>
                  <p>
                    <b>{t('archivepage.name3')}</b>aas@iaau.edu.kg
                  </p>
                </div>
                <button className={classes.edit} onClick={openEditModal}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeVolume === "addVolume" && <AddVolume closeModal={closeModalHandler} />}
      {activeEdition === "addEdition" && <AddEdition closeModal={closeModalHandler} />}
      {activeArticle === "addArticle" && <AddArticle closeModal={closeModalHandler} />}
      {activeDelete === "delete" && <Delete closeModal={closeModalHandler} />}
      {activeEdit === "edit" && <Edit closeModal={closeModalHandler} />}
    </div>
  );
}
