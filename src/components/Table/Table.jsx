import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { articlesContext } from "../../contexts/articleContext";

function createData(id, title, date, author, amount, pages, category, status) {
  return { id, title, date, author, amount, pages, category, status };
}

const rows = [
  createData(
    1,
    "Mathematical and Statistical Skills",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    140,
    "COM",
    "Declined"
  ),
  createData(
    2,
    "Applied Mathematics and Informatics",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    43,
    "COM",
    "Pending"
  ),
  createData(
    3,
    "Machine Learning Algorithms",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    60,
    "COM",
    "Declined"
  ),
  createData(
    4,
    "Organ-on-a-Chip",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    43,
    "COM",
    "Published"
  ),
  createData(
    5,
    "Robotic Surgeons and Rehabilitation",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    33,
    "COM",
    "Pending"
  ),
  createData(
    6,
    "Microbubbles",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    33,
    "COM",
    " Payment"
  ),
  createData(
    7,
    "Robotic Surgeons and Rehabilitation",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    33,
    "COM",
    "Pending"
  ),
  createData(
    8,
    "Microbubbles",
    "23/01/23",
    "So Hyun Kim",
    "$150",
    33,
    "COM",
    " Payment"
  ),
];

export default function BasicTable({ user, id }) {
  const { getAllMyArticles, my_articles } = React.useContext(articlesContext);

  React.useEffect(() => {
    getAllMyArticles();
    console.log(my_articles);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <strong>Nº</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Title</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Author</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Amount</strong>
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
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.pages}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
