import ChatApi from "./Infrastructure/Api/Api";
import ChatHandler from "./Presenter/Handler/Handler";
import ManagementComponent from "./Presenter/View/ManagementComponent";
import ChatService from "./Usecase/Service";

const ChatManagementPage = () => {
  const api = ChatApi();
  const service = ChatService(api);
  const handler = ChatHandler(service);

  return <ManagementComponent handler={handler} />;
};

export default ChatManagementPage;
