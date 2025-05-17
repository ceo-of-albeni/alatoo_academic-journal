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
import "../TableAdmin/TableAdmin.scss";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

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

function createData2(id, title, createdAt, content, imagePath, buttons) {
  return {
    id,
    title,
    createdAt,
    content,
    imagePath,
    buttons,
  };
}

function createData3(
  id,
  title,
  createdAt,
  coauthors,
  pages,
  category,
  status,
  fileUrl
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
  };
}

export default function BasicTableAdmin() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    getAllNotPublished,
    paymentArticle,
    declineArticle,
    getCategories,
    createCategory,
    notPublished,
    approveArticle,
    getAllNews,
    allNews,
    publishNews,
    publishedNews,
    getAllApproved,
    approved_articles,
  } = useContext(articlesContext);

  useEffect(() => {
    getCategories();
    getAllNotPublished();
    getAllNews();
    getAllApproved();
  }, []);

  console.log(approved_articles);
  console.log(notPublished);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const handlePage2 = (e, p) => {
    setPage2(p);
  };

  const handlePage3 = (e, p) => {
    setPage3(p);
  };

  const itemsOnPage = 5;

  const count = Math.ceil(notPublished.length / itemsOnPage);
  const count2 = Math.ceil(allNews.length / itemsOnPage);
  const count3 = Math.ceil(approved_articles.length / itemsOnPage);

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return notPublished.slice(begin, end);
  }

  function currentData2() {
    const begin = (page2 - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return allNews.slice(begin, end);
  }

  function currentData3() {
    const begin = (page3 - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return approved_articles.slice(begin, end);
  }

  const [categoryCreateEn, setCategoryCreateEn] = useState("");
  const [categoryCreateRu, setCategoryCreateRu] = useState("");
  const [categoryCreateKg, setCategoryCreateKg] = useState("");
  const [page, setPage] = React.useState(1);
  const [page2, setPage2] = React.useState(1);
  const [page3, setPage3] = React.useState(1);

  function handleCategoryCreate() {
    if (!categoryCreateEn && !categoryCreateRu && !categoryCreateKg) {
      alert("Поле не заполнено!");
    }

    let newCategory = {
      nameEn: categoryCreateEn,
      nameRu: categoryCreateRu,
      nameKg: categoryCreateKg,
    };

    createCategory(newCategory);

    setCategoryCreateEn("");
    setCategoryCreateRu("");
    setCategoryCreateKg("");
  }

  let rows = [];
  notPublished.map((item) =>
    rows.push(
      createData(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.coauthors,
        item.pageCount,
        item.category.nameRu,
        item.status,
        item.fileUrl
      )
    )
  );

  let rows2 = [];
  allNews.map((item) =>
    rows2.push(
      createData2(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.content,
        item.imagePath
      )
    )
  );

  let rows3 = [];
  approved_articles.map((item) =>
    rows3.push(
      createData3(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.coauthors,
        item.pageCount,
        // item.category.nameRu,
        item.status,
        item.fileUrl
      )
    )
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <div className="admin_article-categoty_main">
          <div className="article_form" id="article_div">
            <h4>{t("tableadmin.category3")}</h4>
            <div className="article_form-inputs">
              <div className="short_inp">
                <p className="input_p">{t("tableadmin.add")} En</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={categoryCreateEn}
                  onChange={(e) => setCategoryCreateEn(e.target.value)}
                />
              </div>

              <div className="short_inp">
                <p className="input_p">{t("tableadmin.add")} Ru</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={categoryCreateRu}
                  onChange={(e) => setCategoryCreateRu(e.target.value)}
                />
              </div>

              <div className="short_inp">
                <p className="input_p">{t("tableadmin.add")} Kg</p>
                <input
                  className="text_input"
                  placeholder={t("tableadmin.ph")}
                  type="text"
                  value={categoryCreateKg}
                  onChange={(e) => setCategoryCreateKg(e.target.value)}
                />
              </div>

              <br />
              <button onClick={handleCategoryCreate}>
                {t("tableadmin.button")}
              </button>
            </div>
          </div>
        </div>
        <h3>{t("tableadmin.under_review")}</h3>
        <br />
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
              {currentData().map((row) => (
                <TableRow
                  key={row.id}
                  height="60px"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">
                    <a
                      className="table_a"
                      onClick={() => navigate(`/comments/${row.id}`)}>
                      {row.title}
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    {row.createdAt.slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">{row.coauthors}</TableCell>
                  <TableCell align="center">{row.pageCount}</TableCell>
                  <TableCell align="center">{row.category?.nameRu}</TableCell>
                  <TableCell key={row.id} align="center">
                    {row.status}
                  </TableCell>
                  <TableCell align="center">
                    {row.status === "Payment" ? (
                      <>
                        <button
                          key={`${row.id}-approve`}
                          onClick={() => approveArticle(row.id)}
                          id="approve">
                          {t("tableadmin.apr_arc")}
                        </button>
                        <button
                          key={`${row.id}-decline`}
                          id="decline"
                          onClick={() => declineArticle(row.id)}>
                          {t("tableadmin.dec_pay")}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          key={`${row.id}-approve`}
                          onClick={() => paymentArticle(row.id)}
                          id="approve">
                          {t("tableadmin.apr_pay")}
                        </button>
                        <button
                          key={`${row.id}-decline`}
                          id="decline"
                          onClick={() => declineArticle(row.id)}>
                          {t("tableadmin.dec_arc")}
                        </button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          style={{ marginTop: "40px" }}
          count={count}
          page={page}
          onChange={handlePage}
        />

        <br />
        <br />
        <h3>{t("tableadmin.published")}</h3>
        <br />
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
                {/* <TableCell width="80px" align="center">
                <strong></strong>
              </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {currentData3().map((row) => (
                <TableRow
                  key={row.id}
                  height="60px"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">
                    <a
                      className="table_a"
                      onClick={() => navigate(`/comments/${row.id}`)}>
                      {row.title}
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    {row.createdAt.slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">{row.coauthors}</TableCell>
                  <TableCell align="center">{row.pageCount}</TableCell>
                  <TableCell align="center">{row.category?.nameRu}</TableCell>
                  <TableCell key={row.id} align="center">
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          style={{ marginTop: "40px" }}
          count={count3}
          page={page3}
          onChange={handlePage3}
        />
      </div>
      <br />
      <br />

      <br />
      <br />

      {/* news */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h3>{t("tableadmin.news")}</h3>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="50px" align="center">
                  <strong>Nº</strong>
                </TableCell>
                <TableCell width="210px" align="center">
                  <strong>{t("table.title")}</strong>
                </TableCell>
                <TableCell width="80px" align="center">
                  <strong>{t("table.date")}</strong>
                </TableCell>
                <TableCell width="330px" align="center">
                  <strong>{t("tableadmin.content")}</strong>
                </TableCell>
                <TableCell width="50px" align="center">
                  <strong></strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {currentData2().map((row) => (
                <TableRow
                  key={row.id}
                  height="60px"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">
                    {row.createdAt.slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">{row.content}</TableCell>
                  <TableCell align="center">
                    {row.isPublic === false ? (
                      <>
                        <button
                          key={`${row.id}-approve`}
                          onClick={() => publishNews(row.id)}
                          id="approve">
                          {t("tableadmin.publish")}
                        </button>
                      </>
                    ) : (
                      <>
                        <strong></strong>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          style={{ marginTop: "40px" }}
          count={count2}
          page={page2}
          onChange={handlePage2}
        />
      </div>
    </div>
  );
}
