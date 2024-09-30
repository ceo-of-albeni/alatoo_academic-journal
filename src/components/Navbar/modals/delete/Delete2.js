import React from 'react';
import { useState, useEffect } from 'react';
import classes from './Delete.module.scss';

export function Delete2({closeModal}) {
    
    const [activeDelete2, setActiveDelete2] = useState("delete2");
    const [inputValue1, setInputValue1] = useState('');

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
            {activeDelete2 === "delete2" && (
                <div className={classes.delete} onClick={handleOutsideClick}>
                    <div className={classes.delete__inner} onClick={handleClick}>
                        <form>
                            <div>Do you want to delete?</div>
                            <label>To confirm, type admin password in the box below</label>
                            <input
                                type="text"
                                placeholder="Your password..."
                                value={inputValue1}
                                onChange={handleInputChange1}
                                name="email"
                            />
                            <button>Confirm</button>
                            <div className={classes.clear} onClick={clearAllInputs}>
                                <a href="javascript:void(0);" className={classes.sign}>
                                    Clear
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}