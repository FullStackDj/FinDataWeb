import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "", element: <HomePage/>},
      {path: "search", element: <SearchPage/>},
      {path: "design-guide", element: <DesignGuide/>},
      {
        path: "company/:ticker",
        element: <CompanyPage/>,
        children: [
          {path: "company-profile", element: <CompanyProfile/>},
          {path: "income-statement", element: <IncomeStatement/>},
        ],
      },
    ]
  }
])