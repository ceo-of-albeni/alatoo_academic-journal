import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { articlesContext } from "../../contexts/articleContext";

function createData(id, title, createdAt, coauthors, pages, category, status) {
  return { id, title, createdAt, coauthors, pages, category, status };
}

export default function BasicTable() {
  const { getAllMyArticles, my_articles, getArticles } =
    React.useContext(articlesContext);

  React.useEffect(() => {
    getAllMyArticles();
    getArticles();
  }, []);

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
        item.isApproved === null ? "Pending" : "Approved"
      )
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <strong>Nº</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Title</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Author</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Pages</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Category</strong>
            </TableCell>
            <TableCell align="right">
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
              <TableCell align="left">{row.title}</TableCell>
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
