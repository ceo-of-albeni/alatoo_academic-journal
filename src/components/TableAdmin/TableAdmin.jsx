import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Paper } from "@mui/material";
import { articlesContext } from "../../contexts/articleContext";
import "../Table/Table.scss";
import "../../pages/UserProfilePage/UserProfilePage.scss";
import { authContext } from "../../contexts/authContext";
import { useTranslation } from "react-i18next";

function createData(
  id,
  title,
  createdAt,
  coauthors,
  pages,
  category,
  status,
  fileUrl,
  buttons
) {
  return {
    id,
    title,
    createdAt,
    coauthors,
    pages,
    category,
    status,
    fileUrl,
    buttons,
  };
}

export default function BasicTableAdmin() {
  const { t, i18n } = useTranslation();
  const {
    articles,
    getArticles,
    approveArticle,
    declineArticle,
    getCategories,
    categories,
    createCategory,
  } = useContext(articlesContext);
  const { oneUser, getOneUser } = useContext(authContext);

  useEffect(() => {
    getOneUser();
    getCategories();
  }, []);

  const [title, setTitle] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [articleFile, setArticleFile] = useState(null);
  const [yearString, setYearString] = useState("");
  const [volumeString, setVolumeString] = useState("");
  const [editionString, setEditionString] = useState("");
  const [userID, setUserID] = useState("");

  const [categoryCreate, setCategoryCreate] = useState("");

  const handleFileChange = event => {
    const file = event.target.files[0];
    setArticleFile(file);
  };

  function handleCategoryCreate() {
    if (!categoryCreate) {
      alert("Input is empty!");
    }

    let newCategory = {
      name: categoryCreate,
    };

    createCategory(newCategory);

    setCategoryCreate("");
  }

  const handleUpload = async () => {
    if (
      !articleFile ||
      !title ||
      !coauthors ||
      !text ||
      !category ||
      !email ||
      !yearString ||
      !volumeString ||
      !editionString ||
      !userID
    ) {
      alert("Some inputs are empty!");
      return;
    }
    setUserID(oneUser.id);

    const newArticle = new FormData();
    newArticle.append("articleFile", articleFile);
    newArticle.append("title", title);
    newArticle.append("text", text);
    newArticle.append("category", category);
    newArticle.append("coauthors", coauthors);
    newArticle.append("coauthorsEmails", email);
    newArticle.append("yearString", yearString);
    newArticle.append("volumeString", volumeString);
    newArticle.append("editionString", editionString);
    newArticle.append("userID", userID);

    alert("Wait for a few seconds and refresh the page!");

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch(
        "http://localhost:3000/api/article/publish/article",
        {
          method: "POST",
          body: newArticle,
          headers: {
            Authorization,
          },
        }
      );

      if (!response.ok) {
        console.error(
          "Server returned an error:",
          response.status,
          response.statusText
        );
        const responseText = await response.text();
        console.error("Server Response:", responseText);
        alert("Error!");
        return;
      }

      console.log("Article created successfully!");
      alert("Success!");
    } catch (error) {
      console.error("Error during article creation:", error);
    }

    setTitle("");
    setCategory("");
    setCoauthors("");
    setText("");
    setArticleFile(null);
    setEmail("");
    setEditionString("");
    setUserID("");
    setVolumeString("");
    setYearString("");
  };

  const handleChange = event => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getArticles();
  }, []);

  let rows = [];
  articles.map(item =>
    rows.push(
      createData(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.coauthors,
        item.pageCount,
        item.category,
        item.status,
        item.fileUrl
      )
    )
  );

  return (
    <div>
      <div className="admin_article-categoty_main">
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
                onChange={e => setTitle(e.target.value)}
              />
              <p className="input_p">{t("tableadmin.category")}</p>
              <FormControl sx={{ m: 1, minWidth: 120, height: "49px" }}>
                <Select
                  className="text_input max_mb"
                  style={{
                    height: "49px",
                    marginBottom: "120px",
                  }}
                  value={category}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem value="">
                    <p style={{ color: "lightgrey", marginBottom: "0px" }}>
                      {t("tableadmin.category2")}
                    </p>
                  </MenuItem>
                  {categories ? (
                    categories.map(item => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
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
                onChange={e => setCoauthors(e.target.value)}
              />

              <p className="input_p">{t("tableadmin.email")}</p>
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <p className="input_p">{t("tableadmin.year")}</p>
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={yearString}
                onChange={e => setYearString(e.target.value)}
              />

              <p className="input_p">{t("tableadmin.volume")}</p>
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={volumeString}
                onChange={e => setVolumeString(e.target.value)}
              />

              <p className="input_p">{t("tableadmin.edition")}</p>
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={editionString}
                onChange={e => setEditionString(e.target.value)}
              />

              <p className="input_p">{t("tableadmin.file")}</p>
              <label className="custom-file-upload">
                <input
                  type="file"
                  accept="application/pdf"
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
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </div>

            <br />
            <button onClick={handleUpload}>{t("tableadmin.button")}</button>
          </div>
        </div>
        <div className="article_form" id="article_div">
          <h4>CATEGORY</h4>
          <div className="article_form-inputs">
            <div className="short_inp">
              <p className="input_p">{t("tableadmin.add")}</p>
              <input
                className="text_input"
                placeholder={t("tableadmin.ph")}
                type="text"
                value={categoryCreate}
                onChange={e => setCategoryCreate(e.target.value)}
              />
            </div>

            <br />
            <button onClick={handleCategoryCreate}>
              {t("tableadmin.button")}
            </button>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="50px" align="center">
                <strong>Nº</strong>
              </TableCell>
              <TableCell width="330px" align="center">
                <strong>{t("table.title")}</strong>
              </TableCell>
              <TableCell width="100px" align="center">
                <strong>{t("table.date")}</strong>
              </TableCell>
              <TableCell width="130px" align="center">
                <strong>{t("table.author")}</strong>
              </TableCell>
              <TableCell width="80px" align="center">
                <strong>{t("table.pages")}</strong>
              </TableCell>
              <TableCell width="150px" align="center">
                <strong>{t("table.category")}</strong>
              </TableCell>
              <TableCell width="100px" align="center">
                <strong>{t("table.status")}</strong>
              </TableCell>
              <TableCell width="80px" align="center">
                <strong></strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {rows.map(row => (
              <TableRow
                key={row.id}
                height="60px"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <a className="table_a" href={row.fileUrl}>
                    {row.title}
                  </a>
                </TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.coauthors}</TableCell>
                <TableCell align="center">{row.pages}</TableCell>
                <TableCell align="center">{row.category.name}</TableCell>
                <TableCell key={row.id} align="center">
                  {row.status}
                </TableCell>
                <TableCell align="center">
                  <button
                    key={row.id}
                    onClick={() => approveArticle(row.id)}
                    id="approve">
                    Approve
                  </button>
                  <button
                    key={row.pages}
                    id="decline"
                    onClick={() => declineArticle(row.id)}>
                    Decline
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
