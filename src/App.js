import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navabr";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      {/* <Routing /> */}
    </>
  );
};

export default App;
