import React from "react";
import classes from "./success.module.css";




export function Success({closeModal}) {

    const handleSuccessClick = (e) => {
        e.stopPropagation();
    }

    const handleOutsideClick = () => {
        closeModal();
    }

    return(
        <div className={classes.success} onClick={handleOutsideClick}>
            <div className={classes.success__inner} onClick={handleSuccessClick}>
                <div>Successfully!</div>
                <button onClick={() => closeModal()}>OK</button>
            </div>
        </div>
    )
}