import { ChangeEvent } from "react";
import { ChangePasswordFormEntity } from "../../Entity/Entity";

export interface ChangePasswordHandler {
  formValue: ChangePasswordFormEntity;

  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleChangePassword(): void;
}
