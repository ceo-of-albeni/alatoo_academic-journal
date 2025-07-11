import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./Delete.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";
import { useTranslation } from "react-i18next";

export function Delete2({ closeModal, editionId }) {
  const [activeDelete2, setActiveDelete2] = useState("delete2");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const { deleteArchiveEdition } = useContext(articlesContext);

  async function deleteEdition() {
    if (!password.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      password: password,
    };

    deleteArchiveEdition(editionId, newObj);
    console.log(newObj);

    setPassword("");
  }

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
  return (
    <>
      {activeDelete2 === "delete2" && (
        <div className={classes.delete} onClick={handleOutsideClick}>
          <div className={classes.delete__inner} onClick={handleClick}>
            <form>
              <div>{t("delete.q2")}</div>
              <label>{t("delete.confirm")}</label>
              <input
                type="text"
                placeholder={t("delete.ph")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              <button onClick={deleteEdition}>{t("delete.delete")}</button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
