import React, { useState } from 'react';
import classes from "./ForgotPassword.module.css";
import { useNavigate } from 'react-router-dom';
import arrow from "../img/arrow.svg";
import { Login } from '../login/Login';
import { ChangePassword } from '../changePassword/ChangePassword';


export function ForgotPassword({closeModal}) {

    const [modalOpen, setModalOpen] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);
    const [openChange, setOpenChange] = useState(false);

    const navigate = useNavigate()

    const handleForgotClick = (e) => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        closeModal();
    };

    const closeOpenLogin = () => {
        setModalOpen(false);
        setOpenLogin(true);
    }

    const closeOpenChange = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setOpenChange(true);
    }

    return (
        <>
            {modalOpen && (
                <div className={classes.forgot} onClick={handleOutsideClick}>
                    <div className={classes.forgot__inner} onClick={handleForgotClick}>
                        <img src={arrow} alt="back" onClick={closeOpenLogin} />
                        <form action="">
                            <div>Password Reset</div>
                            <div className={classes.text}>
                                <p>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
                            </div>
                            <label>Email</label>
                            <input
                            type="text"
                            placeholder="Enter your email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            name="email"
                            />
                            <button onClick={closeOpenChange}>Reset my password</button>
                        </form>
                    </div>
                </div>
            )}
            {openLogin && <Login closeModal={setOpenLogin}/>}
            {openChange && <ChangePassword closeModal={setOpenChange}/>}
        </>
    );
}