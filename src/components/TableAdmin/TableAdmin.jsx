import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { articlesContext } from "../../contexts/articleContext";
import "../Table/Table.scss";

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
  const { articles, getArticles } = React.useContext(articlesContext);

  React.useEffect(() => {
    getArticles();
  }, []);

  // let statusArt = "Pending";
  const [statusArt, setStatusArt] = React.useState("Pending");

  // if (item.isPublished == true) {
  //   statusArt = "Published";
  // } else if (item) {
  //   k;
  // }

  let rows = [];
  articles.map(item =>
    rows.push(
      createData(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.coauthors,
        "???",
        item.category,
        statusArt,
        item.fileUrl
      )
    )
  );

  function approveArticle() {
    setStatusArt("Approved");
  }

  function deleteArticle() {
    setStatusArt("Declined");
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="50px" align="left">
              <strong>Nº</strong>
            </TableCell>
            <TableCell width="350px" align="right">
              <strong>Title</strong>
            </TableCell>
            <TableCell width="110px" align="center">
              <strong>Date</strong>
            </TableCell>
            <TableCell width="150px" align="center">
              <strong>Author</strong>
            </TableCell>
            <TableCell width="80px" align="right">
              <strong>Pages</strong>
            </TableCell>
            <TableCell width="180px" align="right">
              <strong>Category</strong>
            </TableCell>
            <TableCell width="90px" align="right">
              <strong>Status</strong>
            </TableCell>
            <TableCell width="90px" align="right">
              <strong></strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {rows.map(row => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">
                <a className="table_a" href={row.fileUrl}>
                  {row.title}
                </a>
              </TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.coauthors}</TableCell>
              <TableCell align="right">{row.pages}</TableCell>
              <TableCell align="right">{row.category.name}</TableCell>
              <TableCell key={row.id} align="right">
                {row.status}
              </TableCell>
              <TableCell align="right">
                <button key={row.id} onClick={approveArticle} id="approve">
                  Approve
                </button>
                <button key={row.pages} id="decline" onClick={deleteArticle}>
                  Decline
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
