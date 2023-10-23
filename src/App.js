import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import ArticleContextsProvider from "./contexts/articleContext";

const App = () => {
  return (
    <>
      {/* <ArticleContextsProvider> */}
      <AuthContextProvider>
        <Navbar />
        <Routing />
        <Footer />
      </AuthContextProvider>
      {/* </ArticleContextsProvider> */}
    </>
  );
};

export default App;
