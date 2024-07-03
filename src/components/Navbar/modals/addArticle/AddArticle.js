import React from 'react';
import { useState, useEffect } from 'react';
import classes from './AddArticle.module.scss';

export function AddArticle({closeModal}) {
    
    const [activeArticle, setActiveArticle] = useState("addArticle");
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

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
        setSelectedCategory('');
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

    const handleSelectChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    return (
        <>
            {activeArticle === "addArticle" && (
                <div className={classes.article} onClick={handleOutsideClick}>
                    <div className={classes.article__inner} onClick={handleClick}>
                        <form>
                            <div>Add article</div>
                            <label>Category</label>
                            <select name="category" value={selectedCategory} onChange={handleSelectChange}>
                                <option value="">Select a category</option>
                                <option value="category1">PHILOLOGICAL SCIENCE</option>
                                <option value="category2">PEDAGOGICAL SCIENCE</option>
                                <option value="category3">SOCIAL AND HUMANITARIAN SCIENCE</option>
                                <option value="category3">INFORMATICS</option>
                                <option value="category3">MATHEMATICS</option>
                            </select>
                            <label>Link to article</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue1}
                                onChange={handleInputChange1}
                                name="email"
                            />
                            <label>Title of the article in Kyrgyz Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue2}
                                onChange={handleInputChange2}
                                name="email"
                            />
                            <label>Text in Kyrgyz Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue3}
                                onChange={handleInputChange3}
                                name="email"
                            />
                            <label>Title of the article in Russian Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue4}
                                onChange={handleInputChange4}
                                name="email"
                            />
                            <label>Text in Russian Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue5}
                                onChange={handleInputChange5}
                                name="email"
                            />
                            <label>Title of the article in English Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue6}
                                onChange={handleInputChange6}
                                name="email"
                            />
                            <label>Text in English Language</label>
                            <input
                                type="text"
                                placeholder="Click and typing"
                                value={inputValue7}
                                onChange={handleInputChange7}
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