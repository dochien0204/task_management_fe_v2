import { RoleCode } from "../../../../../Common/Constant";

const UserListApi = () => {
  const getUserList = async (): Promise<any> => {
    const userList = new Array(10).fill(0).map((_, index) => ({
      id: index + 1,
      name: `MOCK USER ${index + 1}`,
      role: RoleCode.USER,
      email: "test@gmail.com",
      phone: "0123456789",
      address: "Hanoi, Vietnam",
    }));

    return {
      data: userList,
    };
  };

  return {
    getUserList,
  };
};

export default UserListApi;
