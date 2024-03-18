import { ChangePasswordFormEntity } from "../../Entity/Entity";

const ChangePasswordApi = () => {
  const changePassword = async (
    params: ChangePasswordFormEntity
  ): Promise<any> => {
    return true;
  };

  return {
    changePassword,
  };
};

export default ChangePasswordApi;
