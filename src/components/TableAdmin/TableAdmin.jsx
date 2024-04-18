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
    getAllNotPublished,
    approveArticle,
    declineArticle,
    getCategories,
    categories,
    createCategory,
    notPublished,
  } = useContext(articlesContext);

  useEffect(() => {
    getCategories();
    getAllNotPublished();
  }, []);

  const [categoryCreate, setCategoryCreate] = useState("");

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

  let rows = [];
  notPublished.map(item =>
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
                    Payment
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
