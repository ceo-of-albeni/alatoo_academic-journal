import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import HomePageWL from "./pages/homePageWL/HomePageWL";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
      <HomePageWL/>
    </>
  );
};

export default App;
