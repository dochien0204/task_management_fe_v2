import { LoginHandler } from "../Presenter/Handler/HandlerImpl";

export interface LoginProps {
  handler: LoginHandler;
}

export interface LoginFormEntity {
  username: string;
  password: string;
}
