import axiosConfig from "../../../../Configs/Config";

const UserApi = () => {
    const getUserRandom = async (params?: any): Promise<any> => {
        const url = "";
        return await axiosConfig.get(url, { params });
    };

    return {
        getUserRandom,
    };
};

export default UserApi;
