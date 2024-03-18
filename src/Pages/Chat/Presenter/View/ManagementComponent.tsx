import React, { useState } from "react";
import "../../../../Assets/scss/chat.scss";
import HeaderComponent from "../../../../Components/Header/Header";
import { ChatProps } from "../../Entity/Entity";
import ChatBoxComponent from "./ChatBox";

const ManagementComponent = ({ handler }: ChatProps) => {
  const [selectedUser, setSelectedUser] = useState<string>("");

  React.useEffect(() => {
    if (selectedUser) {
      handler.getChatList(selectedUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  return (
    <div className="chat-management-container">
      <HeaderComponent />

      <h1>CONVERSATION MANAGEMENT</h1>

      <div className="user-dropdown">
        <div>Filter conditions:</div>
        <select name="company">
          <option value="-">All Company</option>
          <option value="software">SanAn Software</option>
          <option value="solution">SanAn Solution</option>
          <option value="connect">SanAn Connect</option>
        </select>
        <select
          name="user"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="-">Select user</option>
          {new Array(10).fill(0).map((_, index) => (
            <option value={index + 1} key={index}>
              MOCK USER {index + 1}
            </option>
          ))}
        </select>
      </div>

      <ChatBoxComponent handler={handler} readonly={true} />
    </div>
  );
};

export default ManagementComponent;
