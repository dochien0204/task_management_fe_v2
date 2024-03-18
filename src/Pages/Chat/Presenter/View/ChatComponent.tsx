import React from "react";
import { useSelector } from "react-redux";
import "../../../../Assets/scss/chat.scss";
import HeaderComponent from "../../../../Components/Header/Header";
import { userData } from "../../../Auth/Login/Presenter/Slice/Slice";
import { ChatProps } from "../../Entity/Entity";
import ChatBoxComponent from "./ChatBox";

const ChatComponent = ({ handler }: ChatProps) => {
  const userInformation = useSelector(userData);

  React.useEffect(() => {
    handler.getChatList(userInformation.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="chat-container">
      <HeaderComponent />

      <h1>CONVERSATION</h1>

      <ChatBoxComponent handler={handler} />
    </div>
  );
};

export default ChatComponent;
