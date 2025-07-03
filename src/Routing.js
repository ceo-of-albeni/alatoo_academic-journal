import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageWL from "./pages/homePageWL/HomePageWL";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import RulesPage from "./pages/RulesPage/RulesPage";
import ArchiveCategoryPage from "./pages/archiveCategoryPage/ArchiveCategoryPage";
import AdminPage from "./pages/adminPage/AdminPage";
import { Register } from "./components/Navbar/modals/register/Register";
import { ForgotPassword } from "./components/Navbar/modals/forgotPassword/ForgotPassword";
import { ConfirmReg } from "./components/Navbar/modals/confirmReg/ConfirmReg";
import { ChangePassword } from "./components/Navbar/modals/changePassword/ChangePassword";
import { CommentsPage } from "./pages/commentsPage/CommentsPage";
import ArticlesPageDefault from "./pages/ArticlesPageDefault/ArticlesPageDefault";
import ArticlesList from "./pages/articlesPage/ArticlesPage";
import SearchResultsPage from "./components/Search/SearchResultPage";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePageWL />,
      id: 1,
    },
    {
      link: "/profile/:id",
      element: <UserProfilePage />,
      id: 2,
    },
    {
      link: "/rules",
      element: <RulesPage />,
      id: 3,
    },
    {
      link: "/archive",
      element: <ArchiveCategoryPage />,
      id: 7,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 10,
    },
    {
      link: "/register",
      element: <Register />,
      id: 12,
    },
    {
      link: "/forgot_password",
      element: <ForgotPassword />,
      id: 13,
    },
    {
      link: "/confirm",
      element: <ConfirmReg />,
      id: 14,
    },
    {
      link: "/change_password",
      element: <ChangePassword />,
      id: 15,
    },
    {
      link: "/articles/:id/:NameEn",
      element: <ArticlesList />,
      id: 16,
    },
    {
      link: "/comments/:id",
      element: <CommentsPage />,
      id: 17,
    },
    {
      link: "/all_articles",
      element: <ArticlesPageDefault />,
      id: 18,
    },
      {
    link: "/search-results",
    element: <SearchResultsPage />,
    id: 20,
  },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
  
};

export default Routing;
