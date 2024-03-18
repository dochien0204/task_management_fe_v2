import { LoginFormEntity } from "../Entity/Entity";
import { LoginResponse, User } from "../Presenter/Type/Type";
import { LoginApi } from "./ServiceImpl";

const LoginService = (api: LoginApi) => {
  const login = async (params: LoginFormEntity): Promise<LoginResponse> => {
    try {
      const response = await api.login(params);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    login,
  };
};

export default LoginService;
