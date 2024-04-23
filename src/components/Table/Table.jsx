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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const { getAllMyArticles, my_articles } = React.useContext(articlesContext);

  const [open, setOpen] = React.useState(false);
  const [checkFile, setCheckFile] = React.useState(null);
  const [articleId, setArticleId] = React.useState("");
  const [page, setPage] = React.useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  const handleClose = () => setOpen(false);

  function handleOpen(id) {
    setArticleId(id);
    setOpen(true);
  }

  React.useEffect(() => {
    getAllMyArticles();
    // getArticles();
  }, [searchParams]);

  React.useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const handlePage = (e, p) => {
    setPage(p);
  };

  const itemsOnPage = 5;

  const count = Math.ceil(my_articles.length / itemsOnPage);

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return my_articles.slice(begin, end);
  }

  const handleUpload = async () => {
    if (!checkFile) {
      alert("Input is empty!");
      return;
    }

    const checkData = new FormData();
    checkData.append("checkFile", checkFile);
    checkData.append("articleId", articleId);

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch(
        "http://localhost:3001/api/article/send/checkFile",
        {
          method: "POST",
          body: checkData,
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

      console.log("CHeck norm!");
      alert("Done!");
      setOpen(false);
    } catch (error) {
      console.error("Error during article creation:", error);
    }
  };

  let rows = [];
  my_articles.map(item =>
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

  const handleCheckFileChange = event => {
    const file = event.target.files[0];
    setCheckFile(file);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <TableContainer component={Paper}>
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Check
            </Typography>
            <label className="custom-file-upload">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleCheckFileChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
            </label>
            <Button
              variant="outlined"
              className="sub_check"
              onClick={() => handleUpload()}>
              Submit
            </Button>
          </Box>
        </Modal>
        {/* <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        // className={classes.sr_inp}
      /> */}

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="50px" align="left">
                <strong>Nº</strong>
              </TableCell>
              <TableCell width="350px" align="center">
                <strong>Title</strong>
              </TableCell>
              <TableCell width="110px" align="center">
                <strong>Date</strong>
              </TableCell>
              <TableCell width="150px" align="center">
                <strong>Author</strong>
              </TableCell>
              <TableCell width="80px" align="center">
                <strong>Pages</strong>
              </TableCell>
              <TableCell width="180px" align="center">
                <strong>Category</strong>
              </TableCell>
              <TableCell width="90px" align="center">
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData().map(row => (
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
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.coauthors}</TableCell>
                <TableCell align="center">{row.pages}</TableCell>
                <TableCell align="center">{row.category.name}</TableCell>
                {row.status == "Payment" ? (
                  <TableCell align="center" onClick={() => handleOpen(row.id)}>
                    {row.status}
                  </TableCell>
                ) : (
                  <TableCell align="center">{row.status}</TableCell>
                )}
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
