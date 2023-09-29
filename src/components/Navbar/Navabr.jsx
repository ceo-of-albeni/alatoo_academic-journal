import React from "react";
import "./Navbar.scss";

const Navabr = () => {
  return (
    <div className="header_navbar">
      <div className="container_header">
        <div className="header_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png"
            alt=""
          />
        </div>

        <div className="header_links">
          <a href="/" className="header_links__item">
            О нас
          </a>
          <a href="/" className="header_links__item">
            Петиции
          </a>
          <a href="/" className="header_links__item">
            Что-то
          </a>
          <a href="/" className="header_links__item">
            Контакты
          </a>
        </div>

        <div className="login_btn">
          <div>Войти</div>
          {/* {isAuth ? <button>Выход</button> : <button>Войти</button>} */}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
