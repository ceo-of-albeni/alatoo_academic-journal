import React, { useState } from "react";
import classes from "./ChangePassword.module.css";
import { Success } from "../success/Success";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../forgotPassword/ForgotPassword";
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useTranslation } from 'react-i18next';

export function ChangePassword({closeModal}) {

    const { t, i18n } = useTranslation();
    const [modalOpen, setModalOpen] = useState(true);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openForgot, setOpenForgot] = useState(false);

    const navigate = useNavigate();

    const handlechangeClick = e => {
        e.stopPropagation();
    };

    const closeOpenSuccess = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setOpenSuccess(true);
    }

    return (
        <>
            <div className={classes.change}>
                <div className={classes.change__inner}>
                    <form action="">
                        <div>{t('change_pw.change')}</div>
                        <label>{t('change_pw.new')}</label>
                        <input
                            type="text"
                            placeholder={t('change_pw.ph')}
                        />
                        <label>{t('change_pw.confirm_new')}</label>
                        <input
                            type="text"
                            placeholder={t('change_pw.ph')}
                        />
                        <button onClick={closeOpenSuccess}>{t('change_pw.change')}</button>
                    </form>
                </div>
            </div>
            {openSuccess && (
                <div className={classes.success}>
                    <div className={classes.change__inner} onClick={handlechangeClick}>
                        <form action="">
                            <div>{t('change_pw.change')}</div>
                            <div>
                                <p>{t('change_pw.message')}</p>
                            </div>
                            <button>OK</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}