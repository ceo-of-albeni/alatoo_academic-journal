import * as React from "react";
import "./Footer.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Contacts"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <strong>
              Ala-Too International University, Ankara Street 1/8, Tunguch,
              720048, Bishkek, Kyrgyz Republic
            </strong>
            <br />
            Tel: +996 (312) 631425
            <br />
            Fax: +996 (312) 630409
            <br />
            E-mail: info@alatoo.edu.kg
            <br />
            <strong>Registration Office:</strong>
            <br />
            Ala-Too International University (A-Block), 107 room
            <br />
            Address: Ankara Street 1/8, Tunguch, 720048, Bishkek, Kyrgyz
            Republic
            <br />
            Tel: +996 (312) 630407
            <br />
            +996 555 820 000 (WhatsApp)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <p>© 2024 Международный Университет Ала-Тоо</p>
      <div className="footer_icon">
        <LocalPhoneIcon onClick={handleClickOpen} />
      </div>
    </footer>
  );
};

export default Footer;
