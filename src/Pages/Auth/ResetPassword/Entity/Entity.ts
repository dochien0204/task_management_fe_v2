import { ResetPasswordHandler } from "../Presenter/Handler/HandlerImpl";

export interface ResetPasswordProps {
  handler: ResetPasswordHandler;
}

export interface ResetPasswordFormEntity {
  email: string;
}
