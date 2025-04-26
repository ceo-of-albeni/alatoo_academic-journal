import React from 'react';

const ArticleCard = ({ article }) => {
  if (!article) return null;

  const {
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

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 mb-6">
      {/* Категория статьи */}
      <div className="font-semibold text-xl mb-4">{category?.nameRu || 'Категория не указана'}</div>

      {/* Информация об авторе и дате */}
      <div className="text-sm text-gray-600 mb-2">
        Автор(ы): {authorName || 'Не указано'}
      </div>
      <div className="text-sm text-gray-500 mb-1">
        Дата публикации: {new Date(createdAt).toLocaleDateString()}
      </div>

      {/* Контент статьи на разных языках */}
      <div className="mt-4">

        {/* Текст на кыргызском */}
        {titleKg && (
          <div className="mt-4">
            <div className="font-semibold text-blue-600">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleKg}
              </a>
            </div>
            <p>{textKg}</p>
          </div>
        )}

        {/* Текст на русском */}
        {titleRu && (
          <div className="mt-4">
            <div className="font-semibold text-blue-600">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleRu}
              </a>
            </div>
            <p>{textRu}</p>
          </div>
        )}

        {/* Текст на английском */}
        {titleEn && (
          <div className="mt-4">
            <div className="font-semibold text-blue-600">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {titleEn}
              </a>
            </div>
            <p>{textEn}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ArticleCard;