import React, { useState, useContext, useEffect } from "react";
import "./UserProfilePage.scss";
import DataTable from "../../components/Table/Table";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import BasicTextFields from "../../components/Search/Search";
import MultipleSelectPlaceholder from "../../components/StatusDrop/Status";
import Category from "../../components/Category/Category";
import PaginationControlled from "../../components/Pagination/PaginationTable";
import { articlesContext } from "../../contexts/articleContext";
import { useParams, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const UserProfilePage = () => {
  const { categories, getCategories, getAllMyArticles, my_articles } =
    useContext(articlesContext);

  const navigate = useNavigate();

  const API = "http://localhost:3000/api";

  const [oneUser, setOneUser] = useState(null);

  const { id } = useParams();

  async function getOneUser(id) {
    const res = await axios.get(`${API}/user/${id}`);
    setOneUser(res.data);
  }

  useEffect(() => {
    getOneUser(id);
    getAllMyArticles();
    getCategories();
  }, []);
  console.log(categories);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  function clearAll() {
    setTitle("");
    setCategory("");
    setCoauthors("");
    setText("");
    setSelectedFile(null);
  }

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile || !title || !coauthors || !text || !category) {
      alert("Some inputs are empty!");
      return;
    }

    const newArticle = new FormData();
    newArticle.append("file", selectedFile);
    newArticle.append("title", title);
    newArticle.append("text", text);
    newArticle.append("category", category);
    newArticle.append("coauthors", coauthors);

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      const response = await fetch("http://localhost:3000/api/article/create", {
        method: "POST",
        body: newArticle,
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
    setSelectedFile(null);
  };

  const handleChange = event => {
    setCategory(event.target.value);
  };

  const [openArticle, setOpenArticle] = useState(true);
  const [openPayment, setOpenPayment] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const closeOpenPayment = () => {
    setOpenArticle(false);
    setOpenPayment(true);
  };

  const closeOpenSuccess = () => {
    setOpenPayment(false);
    setOpenSuccess(true);
    handleUpload();
  };

  return (
    <div className="mainest">
      <div className="main_div">
        <div className="profile_card">
          <img
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt=""
          />
          <div className="profile_main-info">
            <p>
              <strong>First Name: </strong> {oneUser?.firstName}
            </p>

            <p>
              <strong>Last Name: </strong> {oneUser?.lastName}
            </p>
            <p>
              <strong>Position: </strong> {oneUser?.role}
            </p>
            <p>
              <strong>Email: </strong> {oneUser?.email}
            </p>
          </div>
          <p className="edit_prof">Edit Profile</p>
        </div>

        {openArticle && (
          <div className="article_form" id="article_div">
            <h4>ARTICLE</h4>
            <div className="article_form-inputs">
              <div className="short_inp">
                <p className="input_p">Article title*</p>
                <input
                  className="text_input"
                  placeholder="Click and start typing"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <p className="input_p">Category*</p>
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
                        Category
                      </p>
                    </MenuItem>
                    {categories ? (
                      categories.map(item => (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))
                    ) : (
                      <h3>Loading...</h3>
                    )}
                  </Select>
                </FormControl>
                <p className="input_p">
                  Full name of each author of the article*
                </p>
                <input
                  className="text_input"
                  placeholder="Click and start typing"
                  type="text"
                  value={coauthors}
                  onChange={e => setCoauthors(e.target.value)}
                />

                <p className="input_p">Article file*</p>
                <label className="custom-file-upload">
                  <input
                    type="file"
                    // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                  </svg>
                </label>

                <p className="input_p input_p-text">Text*</p>
                <input
                  className="text_input"
                  placeholder="Click and start typing"
                  type="text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
              </div>

              <br />
              <button onClick={handleUpload}>Next</button>
              <p id="clear_all" onClick={clearAll}>
                Clear all
              </p>
              {/* <div>
                <input type="checkbox" /> By submitting this form, you agree to
                Privacy Policy
              </div> */}
            </div>
          </div>
        )}
      </div>

      <div className="filtration">
        {/* <BasicDatePicker /> */}
        {/* <BasicTextFields /> */}
        {/* <MultipleSelectPlaceholder /> */}
        {/* <Category /> */}
      </div>
      <DataTable user={oneUser} id={oneUser?.id} />
      {/* <PaginationControlled /> */}
    </div>
  );
};

export default UserProfilePage;
