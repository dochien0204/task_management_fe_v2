import { ChangeEvent } from "react";
import { RegisterFormEntity } from "../../Entity/Entity";

export interface RegisterHandler {
  formValue: RegisterFormEntity;

  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleRegister(): void;
}
