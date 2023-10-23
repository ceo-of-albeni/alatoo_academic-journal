import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <footer>
      <p>© 2023, Copyright</p>
      <div className="footer_icon">
        <InstagramIcon />
        <TelegramIcon />
      </div>
    </footer>
  );
};

export default Footer;
