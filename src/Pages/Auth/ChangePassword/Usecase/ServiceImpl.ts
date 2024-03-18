import { ChangePasswordFormEntity } from "../Entity/Entity";

export interface ChangePasswordApi {
  changePassword: (params: ChangePasswordFormEntity) => Promise<any>;
}

export interface ChangePasswordUseCase {
  changePassword: (params: ChangePasswordFormEntity) => Promise<any>;
}
