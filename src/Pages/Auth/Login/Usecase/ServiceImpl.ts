import { LoginFormEntity } from "../Entity/Entity";
import { LoginResponse, User } from "../Presenter/Type/Type";

export interface LoginApi {
  login: (params: LoginFormEntity) => Promise<any>;
}

export interface LoginUseCase {
  login: (params: LoginFormEntity) => Promise<LoginResponse>;
}
