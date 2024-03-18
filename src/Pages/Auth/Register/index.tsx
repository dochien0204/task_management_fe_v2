import RegisterApi from "./Infrastructure/Api/Api";
import RegisterHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import RegisterService from "./Usecase/Service";

const RegisterComponent = () => {
  const api = RegisterApi();
  const service = RegisterService(api);
  const handler = RegisterHandler(service);

  return <MainUI handler={handler} />;
};

export default RegisterComponent;
