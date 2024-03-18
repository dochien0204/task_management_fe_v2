import { RouterType } from "../RouterType";

// Components
import DashboardComponent from "../../Pages/Dashboard";

export const DashboardRouter: RouterType[] = [
  {
    path: "/dashboard",
    element: <DashboardComponent />,
  },
];
