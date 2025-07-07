import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticleCardDefault = ({ item }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const getTrimmedText = () => {
    if (!item.text) return "Нет предпросмотра.";
    return item.text.length > 80
      ? item.text.substring(0, 80).trimEnd() + "..."
      : item.text;
  };

  return (
    <li
      onClick={() => navigate(`/comments/${item.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        padding: "12px 16px",
        borderBottom: "1px solid #ddd",
        width: "100%",
        listStyle: "none",
        backgroundColor: isHovered ? "#f0f4ff" : "#fff", // подсветка при наведении
        transition: "background-color 0.2s ease",
      }}
    >
      <h3 style={{ margin: "0 0 6px 0", fontWeight: "500", color: isHovered ? "#0056b3" : "#000" }}>
        {item.title || "Без названия"}
      </h3>
      <p style={{ margin: "0 0 4px 0", fontSize: "14px", color: "#555" }}>
        Автор: {item.authorName || "Неизвестно"}
      </p>
      <p style={{ margin: "0 0 4px 0", fontSize: "14px", color: "#555" }}>
        Категория: {item.category?.nameRu || "Без категории"}
      </p>
      <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
        {getTrimmedText()}
      </p>
    </li>
  );
};

export default ArticleCardDefault;
