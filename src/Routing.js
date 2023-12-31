import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageWL from "./pages/homePageWL/HomePageWL";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import RulesPage from "./pages/RulesPage/RulesPage";
import RulesPage2 from "./pages/RulesPage/RulesPage2";
import RulesPage3 from "./pages/RulesPage/RulesPage3";
import RulesPage4 from "./pages/RulesPage/RulesPage4";
import ArchiveCategoryPage from "./pages/archiveCategoryPage/ArchiveCategoryPage";
import ArchivePage from "./pages/archivePage/ArchivePage";
import CategoryPage from "./pages/categoryPage/CategoryPage";

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
    {
      link: "/rules1",
      element: <RulesPage />,
      id: 3,
    },
    {
      link: "/rules2",
      element: <RulesPage2 />,
      id: 4,
    },
    {
      link: "/rules3",
      element: <RulesPage3 />,
      id: 5,
    },
    {
      link: "/rules4",
      element: <RulesPage4 />,
      id: 6,
    },
    {
      link: "/archive",
      element: <ArchivePage/>,
      id: 7,
    },
    {
      link: "/category",
      element: <ArchiveCategoryPage/>,
      id: 8,
    },
    {
      link: "/category__",
      element: <CategoryPage/>,
      id: 9,
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
