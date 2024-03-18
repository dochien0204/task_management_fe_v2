import { RegisterFormEntity } from "../Entity/Entity";

export interface RegisterApi {
  register: (params: RegisterFormEntity) => Promise<any>;
}

export interface RegisterUseCase {
  register: (params: RegisterFormEntity) => Promise<any>;
}
