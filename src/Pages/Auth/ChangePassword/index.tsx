import ChangePasswordApi from "./Infrastructure/Api/Api";
import ChangePasswordHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import ChangePasswordService from "./Usecase/Service";

const ChangePasswordComponent = () => {
  const api = ChangePasswordApi();
  const service = ChangePasswordService(api);
  const handler = ChangePasswordHandler(service);

  return <MainUI handler={handler} />;
};

export default ChangePasswordComponent;
