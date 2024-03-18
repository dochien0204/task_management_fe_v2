import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../../Hooks";
import { User } from "../../../../Auth/Login/Presenter/Type/Type";
import { InvitedUserEntity } from "../../Entity/Entity";
import { UserListUseCase } from "../../Usecase/ServiceImpl";

const UserListHandler = (api: UserListUseCase) => {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = async () => {
    const response = await api.getUserList();
    setUserList(response ?? []);
  };

  const deleteUser = async (id: string) => {
    const userIndex = userList.findIndex((user) => user.id === id);
    const newUserList = [...userList];
    newUserList.splice(userIndex, 1);
    setUserList(newUserList);
  };

  const inviteUser = async (users: InvitedUserEntity[]) => {
    alert("Invited success.");
    closeModal();
  };

  const checkUserDetail = async (id: string) => {
    navigate(`/user/${id}`);
  };

  const updateUser = async (id: string) => {
    navigate(`/user/update/${id}`);
  };

  return {
    userList,
    isModalOpen,

    openModal,
    closeModal,
    getUserList,
    deleteUser,
    inviteUser,
    checkUserDetail,
    updateUser,
  };
};

export default UserListHandler;
