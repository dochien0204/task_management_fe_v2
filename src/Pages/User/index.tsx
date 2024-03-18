import UserApi from "./Infrastructure/Api/Api";
import UserHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import UserService from "./Usecase/Service";

const UserComponent = () => {
    const api = UserApi();
    const service = UserService(api);
    const handler = UserHandler(service);

    return <MainUI handler={handler} />;
};

export default UserComponent;
