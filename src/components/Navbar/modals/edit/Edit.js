import React from 'react';
import { useState, useEffect } from 'react';
import classes from './Edit.module.scss';

export function Edit({closeModal}) {
    
    const [activeEdit, setActiveEdit] = useState("edit");
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');
    const [inputValue10, setInputValue10] = useState('');
    const [inputValue11, setInputValue11] = useState('');

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
        setInputValue3('');
        setInputValue4('');
        setInputValue5('');
        setInputValue6('');
        setInputValue7('');
        setInputValue8('');
        setInputValue9('');
        setInputValue10('');
        setInputValue11('');
    };

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleInputChange3 = (e) => {
        setInputValue3(e.target.value);
    };

    const handleInputChange4 = (e) => {
        setInputValue4(e.target.value);
    };

    const handleInputChange5 = (e) => {
        setInputValue5(e.target.value);
    };

    const handleInputChange6 = (e) => {
        setInputValue6(e.target.value);
    };

    const handleInputChange7 = (e) => {
        setInputValue7(e.target.value);
    };

    const handleInputChange8 = (e) => {
        setInputValue8(e.target.value);
    };

    const handleInputChange9 = (e) => {
        setInputValue9(e.target.value);
    };
    const handleInputChange10 = (e) => {
        setInputValue10(e.target.value);
    };

    const handleInputChange11 = (e) => {
        setInputValue11(e.target.value);
    };


    return (
        <>
            {activeEdit === "edit" && (
                <div className={classes.edit} onClick={handleOutsideClick}>
                    <div className={classes.edit__inner} onClick={handleClick}>
                        <form>
                            <div>Edit Information</div>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue1}
                                onChange={handleInputChange1}
                                name="email"
                            />
                            <label>Editorial Council</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue2}
                                onChange={handleInputChange2}
                                name="email"
                            />
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue3}
                                onChange={handleInputChange3}
                                name="email"
                            />
                            <label>Phone number</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue4}
                                onChange={handleInputChange4}
                                name="email"
                            />
                            <label>Fax number</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue5}
                                onChange={handleInputChange5}
                                name="email"
                            />
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue6}
                                onChange={handleInputChange6}
                                name="email"
                            />
                            <label>Council members</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue7}
                                onChange={handleInputChange7}
                                name="email"
                            />
                            <label>Link to ethics in Russian</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue8}
                                onChange={handleInputChange8}
                                name="email"
                            />
                            <label>Link to ethics in English</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue9}
                                onChange={handleInputChange9}
                                name="email"
                            />
                            <label>Rules for authors</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue10}
                                onChange={handleInputChange10}
                                name="email"
                            />
                            <label>Rules for reviewers</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={inputValue11}
                                onChange={handleInputChange11}
                                name="email"
                            />
                            <button>Add</button>
                            <div className={classes.clear} onClick={clearAllInputs}>
                                <a href="javascript:void(0);" className={classes.sign}>
                                    Clear All
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}