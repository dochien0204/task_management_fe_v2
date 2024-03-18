import { RouterType } from "../RouterType";

// Components
import CompanyCreatePage from "../../Pages/CompanyManagement/CompanyActions/CompanyCreate";
import CompanyDetailPage from "../../Pages/CompanyManagement/CompanyActions/CompanyDetail";
import CompanyUpdatePage from "../../Pages/CompanyManagement/CompanyActions/CompanyUpdate";
import CompanyListComponent from "../../Pages/CompanyManagement/CompanyList";

export const CompanyManagementRouter: RouterType[] = [
  {
    path: "/companies",
    element: <CompanyListComponent />,
  },
  {
    path: "/company/create",
    element: <CompanyCreatePage />,
  },
  {
    path: "/company/:id",
    element: <CompanyDetailPage />,
  },
  {
    path: "/company/update/:id",
    element: <CompanyUpdatePage />,
  },
];
