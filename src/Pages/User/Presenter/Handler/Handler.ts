import { useState } from "react";
import { UserApi } from "../../Usecase/ServiceImpl";

const UserHandler = (api: UserApi) => {
    const [user, setUser] = useState<any>();

    const getDataUserRandom = async () => {
        const response = await api.getUserRandom();
        setUser(response?.results ?? {});
    };

    return {
        getDataUserRandom,
    };
};

export default UserHandler;
