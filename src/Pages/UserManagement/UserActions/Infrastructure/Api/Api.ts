import { RoleCode } from "../../../../../Common/Constant";

const UserActionsApi = () => {
  const getUserDetail = async (id: number): Promise<any> => {
    return {
      data: {
        id,
        name: `MOCK USER ${id}`,
        role: RoleCode.USER,
        email: "test@gmail.com",
        phone: "0123456789",
        address: "Hanoi, Vietnam",
      },
    };
  };

  const getUserPermission = async (id: number): Promise<any> => {
    return {
      data: [],
    };
  };

  return {
    getUserDetail,
    getUserPermission,
  };
};

export default UserActionsApi;
