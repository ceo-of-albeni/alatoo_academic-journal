import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArticleCard from '../../components/ArticleCard/ArticleCard'; // Импортируем компонент ArticleCard
import { useTranslation } from "react-i18next";

const ArticlesList = () => {
  const { id, NameEn } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/archive/${id}/${NameEn}`);
        console.log('Ответ сервера:', response.data);

        if (response.data && Array.isArray(response.data.articles)) {
          setArticles(response.data.articles);
        } else {
          console.error('Некорректный ответ сервера, нет массива статей');
        }
      } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [id, NameEn, apiUrl]);

  if (loading) {
    return <div className="text-center mt-10">{t("articlespage.loading")}</div>;
  }

  if (articles.length === 0) {
    return <div className="text-center mt-10">{t("articlespage.no")}</div>;
  }

  return (
    <div className="p-6">
      {articles.map((article) => (
        <div key={article.id} className="mb-10"> {/* Отступ между статьями */}
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;