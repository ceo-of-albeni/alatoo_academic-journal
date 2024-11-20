import React, { useState, useEffect, useContext } from "react";
import classes from "./ArchiveCategoryPage.module.scss";
import arrow from "./img/arrow.svg";
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
import { articlesContext } from "../../contexts/articleContext";
import { Delete2 } from "../../components/Navbar/modals/delete/Delete2";
import { Delete3 } from "../../components/Navbar/modals/delete/Delete3";
import { authContext } from "../../contexts/authContext";

export default function ArchiveCategoryPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { getOneUser, oneUser } = useContext(authContext);
  const { getArchive, archive, volumeInfo, getVolumeInfo } =
    useContext(articlesContext);

  useEffect(() => {
    getOneUser();
    getArchive();
  }, []);

  const [archive_var, setArchiveVar] = useState([]);

  useEffect(() => {
    setArchiveVar(archive.volumes ? archive.volumes : []);
  }, [archive]);

  const [openSubs2, setOpenSubs2] = useState(
    Array(archive_var.length).fill(false)
  );

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

  const openEditionModal = (id) => {
    if (activeEdition === null) {
      setActiveEdition("addEdition");
      setVolumeId(id);
    }
  };

  const openArticleModal = (id) => {
    if (activeArticle === null) {
      setEditionId(id);
      setActiveArticle("addArticle");
    }
  };

  const openDeleteModal = (id) => {
    if (activeDelete === null) {
      setActiveDelete("delete");
      setVolumeId(id);
    }
  };

  const openDeleteModal2 = (id) => {
    if (activeDelete2 === null) {
      setActiveDelete2("delete2");
      setEditionId(id);
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
    setEditionId(null);
    setActiveArticle(null);
    setActiveDelete(null);
    setActiveEdit(null);
  };

  return (
    <>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
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
                    onClick={() => getVolumeInfo(dropdown.id)}
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
                          <button onClick={() => openEditionModal(dropdown.id)}>
                            Edition
                          </button>
                        </div>
                      ) : (
                        <span></span>
                      )}

                      {volumeInfo?.map((edition, editionIndex) => (
                        <div key={editionIndex} className={classes.edition}>
                          <div className={classes.trash2}>
                            <p
                              className={classes.edition_link_a}
                              href={edition.fileUrl}>
                              Выпуск № {edition.name}
                            </p>
                            {localStorage.getItem("email") != null &&
                            oneUser.role === "admin" ? (
                              <FontAwesomeIcon
                                icon={faTrash}
                                className={classes.trash__icon2}
                                onClick={() => openDeleteModal2(edition.id)}
                              />
                            ) : (
                              <span></span>
                            )}
                          </div>

                          {localStorage.getItem("email") != null &&
                          oneUser.role === "admin" ? (
                            <div className={classes.add__art}>
                              <p>+</p>
                              <button
                                onClick={() => openArticleModal(edition.id)}>
                                Add article
                              </button>
                            </div>
                          ) : (
                            <span></span>
                          )}
                          <ul className={classes.sub__menu2}>
                            {edition.categories.map(
                              (category, categoryIndex) => (
                                <li key={categoryIndex}>
                                  <p
                                    style={{ color: "black" }}
                                    onClick={() =>
                                      navigate(
                                        `/articles/${edition.id}/${category.name}`
                                      )
                                    }>
                                    {category.name}
                                  </p>
                                </li>
                              )
                            )}
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
                    <p>{t("archivepage.council")}</p>
                    <i className="bx bx-chevron-right"></i>
                  </div>
                  <div
                    className={
                      openCouns ? classes.sub__couns : classes.sub__couns__hide
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
          <AddEdition id={volumeId} closeModal={closeModalHandler} />
        )}
        {activeArticle === "addArticle" && (
          <AddArticle id={editionId} closeModal={closeModalHandler} />
        )}
        {activeDelete === "delete" && (
          <Delete volumeId={volumeId} closeModal={closeModalHandler} />
        )}
        {activeDelete2 === "delete2" && (
          <Delete2 editionId={editionId} closeModal={closeModalHandler} />
        )}
        {activeDelete3 === "delete3" && (
          <Delete3 closeModal={closeModalHandler} />
        )}
        {activeEdit === "edit" && <Edit closeModal={closeModalHandler} />}
      </div>
      {/* )} */}
    </>
  );
}
