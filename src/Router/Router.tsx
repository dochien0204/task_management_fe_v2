import { Route, Routes } from "react-router-dom";
import { RouterType } from "./RouterType";

import { AuthRouter } from "./Auth/AuthRouter";
import { DashboardRouter } from "./Dashboard/DashboardRouter";
import { ChatRouter } from "./Chat/ChatRouter";
import { UserManagementRouter } from "./UserManagement/UserManagementRouter";
import { CompanyManagementRouter } from "./CompanyManagement/CompanyManagementRouter";

const BaseRouter = () => {
  const routers: RouterType[] = [
    ...AuthRouter,
    ...DashboardRouter,
    ...ChatRouter,
    ...UserManagementRouter,
    ...CompanyManagementRouter,
  ];

  return (
    <Routes>
      {routers.map((entry: any, idx: number) => (
        <Route key={idx} path={entry.path} element={entry.element} />
      ))}
    </Routes>
  );
};

export default BaseRouter;
