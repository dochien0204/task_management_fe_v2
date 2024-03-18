import { ResetPasswordFormEntity } from "../Entity/Entity";

export interface ResetPasswordApi {
  resetPassword: (params: ResetPasswordFormEntity) => Promise<any>;
}

export interface ResetPasswordUseCase {
  resetPassword: (params: ResetPasswordFormEntity) => Promise<any>;
}
