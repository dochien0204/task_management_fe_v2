import { User } from "../../../Auth/Login/Presenter/Type/Type";
import { UserPermissionEntity } from "../Entity/Entity";

export interface UserActionsApi {
  getUserDetail: (id: number) => Promise<any>;
  getUserPermission: (id: number) => Promise<any>;
}

export interface UserActionsUseCase {
  getUserDetail: (id: number) => Promise<User | undefined>;
  getUserPermission: (
    id: number
  ) => Promise<UserPermissionEntity[] | undefined>;
}
