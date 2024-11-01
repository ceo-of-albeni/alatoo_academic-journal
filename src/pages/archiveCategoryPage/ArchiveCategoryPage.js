import React, { useState, useEffect, useContext } from "react";
import classes from "./ArchiveCategoryPage.module.scss";
import arrow from "./img/arrow.svg";
import search from "./img/search.svg";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddVolume } from "../../components/Navbar/modals/addVolume/AddVolume";
import { AddEdition } from "../../components/Navbar/modals/addEdition/AddEdition";
import { AddArticle } from "../../components/Navbar/modals/addArticle/AddArticle";
import { Delete } from "../../components/Navbar/modals/delete/Delete";
import { Edit } from "../../components/Navbar/modals/edit/Edit";
import DOMPurify from "dompurify";
import { articlesContext } from "../../contexts/articleContext";
import { Delete2 } from "../../components/Navbar/modals/delete/Delete2";
import { Delete3 } from "../../components/Navbar/modals/delete/Delete3";
import { authContext } from "../../contexts/authContext";

export default function ArchiveCategoryPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { getOneUser, oneUser } = useContext(authContext);

  useEffect(() => {
    getOneUser();
  }, []);

  const { getArchive, archive, loading } = useContext(articlesContext);
  const [archive_var, setArchiveVar] = useState([]);

  // let archive_var = archive.volumes ? archive.volumes : [];

  const [description, setDescription] = useState(archive.description);
  const [rulesUrl, setRulesUrl] = useState(archive.rulesUrl);
  const [reviewerRulesUrl, setReviewerRulesUrl] = useState(
    archive.reviewerRulesUrl
  );
  const [publicationEthicsRu, setPublicationEthicsRu] = useState(
    archive.publicationEthicsRu
  );
  const [publicationEthicEn, setPublicationEthicEn] = useState(
    archive.publicationEthicEn
  );
  const [editorialCouncil, setEditorialCouncil] = useState(
    archive.editorialCouncil
  );
  const [adress, setAdress] = useState(archive.adress);
  const [phoneNumber, setPhoneNumber] = useState(archive.phoneNumber);
  const [faxNumber, setFaxNumber] = useState(archive.faxNumber);
  const [email, setEmail] = useState(archive.email);

  useEffect(() => {
    getArchive();
  }, []);

  useEffect(() => {
    setArchiveVar(archive.volumes ? archive.volumes : []);
  }, [archive]);

  console.log(archive_var);

  // const formatText = (text) => {
  //   return text.split('\n').map((line, index) => (
  //     <React.Fragment key={index}>
  //       {line.includes('<b>') ? (
  //         <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(line) }} />
  //       ) : (
  //         line
  //       )}
  //       <br />
  //     </React.Fragment>
  //   ));
  // };

  console.log(archive_var);

  const [dropdowns, setDropdowns] = useState([
    {
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
              articles: [],
            },
            -{
              name: "INFORMATICS",
              link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
            },
            {
              name: "MATHEMATICS",
              link: "https://aas.alatoo.edu.kg/article/16HWXXJK80IHj9FxTckR",
            },
          ],
        },
      ],
    },
  ]);

  const [openSubs, setOpenSubs] = useState(Array(dropdowns.length).fill(false));
  const [openSubs2, setOpenSubs2] = useState(
    Array(archive_var.length).fill(false)
  );

  const toggleOpenSub = (index) => {
    const updatedOpenSubs = [...openSubs];
    updatedOpenSubs[index] = !updatedOpenSubs[index];
    setOpenSubs(updatedOpenSubs);
  };

  const toggleOpenSub2 = (index) => {
    const updatedOpenSubs2 = [...openSubs2];
    updatedOpenSubs2[index] = !updatedOpenSubs2[index];
    setOpenSubs2(updatedOpenSubs2);
  };

  const [openCouns, setOpenCouns] = useState(false);

  const toggleOpenCoun = () => {
    setOpenCouns(!openCouns);
  };

  const [activeVolume, setActiveVolume] = useState(null);
  const [activeEdition, setActiveEdition] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeDelete, setActiveDelete] = useState(null);
  const [activeDelete2, setActiveDelete2] = useState(null);
  const [activeDelete3, setActiveDelete3] = useState(null);
  const [activeEdit, setActiveEdit] = useState(null);

  const [volumeId, setVolumeId] = useState("");
  const [editionId, setEditionId] = useState("");

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

  const openDeleteModal = (id) => {
    if (activeDelete === null) {
      console.log(id);
      setActiveDelete("delete");
      setVolumeId(id);
      console.log(volumeId);
    }
  };

  const openDeleteModal2 = (id) => {
    if (activeDelete2 === null) {
      setActiveDelete2("delete2");
      setEditionId(id);
    }
  };

  const openDeleteModal3 = () => {
    if (activeDelete3 === null) {
      setActiveDelete3("delete3");
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

  console.log(dropdowns);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.container}>
          <div className={classes.archive}>
            <div className={classes.archive__inner}>
              <div className={classes.back}>
                <a onClick={() => navigate("/")}>
                  <img src={arrow} alt="arrow" />
                  <p>{t("archivepage.back")}</p>
                </a>
              </div>
              <div className={classes.archive__inner__1}>
                <div className={classes.years}>
                  <br />
                  {/* <div className={classes.search}>
                <div className={classes.filtration}>
                  <BasicDatePicker />
                </div>
                <form action="" className={classes.search__bar}>
                  <input type="text" placeholder="Search..." name="search" />
                  <button>
                    <img src={search} alt="search" />
                  </button>
                </form>
              </div> */}
                  {localStorage.getItem("email") != null &&
                  oneUser.role === "admin" ? (
                    <div className={classes.add__vol}>
                      <p>+</p>
                      <button onClick={openVolumeModal}>Add Volume</button>
                    </div>
                  ) : (
                    <span></span>
                  )}

                  {archive_var?.map((dropdown, index) => (
                    <div
                      key={index}
                      className={`${
                        openSubs2[index] ? "" : classes.sub__menu__end
                      }`}>
                      <div className={classes.trash}>
                        <div
                          className={`${classes.year} ${
                            openSubs2[index]
                              ? classes.rotate
                              : classes.rotate__end
                          }`}
                          onClick={() => toggleOpenSub2(index)}>
                          <p>{dropdown.name}</p>
                          <i className="bx bx-chevron-right"></i>
                        </div>
                        {localStorage.getItem("email") != null &&
                        oneUser.role === "admin" ? (
                          <FontAwesomeIcon
                            icon={faTrash}
                            className={classes.trash__icon}
                            onClick={() => openDeleteModal(dropdown.id)}
                          />
                        ) : (
                          <span></span>
                        )}
                      </div>

                      <div
                        className={
                          openSubs2[index]
                            ? classes.sub__menu
                            : classes.sub__menu__hide
                        }>
                        {localStorage.getItem("email") != null &&
                        oneUser.role === "admin" ? (
                          <div className={classes.add__edit}>
                            <p>+</p>
                            <button
                              onClick={() => openEditionModal(dropdown.id)}>
                              Edition
                            </button>
                          </div>
                        ) : (
                          <span></span>
                        )}

                        {dropdown?.editions?.map((edition, editionIndex) => (
                          <div key={editionIndex} className={classes.edition}>
                            <div className={classes.trash2}>
                              <p
                                className={classes.edition_link_a}
                                href={dropdown.editions.fileUrl}>
                                Выпуск № {edition.name}
                              </p>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className={classes.trash__icon2}
                                onClick={() => openDeleteModal2(edition.id)}
                              />
                            </div>
                            <div className={classes.add__art}>
                              <p>+</p>
                              <button
                                onClick={() => openArticleModal(edition.id)}>
                                Add article
                              </button>
                            </div>
                            <ul className={classes.sub__menu2}>
                              {edition.categories.map(
                                (category, categoryIndex) => (
                                  <li key={categoryIndex}>
                                    <a href={category.link}>{category.name}</a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div
                    className={`${openCouns ? "" : classes.sub__couns__end}`}>
                    <div
                      className={`${classes.council} ${
                        openCouns ? classes.rotate : classes.rotate__end
                      }`}
                      onClick={toggleOpenCoun}>
                      <p>{t("archivepage.council")}</p>
                      <i className="bx bx-chevron-right"></i>
                    </div>
                    <div
                      className={
                        openCouns
                          ? classes.sub__couns
                          : classes.sub__couns__hide
                      }>
                      <div className={classes.members}>
                        <p>{archive.councilMembers}</p>
                      </div>
                      <button className={classes.edit} onClick={openEditModal}>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className={classes.archive__inner__2}>
                  <div className={classes.slider}>
                    <Slider />
                  </div>
                  <div className={classes.text}>
                    <h3>{t("archivepage.title")}</h3>
                    <div className={classes.text1}>
                      <p>{t("archivepage.title2")}</p>
                      <p>{t("archivepage.title3")}</p>
                    </div>
                    <div className={classes.text2}>
                      <p>{archive.description}</p>
                    </div>
                    <div className={classes.text3}>
                      <p>
                        ISSN: 1694-5263 <span>{t("archivepage.version1")}</span>
                      </p>
                      <p>
                        ISSN: 1694-7916 <span>{t("archivepage.version2")}</span>
                      </p>
                    </div>
                    <div className={classes.text4}>
                      <p>
                        <b>{t("archivepage.title5")}</b>
                      </p>
                      <p>{archive.adress}</p>
                      <p>
                        <b>{t("archivepage.tel")}</b>
                        {archive.phoneNumber}
                      </p>
                      <p>
                        <b>{t("archivepage.fax")}</b>
                        {archive.faxNumber}
                      </p>
                      <p>
                        <b>Е-mail: </b>
                        {archive.email}
                      </p>
                    </div>
                    <div className={classes.text5}>
                      <p>
                        <b>{t("archivepage.board")}</b>
                      </p>
                      <p>{archive.editorialCouncil}</p>
                    </div>
                    <button className={classes.edit} onClick={openEditModal}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {activeVolume === "addVolume" && (
            <AddVolume closeModal={closeModalHandler} />
          )}
          {activeEdition === "addEdition" && (
            <AddEdition closeModal={closeModalHandler} />
          )}
          {activeArticle === "addArticle" && (
            <AddArticle closeModal={closeModalHandler} />
          )}
          {activeDelete === "delete" && (
            <Delete editionId={editionId} closeModal={closeModalHandler} />
          )}
          {activeDelete2 === "delete2" && (
            <Delete2 volumeId={volumeId} closeModal={closeModalHandler} />
          )}
          {activeDelete3 === "delete3" && (
            <Delete3 closeModal={closeModalHandler} />
          )}
          {activeEdit === "edit" && <Edit closeModal={closeModalHandler} />}
        </div>
      )}
    </>
  );
}
