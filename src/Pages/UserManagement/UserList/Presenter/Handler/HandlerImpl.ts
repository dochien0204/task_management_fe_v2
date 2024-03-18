import { User } from "../../../../Auth/Login/Presenter/Type/Type";
import { InvitedUserEntity } from "../../Entity/Entity";

export interface UserListHandler {
  userList: any[];
  isModalOpen: boolean;

  openModal(): void;
  closeModal(): void;
  getUserList(): void;
  deleteUser(id: string): void;
  inviteUser(users: InvitedUserEntity[]): void;
  checkUserDetail(id: string): void;
  updateUser(id: string): void;
}
