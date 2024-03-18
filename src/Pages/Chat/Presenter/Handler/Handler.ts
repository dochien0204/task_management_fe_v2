import { ChangeEvent, useState } from "react";
import { ChatEntity, MessageEntity } from "../../Entity/Entity";
import { ChatUseCase } from "../../Usecase/ServiceImpl";

const ChatHandler = (api: ChatUseCase) => {
  const [chatList, setChatList] = useState<ChatEntity[]>([]);
  const [messageList, setMessageList] = useState<MessageEntity[]>([]);
  const [selectedChat, setSelectedChat] = useState<number>(0);
  const [inputMessage, setInputMessage] = useState<string>("");

  const getChatList = async (userId: string) => {
    const response = await api.getChatList(userId);
    setChatList(response ?? []);
  };

  const getMessageList = async (id: number) => {
    const response = await api.getMessageList(id);
    setSelectedChat(id);
    setMessageList(response ?? []);
  };

  const addChat = async () => {
    const latestChatDate = new Date(chatList[0]?.date).toLocaleDateString();
    const today = new Date().toLocaleDateString();
    if (today === latestChatDate) {
      getMessageList(chatList[0]?.id);
    } else {
      const newChatList = [...chatList];
      const newChat = {
        id: Math.random() * 10,
        date: today,
      };
      newChatList.unshift(newChat);
      setChatList(newChatList);
      setMessageList([]);
      setSelectedChat(newChat.id);
    }
  };

  const deleteChat = async (id: number) => {
    if (selectedChat === id) {
      setMessageList([]);
      setSelectedChat(0);
    }
    const newChatList = [...chatList];
    const deleteIndex = newChatList.findIndex((chat) => chat.id === id);
    newChatList.splice(deleteIndex, 1);
    setChatList(newChatList);
  };

  const handleInputMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const addMessage = async () => {
    const newMessage = {
      date: new Date().toLocaleString(),
      isSender: true,
      content: inputMessage,
    };
    const newReplyMessage = {
      date: new Date().toLocaleString(),
      isSender: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dolor eget elit ultrices tincidunt in ac ligula. Maecenas mollis tincidunt enim, eget iaculis dui vestibulum faucibus. Phasellus facilisis vehicula felis in auctor. Aenean et pharetra diam. Pellentesque sagittis aliquam augue, quis pharetra lorem placerat in. Vivamus eu orci vitae.",
    };
    const newMessageList = [...messageList];
    newMessageList.push(newMessage, newReplyMessage);
    setMessageList(newMessageList);
    setInputMessage("");
  };

  return {
    chatList,
    messageList,
    selectedChat,
    inputMessage,

    getChatList,
    getMessageList,
    addChat,
    deleteChat,
    handleInputMessageChange,
    addMessage,
  };
};

export default ChatHandler;
