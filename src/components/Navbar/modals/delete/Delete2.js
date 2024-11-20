import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./Delete.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function Delete2({ closeModal, editionId }) {
  const [activeDelete2, setActiveDelete2] = useState("delete2");
  const [inputValue1, setInputValue1] = useState("");

  const { deleteArchiveEdition } = useContext(articlesContext);

  function deleteEdition() {
    if (!inputValue1.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      password: inputValue1,
    };

    deleteArchiveEdition(editionId, newObj);
    console.log(newObj);

    setInputValue1("");
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

  const clearAllInputs = () => {
    setInputValue1("");
  };
  return (
    <>
      {activeDelete2 === "delete2" && (
        <div className={classes.delete} onClick={handleOutsideClick}>
          <div className={classes.delete__inner} onClick={handleClick}>
            <form>
              <div>Do you want to delete?</div>
              <label>To confirm, type admin password in the box below</label>
              <input
                type="text"
                placeholder="Your password..."
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                name="email"
              />
              <button onClick={deleteEdition}>Confirm</button>
              <div className={classes.clear} onClick={clearAllInputs}>
                <a href="javascript:void(0);" className={classes.sign}>
                  Clear
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
