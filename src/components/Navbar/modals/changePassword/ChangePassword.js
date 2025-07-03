import React, { useState } from "react";
import classes from "./ChangePassword.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const API = "http://localhost:3001/api";

export function ChangePassword({ closeModal }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!newPassword.trim() || !confirmPassword.trim()) {
      setErrorMsg(t("change_pw.empty_fields") || "Заполните все поля.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg(t("change_pw.mismatch") || "Пароли не совпадают.");
      return;
    }

    setLoading(true);
    try {
      const token =
        JSON.parse(localStorage.getItem("tokens"))?.access_token ||
        localStorage.getItem("temp_access_token");

      if (!token) {
        setErrorMsg(t("change_pw.no_token") || "Сессия истекла, авторизуйтесь заново.");
        setLoading(false);
        return;
      }

      await axios.patch(
        `${API}/auth/change-password`,
        { newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setModalOpen(false);
      setOpenSuccess(true);
    } catch (error) {
      console.error(error);
      setErrorMsg(
        error.response?.data?.message ||
          t("change_pw.error") ||
          "Ошибка при смене пароля."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccess = (e) => {
    e.preventDefault();
    setOpenSuccess(false);
    localStorage.removeItem("temp_access_token");
    navigate("/");
  };

  return (
    <>
      {modalOpen && (
        <div className={classes.change}>
          <div className={classes.change__inner}>
            <form onSubmit={handleChangePassword}>
              <div>{t("change_pw.change")}</div>
              <label>{t("change_pw.new")}</label>
              <input
                type="password"
                placeholder={t("change_pw.ph")}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label>{t("change_pw.confirm_new")}</label>
              <input
                type="password"
                placeholder={t("change_pw.ph")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
              <button type="submit" disabled={loading}>
                {loading ? t("change_pw.loading") || "Смена..." : t("change_pw.change")}
              </button>
            </form>
          </div>
        </div>
      )}
      {openSuccess && (
        <div className={classes.success}>
          <div className={classes.change__inner}>
            <form onSubmit={handleCloseSuccess}>
              <div>{t("change_pw.success") || "Успешно"}</div>
              <div>
                <p>{t("change_pw.message") || "Пароль успешно изменен."}</p>
              </div>
              <button type="submit">OK</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
