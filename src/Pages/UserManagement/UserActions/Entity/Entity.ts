import { UserActionsHandler } from "../Presenter/Handler/HandlerImpl";

export interface UserActionsProps {
  handler: UserActionsHandler;
}

export interface UserFormProps {
  handler: UserActionsHandler;
  action: "detail" | "update";
}

export interface UserFormTabProps {
  readonly: boolean;
  handler: UserActionsHandler;
}

export interface UserPermissionEntity {}

export interface UserDetailFormEntity {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}
