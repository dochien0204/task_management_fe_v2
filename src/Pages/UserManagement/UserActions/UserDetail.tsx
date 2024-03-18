import UserActionsApi from "./Infrastructure/Api/Api";
import UserActionsHandler from "./Presenter/Handler/Handler";
import UserDetailComponent from "./Presenter/View/UserDetailComponent";
import UserActionsService from "./Usecase/Service";

const UserDetailPage = () => {
  const api = UserActionsApi();
  const service = UserActionsService(api);
  const handler = UserActionsHandler(service);

  return <UserDetailComponent handler={handler} />;
};

export default UserDetailPage;
