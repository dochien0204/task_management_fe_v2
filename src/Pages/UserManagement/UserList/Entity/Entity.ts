import { RoleCode } from "../../../../Common/Constant";
import { UserListHandler } from "../Presenter/Handler/HandlerImpl";

export interface UserListProps {
  handler: UserListHandler;
}

export interface InvitedUserEntity {
  email: string;
  role: RoleCode;
}
