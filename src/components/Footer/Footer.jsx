import * as React from "react";
import "./Footer.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

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
        <DialogTitle>{t('footer.contacts')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <strong>
              {t('footer.address')}
            </strong>
            <br />
            {t('footer.tel')}
            <br />
            {t('footer.fax')}
            <br />
            {t('footer.email')}
            <br />
            <strong>{t('footer.office')}</strong>
            <br />
            {t('footer.office_room')}            <br />
            {t('footer.address2')}
            <br />
            {t('footer.tel2')}
            <br />
            +996 555 820 000 (WhatsApp)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('footer.close')}</Button>
        </DialogActions>
      </Dialog>

      <p>© 2025 {t('footer.credits')}</p>
      <div className="footer_icon">
        <LocalPhoneIcon onClick={handleClickOpen} />
      </div>
    </footer>
  );
};

export default Footer;
