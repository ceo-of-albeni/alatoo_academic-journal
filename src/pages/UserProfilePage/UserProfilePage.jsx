import React, { useState, useContext, useEffect } from "react";
import "./UserProfilePage.scss";
import DataTable from "../../components/Table/Table";
import { articlesContext } from "../../contexts/articleContext";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { authContext } from "../../contexts/authContext";
import { useTranslation } from "react-i18next";

const UserProfilePage = () => {
  const { t } = useTranslation();
  const { categories, getCategories, getAllMyArticles } = useContext(articlesContext);
  const { getOneUser, oneUser } = useContext(authContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [text, setText] = useState("");
  const [articleFile, setArticleFile] = useState(null);
  const [coauthorsEmails, setCoauthorsEmails] = useState("");

  const [openArticle] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

useEffect(() => {
  const fetchData = async () => {
    try {
      await getAllMyArticles();
      await getCategories();
      await getOneUser();
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };
  fetchData();
}, []);

  const clearAll = () => {
    setTitle("");
    setCategory("");
    setCoauthors("");
    setText("");
    setArticleFile(null);
    setCoauthorsEmails("");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArticleFile(file);
  };

  const handleUpload = async () => {
    if (!articleFile || !title || !coauthors || !text || !category || !coauthorsEmails) {
      alert("Некоторые поля не заполнены!");
      return;
    }

    const newArticle = new FormData();
    newArticle.append("articleFile", articleFile);
    newArticle.append("title", title);
    newArticle.append("text", text);
    newArticle.append("category", category);
    newArticle.append("coauthors", coauthors);
    newArticle.append("coauthorsEmails", coauthorsEmails);

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch(`${apiUrl}/api/article/create`, {
        method: "POST",
        body: newArticle,
        headers: {
          Authorization,
        },
      });

      if (!response.ok) {
        const responseText = await response.text();
        console.error("Server Response:", responseText);
        alert("Ошибка!");
        return;
      }

      alert("Статья успешно создана!");
      window.location.reload();
    } catch (error) {
      console.error("Error during article creation:", error);
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const getCategoryLang = (item) => {
    switch (oneUser?.language) {
      case "KG":
        return item.nameKg || item.nameRu;
      case "ENG":
        return item.nameEn || item.nameRu;
      case "RU":
      default:
        return item.nameRu;
    }
  };

  return (
    <div className="mainest">
      <div className="main_div">
        <div className="profile_card">
          <img
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt=""
          />
          <div className="profile_main-info">
            <p>
              <strong>{t("userprofilepage.firstname")}</strong> {oneUser?.firstName}
            </p>
            <p>
              <strong>{t("userprofilepage.lastname")}</strong> {oneUser?.lastName}
            </p>
            <p>
              <strong>{t("userprofilepage.position")}</strong> {oneUser?.role}
            </p>
            <p>
              <strong>{t("userprofilepage.email")}</strong> {oneUser?.email}
            </p>
          </div>
        </div>

        {openArticle && (
          <div className="article_form" id="article_div">
            <h4>{t("tableadmin.title")}</h4>
            <div className="article_form-inputs">
              <div className="short_inp">
                <p className="input_p">{t("tableadmin.article_title")}</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p className="input_p">{t("tableadmin.category")}</p>
                <FormControl sx={{ m: 1, minWidth: 120, height: "49px" }}>
                  <Select
                    className="text_input max_mb"
                    style={{ height: "49px", marginBottom: "120px" }}
                    value={category || ""}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <p style={{ color: "lightgrey", marginBottom: "0px" }}>
                        {t("tableadmin.category2")}
                      </p>
                    </MenuItem>
                    {categories?.map((item) => (
                      <MenuItem key={item.id} value={getCategoryLang(item)}>
                        {item.nameRu}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <p className="input_p">{t("tableadmin.author")}</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={coauthors}
                  onChange={(e) => setCoauthors(e.target.value)}
                />

                <p className="input_p">{t("tableadmin.email")}</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={coauthorsEmails}
                  onChange={(e) => setCoauthorsEmails(e.target.value)}
                />

                <p className="input_p">{t("tableadmin.file")}</p>
                <label className="custom-file-upload">
                  <input type="file" onChange={handleFileChange} />
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9..."/>
                  </svg>
                </label>

                <p className="input_p input_p-text">{t("tableadmin.text")}</p>
                <textarea
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                />
              </div>

              <br />
              <button onClick={handleUpload}>{t("userprofilepage.next")}</button>
              <p id="clear_all" onClick={clearAll}>
                {t("userprofilepage.clear")}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="status-explanation">
        <h4>{t("userprofilepage.status_explanation")}</h4>
        <ul>
          <li>
            <span className="status-cell status-pending">Pending</span> — {t("userprofilepage.status_pending")}
          </li>
          <li>
            <span className="status-cell status-payment">Payment</span> — {t("userprofilepage.status_payment")}
          </li>
          <li>
            <span className="status-cell status-approved">Approved</span> — {t("userprofilepage.status_approved")}
          </li>
          <li>
            <span className="status-cell status-declined">Declined</span> — {t("userprofilepage.status_declined")}
          </li>
        </ul>
      </div>

      <DataTable user={oneUser} id={oneUser?.id} />
    </div>
  );
};

export default UserProfilePage;
