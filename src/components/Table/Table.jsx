import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { articlesContext } from "../../contexts/articleContext";
import "./Table.scss";

function createData(
  id,
  title,
  createdAt,
  coauthors,
  pages,
  category,
  status,
  fileUrl
) {
  return { id, title, createdAt, coauthors, pages, category, status, fileUrl };
}

export default function BasicTable() {
  const { getAllMyArticles, my_articles, getArticles } =
    React.useContext(articlesContext);

  React.useEffect(() => {
    getAllMyArticles();
    getArticles();
  }, []);

  let statusArt = "Pending";
  async function statusArticle(item) {
    if (item.isApproved == true) {
      statusArt = "Published";
    } else if (item.isApproved == false) {
      statusArt = "Declined";
    } else {
      statusArt = "Pending";
    }
    return statusArt;
  }
  // statusArticle(item)

  let rows = [];
  my_articles.map(item =>
    rows.push(
      createData(
        item.id,
        item.title,
        item.createdAt.slice(0, 10),
        item.coauthors,
        "???",
        item.category,
        // statusArticle(item),
        item.isApproved ? "Approved" : "Pending",
        item.fileUrl
      )
    )
  );

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
          </TableRow>
        </TableHead>
        <TableBody>
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
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
