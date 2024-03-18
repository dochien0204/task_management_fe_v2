import React from "react";
import { UserProps } from "../../Entity/Entity";

const MainUI = ({ handler }: UserProps) => {
    React.useEffect(() => {
        handler.getDataUserRandom();
    }, []);

    return <></>;
};

export default MainUI;
