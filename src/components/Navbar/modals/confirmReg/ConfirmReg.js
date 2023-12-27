import React, { useState, useContext, useEffect }  from "react";
import classes from "./ConfirmReg.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.svg";
import { Success } from "../success/Success";
import { Register } from "../register/Register";
// import Loader from "../../../Loader/Loader";



export function ConfirmReg({closeModal}) {

    const [openRegister, setOpenRegister] = useState(false);
    const [modalOpen, setModalOpen] = useState(true);
    const [openSuccess, setOpenSuccess] = useState(false);


    const navigate = useNavigate();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const { handleconfirm, setError, loading } = useContext(authContext);

    // function confirmUser() {
    //     if (!email.trim() || !password.trim()) {
    //     alert("Some inputs are empty!");
    //     return;
    //     }

    //     let newObj = {
    //     email: email,
    //     password: password,
    //     };
    //     handleconfirm(newObj, email, navigate);
    //     console.log(newObj);
    //     closeOpenSuccess();

    //     setEmail("");
    //     setPassword("");
    // }

    // useEffect(() => {
    //     setError(false);
    // }, []);

    // if (loading) {
    //     return <Loader />;
    // }

    // if (openconfirm || openRegister || openSuccess) {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "auto";
    // }

    const handleConfirmClick = (e) => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        closeModal();
    };

    const closeOpenRegister = () => {
        setModalOpen(false);
        setOpenRegister(true);
    }

    const closeOpenSuccess = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setOpenSuccess(true);;
    };

    return (
        <>
            {modalOpen && (
                <div className={classes.confirm} onClick={handleOutsideClick}>
                    <div className={classes.confirm__inner} onClick={handleConfirmClick}>
                        <img src={arrow} alt="back" onClick={closeOpenRegister} />
                        <form action="">
                            <div>CONFIRM</div>
                            <label>Email</label>
                            <input
                            type="text"
                            placeholder="Enter your email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            name="email"
                            />
                            <label>Code</label>
                            <input
                            type="text"
                            placeholder="Enter your code"
                            name="password"
                            // value={password}
                            // onChange={e => setPassword(e.target.value)}
                            />
                            <button onClick={closeOpenSuccess}>Sign in</button>
                        </form>
                    </div>
                </div>
            )}
            {openRegister && <Register closeModal={setOpenRegister}/>}
            {openSuccess && <Success closeModal={setOpenSuccess}/>}
        </>
    )
}