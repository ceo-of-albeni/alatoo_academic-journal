import React, { useState } from "react";
import classes from "./ChangePassword.module.css";
import { Success } from "../success/Success";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../forgotPassword/ForgotPassword";

export function ChangePassword({closeModal}) {

    const [modalOpen, setModalOpen] = useState(true);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openForgot, setOpenForgot] = useState(false);

    const navigate = useNavigate();

    const handlechangeClick = e => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        closeModal();
    };

    const closeOpenSuccess = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setOpenSuccess(true);
    }

    return (
        <>
            {modalOpen && (
                <div className={classes.change} onClick={handleOutsideClick}>
                    <div className={classes.change__inner} onClick={handlechangeClick}>
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
            )}
            {openForgot && <ForgotPassword closeModal={setOpenForgot} />}
            {openSuccess && (
                <div className={classes.success} onClick={handleOutsideClick}>
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