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
    paymentArticle,
    declineArticle,
    getCategories,
    categories,
    createCategory,
    notPublished,
    approveArticle,
  } = useContext(articlesContext);

  useEffect(() => {
    getCategories();
    getAllNotPublished();
  }, []);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const itemsOnPage = 5;

  const count = Math.ceil(notPublished.length / itemsOnPage);

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return notPublished.slice(begin, end);
  }

  const [categoryCreate, setCategoryCreate] = useState("");
  const [page, setPage] = React.useState(1);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
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
            {currentData().map(row => (
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
                  {row.status === "Payment" ? (
                    <>
                      <button
                        key={`${row.id}-approve`}
                        onClick={() => approveArticle(row.id)}
                        id="approve">
                        Approve article
                      </button>
                      <button
                        key={`${row.id}-decline`}
                        id="decline"
                        onClick={() => declineArticle(row.id)}>
                        Decline payment
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        key={`${row.id}-approve`}
                        onClick={() => paymentArticle(row.id)}
                        id="approve">
                        Approve payment
                      </button>
                      <button
                        key={`${row.id}-decline`}
                        id="decline"
                        onClick={() => declineArticle(row.id)}>
                        Decline article
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
    </div>
  );
}
