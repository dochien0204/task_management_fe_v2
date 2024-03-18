import { RegisterFormEntity } from "../../Entity/Entity";

const RegisterApi = () => {
  const register = async (params: RegisterFormEntity): Promise<any> => {
    return true;
  };

  return {
    register,
  };
};

export default RegisterApi;
