import React from 'react';
import { useState, useEffect } from 'react';
import classes from './AddVolume.module.scss';

export function AddVolume({closeModal}) {
    
    const [activeVolume, setActiveVolume] = useState("addVolume");

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

    return (
        <>
            {activeVolume === "addVolume" && (
                <div className={classes.volume} onClick={handleOutsideClick}>
                    <div className={classes.volume__inner} onClick={handleClick}>
                        <form>
                            <div>Add Volume</div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                name="email"
                            />
                            <button>Add</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}