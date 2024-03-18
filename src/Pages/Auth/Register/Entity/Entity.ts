import { RegisterHandler } from "../Presenter/Handler/HandlerImpl";

export interface RegisterProps {
  handler: RegisterHandler;
}

export interface RegisterFormEntity {
  name: string;
  password: string;
  email: string;
  phone?: string;
}
