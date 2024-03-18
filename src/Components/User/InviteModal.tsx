import React, { useState } from "react";
import "../../Assets/scss/invite-modal.scss";
import { RoleCode } from "../../Common/Constant";
import { InvitedUserEntity } from "../../Pages/UserManagement/UserList/Entity/Entity";

interface ModalProps {
  handleClose(): void;
  handleInvite(users: InvitedUserEntity[]): void;
}

const DEFAULT_USER = {
  email: "",
  role: RoleCode.USER,
};

const InviteModalComponent = ({ handleClose, handleInvite }: ModalProps) => {
  const [userList, setUserList] = useState<InvitedUserEntity[]>([]);

  const addUser = () => {
    const newList = [...userList];
    newList.push({ ...DEFAULT_USER });
    setUserList(newList);
  };

  const removeUser = (index: number) => {
    const newList = [...userList];
    newList.splice(index, 1);
    setUserList(newList);
  };

  const onCancel = () => {
    handleClose();
    setUserList([]);
  };

  const onInvite = () => {
    handleInvite(userList);
  };

  return (
    <div className="invite-modal-container">
      <div className="row title">
        <div>Email</div>
        <div>Role</div>
      </div>
      <div className="list-wrapper">
        {userList.map((user, index) => (
          <div key={user.email} className="row">
            <input
              type="text"
              name="email"
              placeholder="name@domain.com"
              required
            />
            <select name="role">
              <option value={RoleCode.USER}>User</option>
              <option value={RoleCode.COMPANY_ADMIN}>Company Admin</option>
            </select>
            <button onClick={() => removeUser(index)}>Delete</button>
          </div>
        ))}
        <button onClick={addUser}>Add another user</button>
      </div>
      <div className="btn-group">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onInvite} disabled={!userList.length}>
          Invite
        </button>
      </div>
    </div>
  );
};

export default InviteModalComponent;
