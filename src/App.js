import React, { useContext, useEffect, useState } from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import Footer from "./components/Footer/Footer";
import AuthContextProvider, { authContext } from "./contexts/authContext";
import ArticleContextsProvider from "./contexts/articleContext";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export { i18n };

const App = () => {
  // const [serverStatus, setServerStatus] = useState(false);

  // useEffect(() => {
  //   const checkServerStatus = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/user");
  //       if (response.ok) {
  //         setServerStatus(true);
  //       } else {
  //         throw new Error("Server is not responding");
  //       }
  //     } catch (error) {
  //       setServerStatus(false);
  //       console.error("Error checking server status:", error);
  //     }
  //   };

  //   checkServerStatus();
  // }, []);

  return (
    <>
      <ArticleContextsProvider>
        <AuthContextProvider>
          {/* {serverStatus ? (
            <> */}
          <Navbar />
          <Routing />
          <Footer />
          {/* </>
          ) : (
            <p>no respond</p>
           )} */}
        </AuthContextProvider>
      </ArticleContextsProvider>
    </>
  );
};

export default App;
