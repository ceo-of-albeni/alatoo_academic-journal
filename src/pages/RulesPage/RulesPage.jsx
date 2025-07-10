import { useContext, useEffect, useState } from "react";
import { articlesContext } from "../../contexts/articleContext";
import { useTranslation } from 'react-i18next';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Используем воркер из public
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const RulesPage = () => {
  const { getRules, rules } = useContext(articlesContext);
  const { t } = useTranslation();

  // Увеличим базовую ширину, например 900px на больших экранах
  const [width, setWidth] = useState(window.innerWidth > 768 ? 900 : window.innerWidth - 40);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    getRules();

    const handleResize = () => {
      setWidth(window.innerWidth > 768 ? 900 : window.innerWidth - 40);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      className="rules_main-div"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 50,
        textAlign: 'center',
      }}
    >
      {rules ? (
        <Document
          file={{ url: rules }}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Загрузка PDF...</p>}
          error={<p>Не удалось загрузить файл. Попробуйте позже.</p>}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div
              key={`page_${index + 1}`}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}
            >
              <Page
                pageNumber={index + 1}
                width={width}
                renderTextLayer={true} // Можно включить текстовый слой, если нужен выбор текста
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default RulesPage;
