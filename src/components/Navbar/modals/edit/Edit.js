import React, { useContext, useState, useEffect } from "react";
import classes from "./Edit.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";
import { useTranslation } from "react-i18next";

export function Edit({ closeModal }) {
  const { t } = useTranslation();
  const { getArchive, archive, editArchive } = useContext(articlesContext);

  const [form, setForm] = useState({
    description: "",
    rulesUrl: "",
    reviewerRulesUrl: "",
    publicationEthicsRu: "",
    publicationEthicEn: "",
    editorialCouncil: "",
    adress: "",
    phoneNumber: "",
    faxNumber: "",
    email: "",
  });

  useEffect(() => {
    getArchive();
  }, []);

  useEffect(() => {
    if (archive) {
      setForm({
        description: archive.description || "",
        rulesUrl: archive.rulesUrl || "",
        reviewerRulesUrl: archive.reviewerRulesUrl || "",
        publicationEthicsRu: archive.publicationEthicsRu || "",
        publicationEthicEn: archive.publicationEthicEn || "",
        editorialCouncil: archive.editorialCouncil || "",
        adress: archive.adress || "",
        phoneNumber: archive.phoneNumber || "",
        faxNumber: archive.faxNumber || "",
        email: archive.email || "",
      });
    }
  }, [archive]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    for (const key in form) {
      if (!form[key].trim()) {
        alert("Некоторые поля пустые!");
        return;
      }
    }
    editArchive(form);
    alert("Обновлено!");
    closeModal();
  };

  return (
    <div className={classes.edit} onClick={closeModal}>
      <div className={classes.edit__inner} onClick={(e) => e.stopPropagation()}>
        <form>
          <div>{t("edit.edit")}</div>

          <label>{t("edit.cap")}</label>
          <textarea
            name="description"
            placeholder={t("edit.ph")}
            value={form.description}
            onChange={handleChange}
          />

          <label>{t("edit.cap2")}</label>
          <input
            name="editorialCouncil"
            placeholder={t("edit.ph")}
            value={form.editorialCouncil}
            onChange={handleChange}
          />

          <label>{t("edit.address")}</label>
          <input
            name="adress"
            placeholder={t("edit.ph")}
            value={form.adress}
            onChange={handleChange}
          />

          <label>{t("edit.phone")}</label>
          <input
            name="phoneNumber"
            placeholder={t("edit.ph")}
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <label>{t("edit.fax")}</label>
          <input
            name="faxNumber"
            placeholder={t("edit.ph")}
            value={form.faxNumber}
            onChange={handleChange}
          />

          <label>{t("edit.email")}</label>
          <input
            name="email"
            placeholder={t("edit.ph")}
            value={form.email}
            onChange={handleChange}
          />

          <label>{t("edit.ru")}</label>
          <input
            name="publicationEthicsRu"
            placeholder={t("edit.ph")}
            value={form.publicationEthicsRu}
            onChange={handleChange}
          />

          <label>{t("edit.en")}</label>
          <input
            name="publicationEthicEn"
            placeholder={t("edit.ph")}
            value={form.publicationEthicEn}
            onChange={handleChange}
          />

          <label>{t("edit.rules")}</label>
          <input
            name="rulesUrl"
            placeholder={t("edit.ph")}
            value={form.rulesUrl}
            onChange={handleChange}
          />

          <label>{t("edit.rules2")}</label>
          <input
            name="reviewerRulesUrl"
            placeholder={t("edit.ph")}
            value={form.reviewerRulesUrl}
            onChange={handleChange}
          />

          <button type="button" onClick={saveChanges}>
            {t("edit.save")}
          </button>
        </form>
      </div>
    </div>
  );
}
