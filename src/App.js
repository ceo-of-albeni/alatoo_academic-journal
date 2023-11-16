import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import ArticleContextsProvider from "./contexts/articleContext";
import ArchivePage from "./pages/archivePage/ArchivePage";

const App = () => {
  return (
    <>
      <ArticleContextsProvider>
        <AuthContextProvider>
          <Navbar />
          <Routing />
          <Footer />
        </AuthContextProvider>
      </ArticleContextsProvider>
    </>
  );
};

export default App;
