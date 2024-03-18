import { RouterType } from "../RouterType";

// Components
import UserListComponent from "../../Pages/UserManagement/UserList";
import UserDetailPage from "../../Pages/UserManagement/UserActions/UserDetail";
import UserUpdatePage from "../../Pages/UserManagement/UserActions/UserUpdate";

export const UserManagementRouter: RouterType[] = [
  {
    path: "/users",
    element: <UserListComponent />,
  },
  {
    path: "/user/:id",
    element: <UserDetailPage />,
  },
  {
    path: "/user/update/:id",
    element: <UserUpdatePage />,
  },
];
