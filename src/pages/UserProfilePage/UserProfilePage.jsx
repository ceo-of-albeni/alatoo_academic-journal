import React, { useState, useContext, useEffect } from "react";
import "./UserProfilePage.scss";
import DataTable from "../../components/Table/Table";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import MultipleSelectPlaceholder from "../../components/StatusDrop/Status";
import Category from "../../components/Category/Category";
import { articlesContext } from "../../contexts/articleContext";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { authContext } from "../../contexts/authContext";
import { useTranslation } from "react-i18next";
// import { useSearchParams } from "react-router-dom";

const UserProfilePage = () => {
  const { t } = useTranslation();
  const { categories, getCategories, getAllMyArticles } =
    useContext(articlesContext);
  const { getOneUser, oneUser } = useContext(authContext);

  useEffect(() => {
    getAllMyArticles();
    getCategories();
    getOneUser();
  }, []);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [text, setText] = useState("");
  const [articleFile, setArticleFile] = useState(null);
  const [coauthorsEmails, setCoauthorsEmails] = useState("");

  function clearAll() {
    setTitle("");
    setCategory("");
    setCoauthors("");
    setText("");
    setArticleFile(null);
    setCoauthorsEmails("");
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArticleFile(file);
    console.log(file);
  };

  const handleUpload = async () => {
    if (
      !articleFile ||
      !title ||
      !coauthors ||
      !text ||
      !category ||
      !coauthorsEmails
    ) {
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

    // alert("Wait for a few seconds and refresh the page!");

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch("http://localhost:3001/api/article/create", {
        method: "POST",
        body: newArticle,
        headers: {
          Authorization,
        },
      });

      if (!response.ok) {
        console.error(
          "Server returned an error:",
          response.status,
          response.statusText
        );
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

    setTitle("");
    setCategory("");
    setCoauthors("");
    setText("");
    setArticleFile(null);
    setCoauthorsEmails("");
    // setCheckFile(null);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // Определяем, какое поле использовать в зависимости от языка
  const getCategoryLang = (item) => {
    switch (oneUser?.language) {
      case "KG":
        return item.nameKg || item.nameRu; // fallback на RU если KG не определен
      case "ENG":
        return item.nameEn || item.nameRu; // fallback на RU если ENG не определен
      case "RU":
      default:
        return item.nameRu;
    }
  };
  const [openArticle, setOpenArticle] = useState(true);
  const [openPayment, setOpenPayment] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const closeOpenPayment = () => {
    setOpenArticle(false);
    setOpenPayment(true);
  };

  const closeOpenSuccess = () => {
    setOpenPayment(false);
    setOpenSuccess(true);
    handleUpload();
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
              <strong>{t("userprofilepage.firstname")}</strong>{" "}
              {oneUser?.firstName}
            </p>

            <p>
              <strong>{t("userprofilepage.lastname")}</strong>{" "}
              {oneUser?.lastName}
            </p>
            <p>
              <strong>{t("userprofilepage.position")}</strong> {oneUser?.role}
            </p>
            <p>
              <strong>{t("userprofilepage.email")}</strong> {oneUser?.email}
            </p>
          </div>
          {/* <p className="edit_prof">Edit Profile</p> */}
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
                    style={{
                      height: "49px",
                      marginBottom: "120px",
                    }}
                    value={category || ""}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}>
                    <MenuItem value="">
                      <p style={{ color: "lightgrey", marginBottom: "0px" }}>
                        {t("tableadmin.category2")}
                      </p>
                    </MenuItem>
                    {categories ? (
                      categories.map((item) => (
                        <MenuItem key={item.id} value={getCategoryLang(item)}>
                          {item.nameRu}
                        </MenuItem>
                      ))
                    ) : (
                      <h3>{t("tableadmin.loading")}</h3>
                    )}
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
                  <input
                    type="file"
                    // accept=""
                    onChange={handleFileChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                  </svg>
                </label>

                <p className="input_p input_p-text">{t("tableadmin.text")}</p>
                <textarea
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                />
              </div>

              <br />
              <button onClick={handleUpload}>
                {t("userprofilepage.next")}
              </button>
              <p id="clear_all" onClick={clearAll}>
                {t("userprofilepage.clear")}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="filtration">
        {/* <BasicDatePicker /> */}
        {/* <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          // className={classes.sr_inp}
        /> */}
        {/* <MultipleSelectPlaceholder /> */}
        {/* <Category /> */}
      </div>
      <DataTable user={oneUser} id={oneUser?.id} />
    </div>
  );
};

export default UserProfilePage;
