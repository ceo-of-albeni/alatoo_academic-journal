import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./Edit.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";
import { useTranslation } from "react-i18next";

export function Edit({ closeModal }) {
  const { t } = useTranslation();

  const { getArchive, archive, loading, setLoading, editArchive } =
    useContext(articlesContext);

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
  const [activeEdit, setActiveEdit] = useState("edit");

  useEffect(() => {
    getArchive();
  }, []);

  console.log(archive);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
    console.log("Closing modal");
  };

  const clearAllInputs = () => {
    setDescription("");
    setRulesUrl("");
    setReviewerRulesUrl("");
    setPublicationEthicsRu("");
    setPublicationEthicEn("");
    setEditorialCouncil("");
    setAdress("");
    setPhoneNumber("");
    setFaxNumber("");
    setEmail("");
  };

  function saveChanges() {
    if (
      !email.trim() ||
      !description.trim() ||
      !rulesUrl.trim() ||
      !reviewerRulesUrl.trim() ||
      !publicationEthicEn.trim() ||
      !publicationEthicsRu.trim() ||
      !editorialCouncil.trim() ||
      !adress.trim() ||
      !phoneNumber.trim() ||
      !faxNumber.trim()
    ) {
      alert("Некоторые поля пустые!");
      return;
    }
    const editedInfo = {
      rulesUrl,
      adress,
      description,
      reviewerRulesUrl,
      publicationEthicEn,
      publicationEthicsRu,
      editorialCouncil,
      phoneNumber,
      faxNumber,
      email,
    };
    console.log("Edited Info:", editedInfo);
    alert("Обновлено!");
    editArchive(editedInfo);
    window.location.reload();
  }

  return (
    <>
      {activeEdit === "edit" && (
        <div className={classes.edit} onClick={handleOutsideClick}>
          <div className={classes.edit__inner} onClick={handleClick}>
            <form>
              <div>{t("edit.edit")}</div>
              <label>{t("edit.cap")}</label>
              <textarea
                type="text"
                placeholder={t("edit.ph")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="email"
              />
              <label>{t("edit.cap2")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={editorialCouncil}
                onChange={(e) => setEditorialCouncil(e.target.value)}
                name="email"
              />
              <label>{t("edit.address")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                name="email"
              />
              <label>{t("edit.phone")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="email"
              />
              <label>{t("edit.fax")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={faxNumber}
                onChange={(e) => setFaxNumber(e.target.value)}
                name="email"
              />
              <label>{t("edit.email")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />

              <label>{t("edit.ru")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={publicationEthicsRu}
                onChange={(e) => setPublicationEthicsRu(e.target.value)}
                name="email"
              />
              <label>{t("edit.en")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={publicationEthicEn}
                onChange={(e) => setPublicationEthicEn(e.target.value)}
                name="email"
              />
              <label>{t("edit.rules")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={rulesUrl}
                onChange={(e) => setRulesUrl(e.target.value)}
                name="email"
              />
              <label>{t("edit.rules2")}</label>
              <input
                type="text"
                placeholder={t("edit.ph")}
                value={reviewerRulesUrl}
                onChange={(e) => setReviewerRulesUrl(e.target.value)}
                name="email"
              />
              <button onClick={saveChanges}>{t("edit.save")}</button>
              <div className={classes.clear} onClick={clearAllInputs}>
                <a href="javascript:void(0);" className={classes.sign}>
                  {t("edit.clear")}
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
