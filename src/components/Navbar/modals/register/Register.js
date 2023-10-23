import React from "react";
import classes from "./register.module.css";
import arrow from "../img/arrow.svg";




export function Register({closeModal}) {

    const handleRegisterClick = (e) => {
        e.stopPropagation();
    };
    
    const handleOutsideClick = () => {
        closeModal();
    };

    return(
        <div className={classes.register} onClick={handleOutsideClick}>
            <div className={classes.register__inner} onClick={handleRegisterClick}>
            <img src={arrow} alt="back" onClick={() => closeModal(false)}/>
                <form action="">
                    <div>REGISTRATION</div>
                    <label for="name">First name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label for="surname">Last name</label>
                    <input type="text" placeholder="Enter your surname" name="surname"/>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter your email" name="email"/>
                    <label for="password">Password</label>
                    <input type="text" placeholder="Enter your password" name="password"/>
                    <label for="con_password">Confirm Password</label>
                    <input type="text" placeholder="Enter your password" name="con_password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}