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
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";

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
  pageCount,
  category,
  status,
  fileUrl
) {
  return {
    id,
    title,
    createdAt,
    coauthors,
    pageCount,
    category,
    status,
    fileUrl,
  };
}

export default function BasicTable() {
  const { t } = useTranslation();
  const { getAllMyArticles, my_articles } = React.useContext(articlesContext);

  const [open, setOpen] = React.useState(false);
  const [checkFile, setCheckFile] = React.useState(null);
  const [articleId, setArticleId] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false); // индикатор загрузки

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const [search, setSearch] = React.useState(q);

  React.useEffect(() => {
    setSearch(q);
  }, [q]);

  React.useEffect(() => {
    setSearchParams({ q: search });
  }, [search, setSearchParams]);

  React.useEffect(() => {
    getAllMyArticles();
  }, [q, getAllMyArticles]);

  const handleClose = () => setOpen(false);

  function handleOpen(id) {
    setArticleId(id);
    setOpen(true);
  }
  const navigate = useNavigate();
  const handlePage = (e, p) => {
    setPage(p);
  };

  const itemsOnPage = 5;

  const count = Math.ceil(my_articles.length / itemsOnPage);

  function currentData() {
    const sorted = [...my_articles].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return sorted.slice(begin, end);
  }

  const handleUpload = async () => {
    if (!checkFile) {
      alert("Поле не заполнено!");
      return;
    }

    setLoading(true); // старт загрузки

    const checkData = new FormData();
    checkData.append("checkFile", checkFile);
    checkData.append("articleId", articleId);
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch(`${apiUrl}/api/article/send/checkFile`, {
        method: "POST",
        body: checkData,
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
        setLoading(false); // конец загрузки
        return;
      }

      alert("Готово!");
      setOpen(false);
    } catch (error) {
      console.error("Error during article creation:", error);
      alert("Ошибка при отправке!");
    } finally {
      setLoading(false); // конец загрузки
    }
  };

  let rows = [];
  my_articles.map((item) =>
    rows.push(
      createData(
        item.id,
        item.title,
        item.createdAt,
        item.coauthors,
        item.pageCount,
        item.category,
        item.status,
        item.fileUrl
      )
    )
  );

  const handleCheckFileChange = (event) => {
    const file = event.target.files[0];
    setCheckFile(file);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper}>
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {t("table.check")}
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
                viewBox="0 0 640 512"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
            </label>
            <Button
              variant="outlined"
              className="sub_check"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  {t("table.sending")}
                </>
              ) : (
                t("table.submit")
              )}
            </Button>
          </Box>
        </Modal>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="50px" align="left">
                <strong>Nº</strong>
              </TableCell>
              <TableCell width="350px" align="center">
                <strong>{t("table.title")}</strong>
              </TableCell>
              <TableCell width="110px" align="center">
                <strong>{t("table.date")}</strong>
              </TableCell>
              <TableCell width="150px" align="center">
                <strong>{t("table.author")}</strong>
              </TableCell>
              <TableCell width="80px" align="center">
                <strong>{t("table.pages")}</strong>
              </TableCell>
              <TableCell width="180px" align="center">
                <strong>{t("table.category")}</strong>
              </TableCell>
              <TableCell width="90px" align="center">
                <strong>{t("table.status")}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData().map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <p
                    className="table_a"
                    onClick={() => navigate(`/comments/${row.id}`)}
                  >
                    {row.title}
                  </p>
                </TableCell>
                <TableCell align="center">
                  {(() => {
                    const d = new Date(row.createdAt);
                    const day = String(d.getDate()).padStart(2, "0");
                    const month = String(d.getMonth() + 1).padStart(2, "0");
                    const year = d.getFullYear();
                    const hours = String(d.getHours()).padStart(2, "0");
                    const minutes = String(d.getMinutes()).padStart(2, "0");
                    return `${day} ${month} ${year} ${hours}:${minutes}`;
                  })()}
                </TableCell>
                <TableCell align="center">{row.coauthors}</TableCell>
                <TableCell align="center">{row.pageCount}</TableCell>
                <TableCell align="center">{row.category.nameRu}</TableCell>
                <TableCell
                  align="center"
                  onClick={() =>
                    row.status === "Payment" && handleOpen(row.id)
                  }
                >
                  <span
                    className={`status-cell ${
                      row.status === "Pending"
                        ? "status-pending"
                        : row.status === "Payment"
                        ? "status-payment"
                        : row.status === "Approved"
                        ? "status-approved"
                        : row.status === "Declined"
                        ? "status-declined"
                        : ""
                    }`}
                  >
                    {row.status}
                  </span>
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
