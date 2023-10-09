import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageWL from "./pages/homePageWL/HomePageWL";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePageWL />,
      id: 1,
    },
    {
      link: "/profile",
      element: <UserProfilePage />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
