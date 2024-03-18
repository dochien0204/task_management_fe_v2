import { ResetPasswordFormEntity } from "../../Entity/Entity";

const ResetPasswordApi = () => {
  const resetPassword = async (
    params: ResetPasswordFormEntity
  ): Promise<any> => {
    return true;
  };

  return {
    resetPassword,
  };
};

export default ResetPasswordApi;
