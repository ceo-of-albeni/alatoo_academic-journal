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
import AdminPage from "./pages/adminPage/AdminPage";
import EthicsPage from "./pages/ethicsPage/EthicsPage";
import { Register } from "./components/Navbar/modals/register/Register";
import { ForgotPassword } from "./components/Navbar/modals/forgotPassword/ForgotPassword";
import { ConfirmReg } from "./components/Navbar/modals/confirmReg/ConfirmReg";
import { ChangePassword } from "./components/Navbar/modals/changePassword/ChangePassword";

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
      element: <ArchivePage />,
      id: 7,
    },
    {
      link: "/category",
      element: <ArchiveCategoryPage />,
      id: 8,
    },
    {
      link: "/category__",
      element: <CategoryPage />,
      id: 9,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 10,
    },
    {
      link: "/ethics",
      element: <EthicsPage />,
      id: 11,
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
