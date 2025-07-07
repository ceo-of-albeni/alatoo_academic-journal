import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard"; // или путь к твоему компоненту

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const query = useQuery();
  const name = query.get("name");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  if (!name) return;

  const delayDebounceFn = setTimeout(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/archive/search/by-name?name=${encodeURIComponent(name.trim())}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message || "Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, 500); // ждем 500 мс после последнего изменения name

  return () => clearTimeout(delayDebounceFn);
}, [name]);


  return (
    <div>
      <h2>Результаты поиска по имени: "{name}"</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      {articles.length === 0 && !loading && <p>Нет результатов</p>}
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
