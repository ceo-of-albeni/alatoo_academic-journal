import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./AddEdition.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function AddEdition({ closeModal, id }) {
  const [activeEdition, setActiveEdition] = useState("addEdition");
  const { addEditions } = useContext(articlesContext);

  const [name, setName] = useState("");

  const [fileUrl, setFileUrl] = useState("");

  function addNewEdition() {
    if (!name.trim() || !fileUrl.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      name: name,
      fileUrl: fileUrl,
    };

    addEditions(newObj, id);

    setName("");
    setFileUrl("");
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
      {activeEdition === "addEdition" && (
        <div className={classes.edition} onClick={handleOutsideClick}>
          <div className={classes.edition__inner} onClick={handleClick}>
            <form>
              <div>Добавить выпуск</div>
              <label>Номер выпуска</label>
              <input
                type="text"
                placeholder="Click and type"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="email"
              />
              <label>Файл с изданием</label>
              <input
                type="text"
                placeholder="Click and type"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                name="email"
              />

              <button onClick={addNewEdition}>Добавить</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
