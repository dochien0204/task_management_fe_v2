import { UserHandler } from "../Presenter/Handler/HandlerImpl";

export interface UserProps {
    handler: UserHandler;
}

export interface UserPresenterProps {
    name: string;
    image: string;
}
