import UserListApi from "./Infrastructure/Api/Api";
import UserListHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import UserListService from "./Usecase/Service";

const UserListComponent = () => {
  const api = UserListApi();
  const service = UserListService(api);
  const handler = UserListHandler(service);

  return <MainUI handler={handler} />;
};

export default UserListComponent;
