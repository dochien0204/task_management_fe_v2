import ResetPasswordApi from "./Infrastructure/Api/Api";
import ResetPasswordHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import ResetPasswordService from "./Usecase/Service";

const ResetPasswordComponent = () => {
  const api = ResetPasswordApi();
  const service = ResetPasswordService(api);
  const handler = ResetPasswordHandler(service);

  return <MainUI handler={handler} />;
};

export default ResetPasswordComponent;
