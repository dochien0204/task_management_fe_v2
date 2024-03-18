import { ChangeEvent } from "react";
import { ChatEntity, MessageEntity } from "../../Entity/Entity";

export interface ChatHandler {
  chatList: ChatEntity[];
  messageList: MessageEntity[];
  selectedChat: number;
  inputMessage: string;

  getChatList(userId: string): void;
  getMessageList(id: number): void;
  addChat(): void;
  deleteChat(id: number): void;
  handleInputMessageChange(e: ChangeEvent<HTMLInputElement>): void;
  addMessage(): void;
}
