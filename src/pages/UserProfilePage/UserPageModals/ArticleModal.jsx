import React, { useState, useContext } from "react";
import "../UserProfilePage.scss";
import { articlesContext } from "../../../contexts/articleContext";
import { useNavigate } from "react-router-dom";

const ArticleModal = () => {
  const { createArticle } = useContext(articlesContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState("");

  // function handleFileChange(event) {
  //   const selectedFile = event.target.files[0];

  //   if (selectedFile) {
  //     const reader = new FileReader();

  //     reader.onload = function (e) {
  //       const fileData = e.target.result; // This will be the file content

  //       // Save the file data to local storage
  //       localStorage.setItem("file", fileData);
  //     };

  //     // Read the file as a data URL (base64-encoded string)
  //     reader.readAsDataURL(selectedFile);
  //   }
  // }

  function saveArticle() {
    if (!title || !category || !author || !email || !file || !phone) {
      alert("Some inputs are empty!");
      return;
    }

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const fileData = e.target.result;

        let newArticle = {
          title,
          category,
          author,
          email,
          file,
          phone,
        };

        createArticle(newArticle);

        localStorage.setItem("file", fileData);
      };

      // Read the file as a data URL (base64-encoded string)
      reader.readAsDataURL(file);
    }

    // let newArticle = {
    //   title,
    //   category,
    //   author,
    //   email,
    //   file,
    //   phone,
    // };

    // let newArticle = new FormData();
    // newArticle.append("title", title);
    // newArticle.append("category", category);
    // newArticle.append("author", author);
    // newArticle.append("email", email);
    // newArticle.append("file", file);
    // newArticle.append("phone", phone);
    // createArticle(newArticle, navigate);

    // createArticle(newArticle);

    setTitle("");
    setCategory("");
    setAuthor("");
    setEmail("");
    setFile("");
    setPhone("");

    // navigate("/");
  }

  return (
    <div className="article_form" id="article_div">
      <h4>ARTICLE</h4>
      <div className="article_form-inputs">
        <div className="short_inp">
          <p className="input_p">Article title*</p>
          <input
            className="text_input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Click and start typing"
            type="text"
          />
          <p className="input_p">Category*</p>
          <input
            className="text_input"
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="Click and start typing"
            type="text"
          />
          <p className="input_p">Full name of each author of the article*</p>
          <input
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="text_input"
            placeholder="Click and start typing"
            type="text"
          />
          <p className="input_p">Email of each author of the article*</p>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="text_input"
            placeholder="Click and start typing"
            type="text"
          />
          {/* <input
          
            className="text_input"
            placeholder="Click and start typing"
            type="text"
          /> */}
          <p className="input_p">Article file*</p>
          <label className="custom-file-upload">
            {/* <input
              type="file"
              // value={file}
              // accept="image/*"
              onChange={e => handleFileChange(e.target.files[0])}
            /> */}
            <input
              type="file"
              id="fileInput"
              onChange={e => setFile(e.target.files[0])}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512">
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
            </svg>
          </label>

          <p className="input_p">Phone*</p>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="text_input"
            placeholder="Click and start typing"
            type="text"
          />
        </div>

        <br />
        <button onClick={saveArticle}>Done</button>
        <p id="clear_all">Clear all</p>
        <div>
          <input type="checkbox" /> By submitting this form, you agree to
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
