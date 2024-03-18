import { ChangePasswordHandler } from "../Presenter/Handler/HandlerImpl";

export interface ChangePasswordProps {
  handler: ChangePasswordHandler;
}

export interface ChangePasswordFormEntity {
  newsPassword: string;
  confirmPassword: string;
}
