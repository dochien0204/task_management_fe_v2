import React from "react";
import { Permission } from "../../../../../Common/Constant";
import { UserFormTabProps } from "../../Entity/Entity";

const UserPermissionComponent = ({ readonly, handler }: UserFormTabProps) => {
  React.useEffect(() => {
    handler.getUserPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-permission-container">
      <div className="column-title">
        <div className="permission">Permission</div>
        <div className="grant">Grant</div>
        <div className="deny">Deny</div>
        <div className="inherit">Inherit</div>
      </div>
      <form onSubmit={handler.updateUserDetail}>
        {PERMISSION_LIST.map((parentPermission) => (
          <div className="permission-detail" key={parentPermission.name}>
            <div className="permission-item title">
              <div className="permission">{parentPermission.name}</div>
              <div className="grant">
                <input
                  type="radio"
                  name={parentPermission.name}
                  value={Permission.GRANT}
                  disabled={readonly}
                />
              </div>
              <div className="deny">
                <input
                  type="radio"
                  name={parentPermission.name}
                  value={Permission.DENY}
                  disabled={readonly}
                />
              </div>
              <div className="inherit">
                <input
                  type="radio"
                  name={parentPermission.name}
                  value={Permission.INHERIT}
                  disabled={readonly}
                  defaultChecked={true}
                />
              </div>
            </div>
            {parentPermission.permissions?.map((childPermission) => (
              <div className="permission-item" key={childPermission.name}>
                <div className="permission">{childPermission.name}</div>
                <div className="grant">
                  <input
                    type="radio"
                    name={`${parentPermission.name}-${childPermission.name}`}
                    value={Permission.GRANT}
                    disabled={readonly}
                  />
                </div>
                <div className="deny">
                  <input
                    type="radio"
                    name={`${parentPermission.name}-${childPermission.name}`}
                    value={Permission.DENY}
                    disabled={readonly}
                  />
                </div>
                <div className="inherit">
                  <input
                    type="radio"
                    name={`${parentPermission.name}-${childPermission.name}`}
                    value={Permission.INHERIT}
                    disabled={readonly}
                    defaultChecked={true}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </form>
      <br />
      {!readonly && <button onClick={handler.updateUserDetail}>Save</button>}
    </div>
  );
};

export default UserPermissionComponent;

const PERMISSION_LIST = [
  {
    name: "Users",
    permissions: [
      {
        name: "View",
      },
      {
        name: "Create",
      },
      {
        name: "Edit",
      },
      {
        name: "Delete",
      },
    ],
  },
  {
    name: "Chat history",
    permissions: [
      {
        name: "View",
      },
      {
        name: "Create",
      },
      {
        name: "Edit",
      },
      {
        name: "Delete",
      },
    ],
  },
  {
    name: "Report",
    permissions: [
      {
        name: "View",
      },
      {
        name: "Create",
      },
      {
        name: "Edit",
      },
      {
        name: "Delete",
      },
    ],
  },
];
