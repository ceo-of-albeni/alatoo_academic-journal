import React from "react";
import classes from "./modals.module.css"
import arrow from "./img/arrow.svg";



export function Login({closeModal}) {
    return(
        <div className={classes.modal}>
            <div className={classes.modal__inner}>
                <img src={arrow} alt="back" onClick={() => closeModal(false)}/>
                <form action="">
                    <div>LOGIN</div>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter your email" name="email"/>
                    <label for="password">Password</label>
                    <input type="text" placeholder="Enter your password" name="password"/>
                    <button>Sign in</button>
                    <div className={classes.model__signup}><a href="" className={classes.sign}>Sign up</a></div>
                    <div className={classes.model__fpassword}><a href="">Forgot password?</a></div>
                </form>
            </div>
        </div>
    )
}