import React from 'react';
import { useState, useEffect } from 'react';
import classes from './Delete.module.scss';
import { useTranslation } from "react-i18next";

export function Delete3({closeModal}) {
    
    const [activeDelete3, setActiveDelete3] = useState("delete3");
    const [inputValue1, setInputValue1] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = "hidden";  
        return () => {
          document.body.style.overflow = "auto";
        };
    }, []);

    const handleClick = e => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        closeModal();
        console.log("Closing modal");
    };

    const clearAllInputs = () => {
        setInputValue1('');
    };

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    return (
        <>
            {activeDelete3 === "delete3" && (
                <div className={classes.delete} onClick={handleOutsideClick}>
                    <div className={classes.delete__inner} onClick={handleClick}>
                        <form>
                            <div>{t("delete.q3")}</div>
                            <label>{t("delete.confirm")}</label>
                            <input
                                type="text"
                                placeholder={t("delete.ph")}
                                value={inputValue1}
                                onChange={handleInputChange1}
                                name="email"
                            />
                            <button>{t("delete.confirm2")}</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}