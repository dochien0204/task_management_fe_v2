import { Form, Modal } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActiveCode, STORAGE_KEYS } from "../../../../../Common/Constant";
import { LoginFormEntity } from "../../Entity/Entity";
import { LoginUseCase } from "../../Usecase/ServiceImpl";
import { setUserData } from "../Slice/Slice";

const LoginHandler = (api: LoginUseCase) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handleLogin = async (values: LoginFormEntity) => {
    console.log(values)
    debugger
    const data: any = {
      username: values?.username ?? "",
      password: values?.password ?? "",
    };

    try {
      const login = await api.login(data);

      debugger
      localStorage.setItem(STORAGE_KEYS.TOKEN, login.accessToken);

      if (login.userId !== 0) {
        //Todo get user profile to save in slice
        const user = {}
        dispatch(setUserData(user));
        navigate("/dashboard");
      } else {
        Modal.error({
          title: "Error",
          content: "Account is not active. Please activate account.",
        });
      }
    } catch (error) {}
  };

  return {
    form,

    handleLogin,
  };
};

export default LoginHandler;
