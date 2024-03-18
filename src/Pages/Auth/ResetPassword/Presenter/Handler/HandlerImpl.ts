import { ChangeEvent } from "react";
import { ResetPasswordFormEntity } from "../../Entity/Entity";

export interface ResetPasswordHandler {
  formValue: ResetPasswordFormEntity;

  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleResetPassword(): void;
}
