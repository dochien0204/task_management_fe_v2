import React from "react";
import { ChatBoxProps } from "../../Entity/Entity";

const ChatBoxComponent = ({ handler, readonly }: ChatBoxProps) => {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  const onDeleteChat = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    handler.deleteChat(id);
  };

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [handler.messageList]);

  return (
    <div className="chat-wrapper">
      <div className="chat-list">
        {!readonly && (
          <button className="btn-create" onClick={handler.addChat}>
            New chat
          </button>
        )}
        {handler.chatList.map((chat) => (
          <div
            key={chat.id}
            className={`chat-info ${
              handler.selectedChat === chat.id ? "selected" : ""
            }`}
            onClick={() => handler.getMessageList(chat.id)}
          >
            <div>{chat.date}</div>
            {!readonly && (
              <button onClick={(e) => onDeleteChat(e, chat.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>

      {handler.selectedChat ? (
        <div className="chat-detail">
          <div className="message-list">
            {handler.messageList.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isSender ? "mine" : ""}`}
              >
                <img
                  src="https://dummyimage.com/64x64/000/fff"
                  alt="avatar"
                  className="avatar"
                />
                <div className="content">
                  <p>{message.content}</p>
                  <p>{message.date}</p>
                </div>
              </div>
            ))}
            <div className="message" ref={bottomRef}></div>
          </div>
          {!readonly && (
            <div className="message-input">
              <input
                type="text"
                placeholder="Send a message"
                value={handler.inputMessage}
                onChange={handler.handleInputMessageChange}
              />
              <button
                onClick={handler.addMessage}
                disabled={!handler.inputMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="guide-text">
          {readonly
            ? "Find user and select a chat"
            : "Select a chat or start new chat"}
        </div>
      )}
    </div>
  );
};

export default ChatBoxComponent;
