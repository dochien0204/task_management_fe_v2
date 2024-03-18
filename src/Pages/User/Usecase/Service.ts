import { UserApi } from "./ServiceImpl";

const UserService = (api: UserApi) => {
    const getUserRandom = async (params?: any): Promise<any> => {
        try {
            const response = await api.getUserRandom(params);
            return response.data;
        } catch (error) {
            console.log(error); // Handler error is here
        }
    };

    return {
        getUserRandom,
    };
};

export default UserService;
