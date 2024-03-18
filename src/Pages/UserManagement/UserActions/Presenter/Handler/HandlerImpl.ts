import { ChangeEvent } from "react";
import {
  UserDetailFormEntity,
  UserPermissionEntity,
} from "../../Entity/Entity";

export interface UserActionsHandler {
  userPermission: UserPermissionEntity[];
  detailFormValue: UserDetailFormEntity;

  getUserDetail(): void;
  getUserPermission(): void;
  updateUserDetail(): void;
  handleDetailFormChange(e: ChangeEvent<HTMLInputElement>): void;
}
