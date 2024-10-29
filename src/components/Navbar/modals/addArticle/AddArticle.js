import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./AddArticle.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function AddArticle({ closeModal }) {
  const [activeArticle, setActiveArticle] = useState("addArticle");

  const { addArchiveArticles } = useContext(articlesContext);

  const [authorName, setAuthorName] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleKg, setTitleKg] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [textRu, setTextRu] = useState("");
  const [textKg, setTextKg] = useState("");
  const [textEn, setTextEn] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [category, setCategory] = useState("");

  function addNewArticle() {
    if (
      !authorName.trim() ||
      !fileUrl.trim() ||
      !titleEn.trim() ||
      !titleKg.trim() ||
      !titleRu.trim() ||
      !textEn.trim() ||
      !textKg.trim() ||
      !textRu.trim() ||
      !category.trim()
    ) {
      alert("Некоторые поля пустые!");
      //   return;
    }

    let newObj = {
      authorName: authorName,
      fileUrl: fileUrl,
      titleEn: titleEn,
      titleKg: titleKg,
      titleRu: titleRu,
      textEn: textEn,
      textKg: textEn,
      textRu: textRu,
      category: category,
    };

    addArchiveArticles(newObj, 1);
    console.log(newObj);

    setAuthorName("");
    setFileUrl("");
    setTextEn("");
    setTextKg("");
    setTextRu("");
    setTitleEn("");
    setTitleKg("");
    setTitleRu("");
    setCategory("");
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
    console.log("Closing modal");
  };

  const clearAllInputs = () => {
    setAuthorName("");
    setFileUrl("");
    setTextEn("");
    setTextKg("");
    setTextRu("");
    setTitleEn("");
    setTitleKg("");
    setTitleRu("");
    setCategory("");
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      {activeArticle === "addArticle" && (
        <div className={classes.article} onClick={handleOutsideClick}>
          <div className={classes.article__inner} onClick={handleClick}>
            <form>
              <div>Add article</div>
              <label>Category</label>
              <select
                name="category"
                value={category}
                onChange={handleSelectChange}>
                <option value="">Select a category</option>
                <option value="category1">PHILOLOGICAL SCIENCE</option>
                <option value="category2">PEDAGOGICAL SCIENCE</option>
                <option value="category3">
                  SOCIAL AND HUMANITARIAN SCIENCE
                </option>
                <option value="category3">INFORMATICS</option>
                <option value="category3">MATHEMATICS</option>
              </select>
              <label>Link to article</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                name="email"
              />
              <label>Author's name</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                name="email"
              />
              <label>Title of the article in Kyrgyz Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleKg}
                onChange={(e) => setTitleKg(e.target.value)}
                name="email"
              />
              <label>Text in Kyrgyz Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={textKg}
                onChange={(e) => setTextKg(e.target.value)}
                name="email"
              />
              <label>Title of the article in Russian Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleRu}
                onChange={(e) => setTitleRu(e.target.value)}
                name="email"
              />
              <label>Text in Russian Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={textRu}
                onChange={(e) => setTextRu(e.target.value)}
                name="email"
              />
              <label>Title of the article in English Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                name="email"
              />
              <label>Text in English Language</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={textEn}
                onChange={(e) => setTextEn(e.target.value)}
                name="email"
              />
              <button onClick={addNewArticle}>Add</button>
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
