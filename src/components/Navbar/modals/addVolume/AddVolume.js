import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./AddVolume.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function AddVolume({ closeModal }) {
  const [activeVolume, setActiveVolume] = useState("addVolume");

  const { addVolumes } = useContext(articlesContext);

  const [name, setName] = useState("");

  function addNewVolume() {
    if (!name.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      name: name,
    };

    addVolumes(newObj);
    console.log(newObj);

    setName("");
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
      {activeVolume === "addVolume" && (
        <div className={classes.volume} onClick={handleOutsideClick}>
          <div className={classes.volume__inner} onClick={handleClick}>
            <form>
              <div>Добавить том</div>
              <label>Год и номер</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Click and type"
                name="name"
              />
              <button onClick={addNewVolume}>Добавить</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
