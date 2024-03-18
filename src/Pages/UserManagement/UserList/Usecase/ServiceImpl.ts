import { User } from "../../../Auth/Login/Presenter/Type/Type";

export interface UserListApi {
  getUserList: () => Promise<any>;
}

export interface UserListUseCase {
  getUserList: () => Promise<User[] | undefined>;
}
