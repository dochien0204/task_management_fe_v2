import { ChatEntity, MessageEntity } from "../Entity/Entity";

export interface ChatApi {
  getChatList: (userId: string) => Promise<any>;
  getMessageList: (id: number) => Promise<any>;
}

export interface ChatUseCase {
  getChatList: (userId: string) => Promise<ChatEntity[] | undefined>;
  getMessageList: (id: number) => Promise<MessageEntity[] | undefined>;
}
