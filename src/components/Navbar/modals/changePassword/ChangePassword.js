import React, { useState } from "react";
import classes from "./ChangePassword.module.css";
import { Success } from "../success/Success";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../forgotPassword/ForgotPassword";
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";

export function ChangePassword({closeModal}) {

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
                        <div>Change Password</div>
                        <label>New Password</label>
                        <input
                            type="text"
                            placeholder="Click and start typing"
                        />
                        <label>Confrim New Password</label>
                        <input
                            type="text"
                            placeholder="Click and start typing"
                        />
                        <button onClick={closeOpenSuccess}>Change password</button>
                    </form>
                </div>
            </div>
            {openSuccess && (
                <div className={classes.success}>
                    <div className={classes.change__inner} onClick={handlechangeClick}>
                        <form action="">
                            <div>Change Password</div>
                            <div>
                                <p>Your password is now changed.</p>
                            </div>
                            <button>OK</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}