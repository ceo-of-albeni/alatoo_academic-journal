import React from 'react';
import { useState, useEffect } from 'react';
import classes from './AddEdition.module.scss';

export function AddEdition({closeModal}) {
    
    const [activeEdition, setActiveEdition] = useState("addEdition");
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

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
        setInputValue2('');
    };

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    return (
        <>
            {activeEdition === "addEdition" && (
                <div className={classes.edition} onClick={handleOutsideClick}>
                    <div className={classes.edition__inner} onClick={handleClick}>
                        <form>
                            <div>Add Editon</div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue1}
                                onChange={handleInputChange1}
                                name="email"
                            />
                            <label>Link to PDF</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue2}
                                onChange={handleInputChange2}
                                name="email"
                            />
                            <button>Add</button>
                            <div className={classes.clear} onClick={clearAllInputs}>
                                <a href="javascript:void(0);" className={classes.sign}>
                                    Clear all
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}