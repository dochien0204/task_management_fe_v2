// Components
import UserComponent from "../../Pages/User";

type RouterType = {
    path: string;
    element: React.ReactElement;
};

export const UserRouter: RouterType[] = [
    {
        path: "/",
        element: <UserComponent />,
    },
];
