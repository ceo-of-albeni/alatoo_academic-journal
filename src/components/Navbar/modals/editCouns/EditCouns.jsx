import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./EditCouns.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";
export function EditCouns({ closeModal }) {
  const { getArchive, archive, editCouncilMembers } =
    useContext(articlesContext);
  const [councilMembers, setCouncilMembers] = useState(archive.councilMembers);
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
  function saveChanges() {
    if (!councilMembers.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    const editedInfo = {
      councilMembers,
    };
    console.log("Edited Info:", editedInfo);
    alert("Обновлено!");
    editCouncilMembers(editedInfo);
    window.location.reload();
  }

  return (
    <>
      {activeEdit === "edit" && (
        <div className={classes.edit} onClick={handleOutsideClick}>
          <div className={classes.edit__inner} onClick={handleClick}>
            <form>
              <div>Edit Information</div>
              <label>Council Members</label>
              <textarea
                placeholder="Click and type"
                value={councilMembers}
                onChange={(e) => setCouncilMembers(e.target.value)}
                name="council_members"
                rows={8}
                cols={30}
              />

              <button onClick={saveChanges}>Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
