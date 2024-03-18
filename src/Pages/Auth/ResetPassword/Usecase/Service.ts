import { ResetPasswordFormEntity } from "../Entity/Entity";
import { ResetPasswordApi } from "./ServiceImpl";

const ResetPasswordService = (api: ResetPasswordApi) => {
  const resetPassword = async (
    params: ResetPasswordFormEntity
  ): Promise<any> => {
    try {
      const response = await api.resetPassword(params);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    resetPassword,
  };
};

export default ResetPasswordService;
