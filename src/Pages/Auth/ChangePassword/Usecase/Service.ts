import { ChangePasswordFormEntity } from "../Entity/Entity";
import { ChangePasswordApi } from "./ServiceImpl";

const ChangePasswordService = (api: ChangePasswordApi) => {
  const changePassword = async (
    params: ChangePasswordFormEntity
  ): Promise<any> => {
    try {
      const response = await api.changePassword(params);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    changePassword,
  };
};

export default ChangePasswordService;
