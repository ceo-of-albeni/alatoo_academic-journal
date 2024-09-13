import React, { useState, useEffect, useContext } from "react";
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
import DOMPurify from 'dompurify';
import { articlesContext } from "../../contexts/articleContext";

export default function ArchiveCategoryPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();


  const [data, setData] = useState({
    description: "Журнал  «Alatoo Academic Studies» включен в Перечень рекомендованных Высшей аттестационной комиссией Кыргызской Республики (ВАК КР) рецензируемых периодических изданий (Приказ № 2 от 12 февраля 2008 г.)",
    // rulesUrl: "https://aas.alatoo.edu.kg/assets/files/rules_for_authors_2023.doc",
    // reviewerRulesUrl: "https://aas.alatoo.edu.kg/assets/files/%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D1%80%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%B5%D0%B9%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D0%B2%20%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%20AAS.docx",
    // publicationEthicsRu: "https://aas.alatoo.edu.kg/publication-ru",
    // publicationEthicEn: "https://aas.alatoo.edu.kg/publication-en",
    editorialCouncil: "Санжарбек Эрдолатов – главный редактор, ректор Международного университета «Ала-Тоо», канд.пед.наук;\n Салидин Калдыбаев – зам. гл. редактора, д-р пед.наук, профессор МУА (педагогика);\n      Зеки Пекташ – координатор, редактор «AAS» МУА, канд.пед.наук, доцент (педагогика)",
    councilMembers: "1. Эдилова Мариям Миталиповна, д. филос. наук, профессор МУА (философия);\n    2. Тогусаков Осмон Асанкулович, д. филос. наук, профессор, член-корреспондент НАН КР (философия);\n    3. Дыйканбаева Гульнура Каныбековна, канд. филос. наук, доцент МУА (философия);\n    4. Гусейнова Мавлюда Джабировна, канд. куль. наук, доцент МУА (культурология);\n    5. Кенан Гумуштекин, PhD, доцент МУА (медицина);\n    6. Кыдыралиева Рыскуль Бекбоевна, д. мед. наук, профессор, МУА (медицина);\n    7. Мусуралиева Гульнара Турсунбековна, канд. мед. наук, доцент, МУА (микробиология);\n    8. Малтабаров Бакытбек Амирович, канд. социол. наук, доцент БГУ им. К. Карасаева (социология);\n    9. Халил Коч, канд. экон. наук, доцент МУА (экономика);\n    10. Эсеналиева Назира Солтонбекона, канд. экон. наук, доцент МУА (экономика);\n    11. Акмолдоев Кыялбек Маматалиевич, PhD, доцент МУА (экономика);\n    12. Жоробеков Жолборс Жоробекович, д. полит. наук, профессор КНУ им. Ж. Баласагына (политология);\n    13. Халим Незихоглу, канд. полит. наук, доцент МУА (политология);\n    14. Ибрахим Конжак, канд. полит. наук, доцент МУА (политология);\n    15. Усубалиев Бейшенбай Шеңкеевич, д. филол. наук, профессор Восточного Университета им. М. Кашгари-Барскани (кыргызское языкознание);\n    16. Жузупекова Кундуз Нуркалыковна, канд. филол. наук, доцент МУА (филология);\n    17. Садыков Ташполот Садыкович д. филол. наук, профессор МУА (тюркология);\n    18. Казакова Нурзат Аскаровна, канд. филол. наук, доцент МУА (филология);\n    19. Жаманбаев Мурат Адырович д.физ.-мат. наук, профессор КТУ им. И. Раззакова (математика);\n    20. Иса Муслу, PhD, доцент МУА (математика);\n    21. Исаев Руслан Рамилевич, к. физ.-мат. наук., доцент МУА (информатика);\n    22. Жакшылыков Жылдызбек Жакшылыкович, канд. пед. наук, доцент МУА (педагогика);\n    23. Жолчиева Айнуру Алибековна, канд. пед. наук, доцент МУА (педагогика);\n    24. Исмаилов Нурлан Асанович, канд. юрид. наук, доцент МУА (юриспруденция);\n    25. Тегизбекова Жылдыз Чынарбековна, канд. юрид. наук, доцент МУА (юриспруденция).",
  "adress": "720048, Кыргызская Республика, г. Бишкек, мкр. Тунгуч, ул. Анкара, 1/8",
    address: "720048, Кыргызская Республика, г. Бишкек, мкр. Тунгуч, ул. Анкара, 1/8",
    phoneNumber: "+996 (312) 63 14 25",
    faxNumber: "+996(312) 630409",
    email: "aas@iaau.edu.kg"
  });
  
  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('<b>') ? (
          <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(line) }} />
        ) : (
          line
        )}
        <br />
      </React.Fragment>
    ));
  };

  const [dropdowns, setDropdowns] = useState([{
    name: "2023, Том 23",
    editions: [
      {
        name: "1",
        fileUrl:
          "https://drive.google.com/file/d/1_OQnqlqOyzYnQZjSmMmODFziOWZqfQ0U/view",
        categories: [
          {
            name: "PEDAGOGICAL SCIENCE",
            link: "https://aas.alatoo.edu.kg/article/5isUUUysZfNxUkm2MSZS",
          },
          {
            name: "SOCIAL AND HUMANITARIAN SCIENCE",
            articles:[]
          },-
          {
            name: "INFORMATICS",
            link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
          },
          {
            name: "MATHEMATICS",
            link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
          },
        ],
      }    
    ]
  }]);

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
  //     { year: '', tom: '', editions: [{ name: '', tomLink: '', categories: [] }] },
  //   ]);
  //   setOpenSubs([...openSubs, false]);
  // };

  // const addedition = (index) => {
  //   const newDropdowns = [...dropdowns];
  //   newDropdowns[index].editions.push({ name: '', tomLink: '', categories: [] });
  //   setDropdowns(newDropdowns);
  // };

  // const addArticle = (dropdownIndex, editionIndex) => {
  //   const newDropdowns = [...dropdowns];
  //   newDropdowns[dropdownIndex].editions[editionIndex].categories.push({
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
                        {dropdown.name}
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
                    {dropdown.editions.map((edition, editionIndex) => (
                      <div key={editionIndex} className={classes.edition}>
                        <div className={classes.trash2}>
                          <p className={classes.edition_link_a} href={dropdown.editions.fileUrl}>
                            Выпуск № {edition.name}
                          </p>
                          <FontAwesomeIcon icon={faTrash} className={classes.trash__icon2} onClick={openDeleteModal}/>
                        </div>
                        <div className={classes.add__art}>
                          <p>+</p>
                          <button onClick={openArticleModal}>Add article</button>
                        </div>
                        <ul className={classes.sub__menu2}>
                          {edition.categories.map((category, categoryIndex) => (
                            <li key={categoryIndex}>
                              <a href={category.link}>
                                {category.name}
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
                    <p>{formatText(data.councilMembers)}</p>
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
                    {data.description}
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
                    {data.address}
                  </p>
                  <p>
                    <b>{t('archivepage.tel')}</b>{data.phoneNumber}
                  </p>
                  <p>
                    <b>{t('archivepage.fax')}</b>{data.faxNumber}
                  </p>
                  <p>
                    <b>Е-mail: </b>{data.email}
                  </p>
                </div>
                <div className={classes.text5}>
                  <p>
                    <b>{t('archivepage.board')}</b>
                  </p>
                  <p>{formatText(data.editorialCouncil)}</p>
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
