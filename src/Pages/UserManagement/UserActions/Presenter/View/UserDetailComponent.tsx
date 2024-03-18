import React from "react";
import "../../../../../Assets/scss/user-actions.scss";
import HeaderComponent from "../../../../../Components/Header/Header";
import { UserActionsProps } from "../../Entity/Entity";
import UserFormComponent from "./UserForm";

const UserDetailComponent = ({ handler }: UserActionsProps) => {
  return (
    <>
      <HeaderComponent />
      <UserFormComponent handler={handler} action="detail" />
    </>
  );
};

export default UserDetailComponent;
