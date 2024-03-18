import { RouterType } from "../RouterType";

// Components
import RegisterComponent from "../../Pages/Auth/Register";
import LoginComponent from "../../Pages/Auth/Login";
import ResetPasswordComponent from "../../Pages/Auth/ResetPassword";
import ChangePasswordComponent from "../../Pages/Auth/ChangePassword";

export const AuthRouter: RouterType[] = [
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordComponent />,
  },
  {
    path: "/change-password",
    element: <ChangePasswordComponent />,
  },
];
