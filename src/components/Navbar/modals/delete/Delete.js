import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./Delete.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function Delete({ closeModal, volumeId }) {
  const { deleteArchiveVolume } = useContext(articlesContext);

  const [activeDelete, setActiveDelete] = useState("delete");
  const [password, setPassword] = useState("");

  function deleteVolume() {
    if (!password.trim()) {
      alert("Некоторые поля пустые!");
      return;
    }

    let newObj = {
      password: password,
    };

    deleteArchiveVolume(volumeId, newObj);
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

  const clearAllInputs = () => {
    setPassword("");
  };

  return (
    <>
      {activeDelete === "delete" && (
        <div className={classes.delete} onClick={handleOutsideClick}>
          <div className={classes.delete__inner} onClick={handleClick}>
            <form>
              <div>Do you want to delete?</div>
              <label>To confirm, type admin password in the box below</label>
              <input
                type="text"
                placeholder="Your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="email"
              />
              <button onClick={deleteVolume}>Confirm</button>
              <div className={classes.clear} onClick={clearAllInputs}>
                <a
                  href="javascript:void(0);"
                  className={classes.sign}
                  onClick={clearAllInputs}>
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
