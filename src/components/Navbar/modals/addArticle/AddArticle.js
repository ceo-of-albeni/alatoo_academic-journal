import React, { useContext } from "react";
import { useState, useEffect } from "react";
import classes from "./AddArticle.module.scss";
import { articlesContext } from "../../../../contexts/articleContext";

export function AddArticle({ closeModal, id }) {
  const [activeArticle, setActiveArticle] = useState("addArticle");

  const { addArchiveArticles, categories, getCategories } =
    useContext(articlesContext);

  useEffect(() => {
    getCategories();
  }, []);

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

    addArchiveArticles(newObj, id);

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
              <div>Добавить статью</div>
              <label>Категория</label>
              <select
                name="category"
                value={category}
                onChange={handleSelectChange}>
                <option value="">Выберите категорию</option>
                {categories.map((categoryName) => (
                  <option value={categoryName.name}>
                    {categoryName.nameEn}
                  </option>
                ))}
                <option value="category3">
                  SOCIAL AND HUMANITARIAN SCIENCE
                </option>
                <option value="category3">INFORMATICS</option>
                <option value="category3">MATHEMATICS</option>
              </select>
              <label>Ссылка к статье</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                name="email"
              />
              <label>Имена автора(ов)</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                name="email"
              />
              <label>Заголовок на кырг языке</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleKg}
                onChange={(e) => setTitleKg(e.target.value)}
                name="email"
              />
              <label>Текст на кырг языке</label>
              <textarea
                type="text"
                placeholder="Click and typing"
                value={textKg}
                onChange={(e) => setTextKg(e.target.value)}
                rows={4}
                cols={57}
              />
              <label>Заголовок на рус языке</label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleRu}
                onChange={(e) => setTitleRu(e.target.value)}
                name="email"
              />
              <label>Текст на рус языке</label>
              <textarea
                type="text"
                placeholder="Click and typing"
                value={textRu}
                onChange={(e) => setTextRu(e.target.value)}
                name="email"
                rows={4}
                cols={57}
              />
              <label>
                Заголовок на англ языке
              </label>
              <input
                type="text"
                placeholder="Click and typing"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                name="email"
              />
              <label>Текст на англ языке</label>
              <textarea
                type="text"
                placeholder="Click and typing"
                value={textEn}
                onChange={(e) => setTextEn(e.target.value)}
                rows={4}
                cols={57}
              />
              <button onClick={addNewArticle}>Добавить</button>
              <div className={classes.clear} onClick={clearAllInputs}>
                <a href="javascript:void(0);" className={classes.sign}>
                  Очистить поля
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
