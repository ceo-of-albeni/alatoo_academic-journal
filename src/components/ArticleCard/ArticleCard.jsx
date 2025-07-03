import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import styles from './ArticleCard.module.scss'; // Assuming you have a CSS file for styles

const ArticleCard = ({ article, onDeleted }) => {
  const { t } = useTranslation();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!article) return null;

  const {
    id,
    titleRu,
    titleKg,
    titleEn,
    authorName,
    createdAt,
    category,
    fileUrl,
    textRu,
    textKg,
    textEn,
  } = article;

  const isAdmin = localStorage.getItem("role") === "admin";

  const handleDelete = async () => {
    if (!window.confirm("Точно удалить статью?")) return;
    setIsDeleting(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access_token}`;
      console.log(apiUrl);
      
      const response = await fetch(`${apiUrl}/api/archive/delete/article/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        },
      });

      if (!response.ok) {
        console.log("Ошибка при удалении:", tokens);
        alert("Ошибка при удалении статьи");
        return;
      }

      alert("Статья удалена!");
      window.location.reload();
      if (onDeleted) {
        onDeleted(id);
      }
    } catch (error) {
      console.log("Ошибка сети при удалении статьи:", error);
      alert("Ошибка сети при удалении статьи");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 mb-6">
      <div className="text-lg font-semibold mb-2">{category?.nameRu || 'Категория не указана'}</div>
      <div className="text-sm text-gray-600 mb-1">
        {t("articlecard.authors")}{authorName || 'Не указано'}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        {t("articlecard.date")}{(() => {
          const d = new Date(createdAt);
          const day = String(d.getDate()).padStart(2, '0');
          const month = String(d.getMonth() + 1).padStart(2, '0');
          const year = d.getFullYear();
          return `${day}.${month}.${year}`;
        })()}
      </div>

      <div className="space-y-4">
        {titleKg && (
          <div>
            <h3 className="text-blue-600 font-semibold hover:underline">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleKg}
              </a>
            </h3>
            <p className="mt-1 text-justify">{textKg}</p>
          </div>
        )}

        {titleKg && (titleRu || titleEn) && <hr className="my-2 border-gray-300" />}

        {titleRu && (
          <div>
            <h3 className="text-blue-600 font-semibold hover:underline">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleRu}
              </a>
            </h3>
            <p className="mt-1 text-justify">{textRu}</p>
          </div>
        )}

        {titleRu && titleEn && <hr className="my-2 border-gray-300" />}

        {titleEn && (
          <div>
            <h3 className="text-blue-600 font-semibold hover:underline">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleEn}
              </a>
            </h3>
            <p className="mt-1 text-justify">{textEn}</p>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {isAdmin && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={styles.deleteButton}
          >
            {isDeleting ? "Удаление..." : "Удалить"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
