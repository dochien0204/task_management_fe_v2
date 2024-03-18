import { AxiosResponse } from "axios";
import axiosConfig from "../../../../../Configs/Config";
import { LoginFormEntity } from "../../Entity/Entity";

const LoginApi = () => {
  const login = async (
    params: LoginFormEntity
  ): Promise<AxiosResponse<any, any>> => {
    const url = "auth/login";
    return await axiosConfig.post(url, params);
  };

  return {
    login,
  };
};

export default LoginApi;
