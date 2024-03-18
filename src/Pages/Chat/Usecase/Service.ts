import { ChatEntity, MessageEntity } from "../Entity/Entity";
import { ChatApi } from "./ServiceImpl";

const ChatService = (api: ChatApi) => {
  const getChatList = async (
    userId: string
  ): Promise<ChatEntity[] | undefined> => {
    try {
      const response = await api.getChatList(userId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMessageList = async (
    id: number
  ): Promise<MessageEntity[] | undefined> => {
    try {
      const response = await api.getMessageList(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getChatList,
    getMessageList,
  };
};

export default ChatService;
