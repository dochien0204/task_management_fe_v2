import ChatApi from "./Infrastructure/Api/Api";
import ChatHandler from "./Presenter/Handler/Handler";
import ChatComponent from "./Presenter/View/ChatComponent";
import ChatService from "./Usecase/Service";

const ChatPage = () => {
  const api = ChatApi();
  const service = ChatService(api);
  const handler = ChatHandler(service);

  return <ChatComponent handler={handler} />;
};

export default ChatPage;
