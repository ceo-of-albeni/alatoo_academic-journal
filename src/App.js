import React, { useEffect, useRef, useState } from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import ArticleContextsProvider from "./contexts/articleContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationKG from "./locales/ky/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      ky: {
        translation: translationKG,
      },
    },
    fallbackLng: "en", // Fallback language
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export { i18n };

const App = () => {
  const [serverStatus, setServerStatus] = useState(true);

const hasCheckedServer = useRef(false);

useEffect(() => {
  if (hasCheckedServer.current) return;
  hasCheckedServer.current = true;

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`);
      console.log(process.env.REACT_APP_API_URL);
      setServerStatus(response.ok);
    } catch (error) {
      setServerStatus(false);
      console.error(error);
      console.log(process.env.REACT_APP_API_URL);
    }
  };

  checkServerStatus();
}, []);

  return (
    <>
      {/* <ArchiveContextsProvider> */}
      <ArticleContextsProvider>
        <AuthContextProvider>
          {serverStatus ? (
            <>
              <Navbar />
              <Routing />
              <Footer />
            </>
          ) : (
            <p>500 ERROR, SERVER IS NOT RESPONDING</p>
          )}
        </AuthContextProvider>
      </ArticleContextsProvider>
      {/* </ArchiveContextsProvider> */}
    </>
  );
};

export default App;
