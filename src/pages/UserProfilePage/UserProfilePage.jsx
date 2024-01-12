import React, { useState, useContext } from "react";
import "./UserProfilePage.scss";
import SuccessModal from "./UserPageModals/SuccessModal";
import DataTable from "../../components/Table/Table";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import BasicTextFields from "../../components/Search/Search";
import MultipleSelectPlaceholder from "../../components/StatusDrop/Status";
import Category from "../../components/Category/Category";
import PaginationControlled from "../../components/Pagination/PaginationTable";
import { articlesContext } from "../../contexts/articleContext";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const UserProfilePage = () => {
  const { createArticle, categories, oneUser } = useContext(articlesContext);

  const navigate = useNavigate();

  function clearAll() {
    setTitle("");
    setCategory("");
    setCoauthors("");
    // setEmail("");
    setText("");
    setFile(null);
  }

  function clearAllCard() {
    setCardNum("");
  }

  const handleChange = event => {
    setCategory(event.target.value);
  };

  const [cardNum, setCardNum] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  // const [email, setEmail] = useState("");
  // const [fileEncoding, setFileEncoding] = useState(null);

  const handleFileChange = event => {
    let upFile = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
      newFile.buffer = event.target.result;
      // console.log("File Object:", newFile);
    };
    reader.readAsArrayBuffer(upFile);

    // reader.onloadend = () => {
    //   const fileContent = reader.result;

    //   const detectedEncoding = encoding.detect(fileContent);

    //   if (detectedEncoding) {
    //     setFileEncoding(detectedEncoding);
    //   } else {
    //     console.log(
    //       "Unable to detect encoding. Consider specifying it manually."
    //     );
    //   }

    //   reader.readAsText(event.target.files[0]);
    // };

    // // buffer
    // const bufferr = new ArrayBuffer(event.target.files[0]);
    // // const nodeBuffer = Buffer.from(bufferr);
    // const view = new Int32Array(bufferr);

    // // field name
    // const substrings = event.target.files[0].name.split(".");
    // const substringAfter = substrings[1].trim();

    // let newFile = {
    //   fieldname: substringAfter,
    //   originalname: event.target.files[0].name,
    //   encoding: fileEncoding,
    //   mimetype: event.target.files[0].type,
    //   buffer: view,
    //   size: event.target.files[0].size,
    // };

    const newFile = {
      fieldname: "file",
      originalname: upFile.name,
      encoding: "7bit", // Указываем 7bit вручную
      mimetype: upFile.type,
      buffer: null, // Загрузка буфера произойдет асинхронно
      size: upFile.size,
    };

    setFile(newFile);
  };

  function saveArticle() {
    if (!title || !coauthors || !text || !file || !category) {
      alert("Some inputs are empty!");
      return;
    }

    let newArticle = new FormData();
    newArticle.append("title", title);
    newArticle.append("category", category);
    newArticle.append("coauthors", coauthors);
    newArticle.append("text", text);
    newArticle.append("file", file);
    createArticle(newArticle);
    console.log(file);

    setTitle("");
    setCategory("");
    setCoauthors("");
    // setEmail("");
    setText("");
    setFile(null);

    console.log(category);
  }

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
    saveArticle();
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
              <strong>First Name: </strong> Aliia
            </p>
            <p>
              <strong>Last Name: </strong> Malaeva
            </p>
            <p>
              <strong>Position: </strong> Author
            </p>
            <p>
              <strong>Email: </strong> {localStorage.getItem("email")}
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
                      // display: "flex",
                      // alignItems: "center",
                    }}
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}>
                    <MenuItem value="">
                      <p style={{ color: "lightgrey" }}>Category</p>
                    </MenuItem>
                    {/* {categories.map(item => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))} */}
                    <MenuItem value={"Philosophy"}>Philosophy</MenuItem>
                    <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                    <MenuItem value={"Languages"}>Languages</MenuItem>
                    <MenuItem value={"History"}>History</MenuItem>
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
                {/* <p className="input_p">Email of each author of the article*</p>
                <input
                  className="text_input"
                  placeholder="Click and start typing"
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                /> */}
                <p className="input_p">Article file*</p>
                <label className="custom-file-upload">
                  {/* <input type="file" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button> */}
                  <input
                    type="file"
                    // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    // onChange={e => setFile(e.target.files[0])}
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
              <button onClick={closeOpenPayment}>Next</button>
              {/* onClick={closeOpenPayment}  */}
              <p id="clear_all" onClick={clearAll}>
                Clear all
              </p>
              <div>
                <input type="checkbox" /> By submitting this form, you agree to
                Privacy Policy
              </div>
            </div>
          </div>
        )}
        {openPayment && (
          <div className="article_form">
            <h4>Payment</h4>
            <div className="article_form-inputs">
              <div className="short_inp">
                {/* <p className="input_p">First name*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  />
                  <p className="input_p">Last name*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
                {/* <p className="input_p">Country*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
                {/* <p className="input_p">Zip code*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
              </div>
              <div className="card_inp">
                <p className="input_p">Credit card details*</p>
                <input
                  // className="text_input"
                  id="card_input"
                  placeholder="Card number         MM    YYYY   CVV"
                  type="text"
                  value={cardNum}
                  onChange={e => setCardNum(e.target.value)}
                />
              </div>
              <br />
              <button onClick={closeOpenSuccess}>Get instant access now</button>
              <p id="clear_all" onClick={clearAllCard}>
                Clear all
              </p>
              <div>
                <input type="checkbox" /> By submitting this form, you agree to
                Privacy Policy
              </div>
            </div>
          </div>
        )}
        {openSuccess && <SuccessModal closeModal={setOpenSuccess} />}
      </div>

      <div className="filtration">
        <BasicDatePicker />
        <BasicTextFields />
        <MultipleSelectPlaceholder />
        <Category />
      </div>
      <DataTable />
      <PaginationControlled />
    </div>
  );
};

export default UserProfilePage;
