import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageWL from "./pages/homePageWL/HomePageWL";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import RulesPage from "./pages/RulesPage/RulesPage";
import RulesPage2 from "./pages/RulesPage/RulesPage2";
import RulesPage3 from "./pages/RulesPage/RulesPage3";
import RulesPage4 from "./pages/RulesPage/RulesPage4";
import InfoPage from "./pages/infoPage/InfoPage";
import ArchivePage from "./pages/archivePage/ArchivePage";
import InfoPage2 from "./pages/infoPage/InfoPage2";
import BioPage from "./pages/bioPage/BioPage";
import BioPage2 from "./pages/bioPage/BioPage2";
import MathPage from "./pages/mathPage/MathPage";
import MathPage2 from "./pages/mathPage/MathPage2";
import MedPage from "./pages/medPage copy 3/MedPage";
import MedPage2 from "./pages/medPage copy 3/MedPage2";
import PhilologyPage from "./pages/philologyPage/PhilologyPage";
import PhilologyPage2 from "./pages/philologyPage/PhilologyPage2";
import PedagogPage from "./pages/pedagogPage/PedagogPage";
import PedagogPage2 from "./pages/pedagogPage/PedagogPage2";
import GumPage from "./pages/gumPage/GumPage";
import GumPage2 from "./pages/gumPage/GumPage2";

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
      link: "/informatics_science",
      element: <InfoPage/>,
      id: 8,
    },
    {
      link: "/informatics_science2",
      element: <InfoPage2/>,
      id: 9,
    },
    {
      link: "/biology",
      element: <BioPage/>,
      id: 10,
    },
    {
      link: "/biology2",
      element: <BioPage2/>,
      id: 11,
    },
    {
      link: "/mathematics_science",
      element: <MathPage/>,
      id: 12,
    },
    {
      link: "/mathematics_science2",
      element: <MathPage2/>,
      id: 13,
    },
    {
      link: "/medical_science",
      element: <MedPage/>,
      id: 14,
    },
    {
      link: "/medical_science2",
      element: <MedPage2/>,
      id: 15,
    },
    {
      link: "/philological_science",
      element: <PhilologyPage/>,
      id: 16,
    },
    {
      link: "/philological_science2",
      element: <PhilologyPage2/>,
      id: 17,
    },
    {
      link: "/pedagogical_science",
      element: <PedagogPage/>,
      id: 18,
    },
    {
      link: "/pedagogical_science2",
      element: <PedagogPage2/>,
      id: 19,
    },
    {
      link: "/social_humanitrain_science",
      element: <GumPage/>,
      id: 20,
    },
    {
      link: "/social_humanitrain_science2",
      element: <GumPage2/>,
      id: 21,
    }
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
