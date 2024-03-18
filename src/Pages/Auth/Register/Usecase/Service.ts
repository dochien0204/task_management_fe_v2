import { RegisterFormEntity } from "../Entity/Entity";
import { RegisterApi } from "./ServiceImpl";

const RegisterService = (api: RegisterApi) => {
  const register = async (params: RegisterFormEntity): Promise<any> => {
    try {
      const response = await api.register(params);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
  };
};

export default RegisterService;
