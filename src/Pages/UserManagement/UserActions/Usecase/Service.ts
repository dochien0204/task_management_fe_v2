import { User } from "../../../Auth/Login/Presenter/Type/Type";
import { UserPermissionEntity } from "../Entity/Entity";
import { UserActionsApi } from "./ServiceImpl";

const UserActionsService = (api: UserActionsApi) => {
  const getUserDetail = async (id: number): Promise<User | undefined> => {
    try {
      const response = await api.getUserDetail(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPermission = async (
    id: number
  ): Promise<UserPermissionEntity[] | undefined> => {
    try {
      const response = await api.getUserPermission(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserDetail,
    getUserPermission,
  };
};

export default UserActionsService;
