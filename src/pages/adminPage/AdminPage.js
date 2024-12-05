import React, { useState, useContext, useEffect } from "react";
import BasicTableAdmin from "../../components/TableAdmin/TableAdmin";
import { articlesContext } from "../../contexts/articleContext";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t, i18n } = useTranslation();
  const {
    getPublishedNews,
    getAllNews,
    publishedNews,
    allNews,
    uploadNews,
    publishNews,
  } = useContext(articlesContext);

  useEffect(() => {
    getPublishedNews();
    getAllNews();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  function handleNewsCreate() {
    if (!title && !content && !image) {
      alert("Поле не заполнено!");
    }

    let newNews = {
      title: title,
      content: content,
      image: image,
    };

    uploadNews(newNews);
    console.log(newNews);

    setTitle("");
    setImage("");
    setContent("");
  }

  return (
    <div style={{ padding: "60px" }}>
      <div>
        <h4>News</h4>
        <div className="article_form-inputs">
          <div className="short_inp">
            <p className="input_p">Название</p>
            <input
              className="text_input"
              placeholder={t("tableadmin.ph")}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="short_inp">
            <p className="input_p">Контент</p>
            <input
              className="text_input"
              placeholder={t("tableadmin.ph")}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="short_inp">
            <p className="input_p">Фото</p>
            <label className="custom-file-upload">
              <input type="file" accept="" onChange={handleFileChange} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
            </label>
          </div>

          <br />
          <button onClick={handleNewsCreate}>{t("tableadmin.button")}</button>
        </div>
      </div>
      <BasicTableAdmin />
    </div>
  );
};

export default AdminPage;
