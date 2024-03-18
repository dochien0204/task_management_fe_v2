import { ChatHandler } from "../Presenter/Handler/HandlerImpl";

export interface ChatProps {
  handler: ChatHandler;
}

export interface ChatBoxProps {
  readonly?: boolean;
  handler: ChatHandler;
}

export interface ChatEntity {
  id: number;
  date: string;
}

export interface MessageEntity {
  date: string;
  isSender: boolean;
  content: string;
}
