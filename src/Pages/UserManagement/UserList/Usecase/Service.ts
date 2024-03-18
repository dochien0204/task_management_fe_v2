import { User } from "../../../Auth/Login/Presenter/Type/Type";
import { UserListApi } from "./ServiceImpl";

const UserListService = (api: UserListApi) => {
  const getUserList = async (): Promise<User[] | undefined> => {
    try {
      const response = await api.getUserList();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserList,
  };
};

export default UserListService;
