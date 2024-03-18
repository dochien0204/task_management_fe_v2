import LoginApi from "./Infrastructure/Api/Api";
import LoginHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import LoginService from "./Usecase/Service";

const LoginComponent = () => {
  const api = LoginApi();
  const service = LoginService(api);
  const handler = LoginHandler(service);

  return <MainUI handler={handler} />;
};

export default LoginComponent;
