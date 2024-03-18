import { FormInstance } from "antd";
import { LoginFormEntity } from "../../Entity/Entity";

export interface LoginHandler {
  form: FormInstance<LoginFormEntity>;

  handleLogin(values: LoginFormEntity): void;
}
