import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserFormProps } from "../../Entity/Entity";
import UserInfoComponent from "./UserInfo";
import UserPermissionComponent from "./UserPermission";

const UserFormComponent = ({ handler, action }: UserFormProps) => {
  const navigate = useNavigate();

  const title = {
    detail: "USER DETAIL",
    update: "UPDATE USER",
  };
  const [currentTab, setCurrentTab] = useState<"info" | "permission">("info");

  return (
    <div className="user-form-container">
      <div className="page-title">
        <h1>{title[action]}</h1>
        <button className="btn-back" onClick={() => navigate("/users")}>
          Back
        </button>
      </div>

      <div className="tab-group">
        <button onClick={() => setCurrentTab("info")}>Information</button>
        <button onClick={() => setCurrentTab("permission")}>Permission</button>
      </div>

      {currentTab === "info" && (
        <UserInfoComponent readonly={action === "detail"} handler={handler} />
      )}

      {currentTab === "permission" && (
        <UserPermissionComponent
          readonly={action === "detail"}
          handler={handler}
        />
      )}
    </div>
  );
};

export default UserFormComponent;
