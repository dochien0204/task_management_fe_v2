import UserActionsApi from "./Infrastructure/Api/Api";
import UserActionsHandler from "./Presenter/Handler/Handler";
import UserUpdateComponent from "./Presenter/View/UserUpdateComponent";
import UserActionsService from "./Usecase/Service";

const UserUpdatePage = () => {
  const api = UserActionsApi();
  const service = UserActionsService(api);
  const handler = UserActionsHandler(service);

  return <UserUpdateComponent handler={handler} />;
};

export default UserUpdatePage;
