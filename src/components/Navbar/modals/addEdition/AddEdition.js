import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./AddEdition.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function AddEdition({ closeModal, id }) {
  const [activeEdition, setActiveEdition] = useState("addEdition");
  const { addEditions } = useContext(articlesContext);

  const [name, setName] = useState("");
  console.log(id);

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
    console.log(newObj);

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
              <div>Add Editon</div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Click and type"
                // value={inputValue1}
                // onChange={handleInputChange1}
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="email"
              />
              <label>Link to PDF</label>
              <input
                type="text"
                placeholder="Click and type"
                // value={inputValue2}
                // onChange={handleInputChange2}
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                name="email"
              />

              <button onClick={addNewEdition}>Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
