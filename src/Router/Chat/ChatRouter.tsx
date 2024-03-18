import { RouterType } from "../RouterType";

// Components
import ChatPage from "../../Pages/Chat/Chat";
import ChatManagementPage from "../../Pages/Chat/ChatManagement";

export const ChatRouter: RouterType[] = [
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/chat-management",
    element: <ChatManagementPage />,
  },
];
