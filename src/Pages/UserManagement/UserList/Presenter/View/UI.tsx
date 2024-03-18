import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "../../../../../Assets/scss/user-list.scss";
import HeaderComponent from "../../../../../Components/Header/Header";
import InviteModalComponent from "../../../../../Components/User/InviteModal";
import { userRole } from "../../../../Auth/Login/Presenter/Slice/Slice";
import { UserListProps } from "../../Entity/Entity";

const MainUI = ({ handler }: UserListProps) => {
  const roleCheck = useSelector(userRole);

  React.useEffect(() => {
    handler.getUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className="user-list-container">
        <h1>USER MANAGEMENT</h1>
        {roleCheck.isCompanyAdmin && (
          <button onClick={handler.openModal}>Invite Users</button>
        )}
        <div className="column-title">
          <div className="index">No.</div>
          <div className="name">Name</div>
          <div className="company">Company</div>
          <div className="email">Email</div>
          <div className="phone">Phone</div>
          <div className="address">Address</div>
          <div className="btn-group">Actions</div>
        </div>
        {handler.userList.map((user, index) => (
          <div key={user.id} className="user">
            <div className="index">{index + 1}</div>
            <div className="name">{user.name}</div>
            <div className="company">SanAn Software</div>
            <div className="email">{user.email}</div>
            <div className="phone">{user.phone}</div>
            <div className="address">{user.address}</div>
            <div className="btn-group">
              <button
                className="btn-detail"
                onClick={() => handler.checkUserDetail(user.id)}
              >
                Detail
              </button>
              <button
                className="btn-update"
                onClick={() => handler.updateUser(user.id)}
              >
                Update
              </button>
              <button
                className="btn-delete"
                onClick={() => handler.deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Invite Users"
        open={handler.isModalOpen}
        footer={null}
        closable={false}
      >
        <InviteModalComponent
          handleClose={handler.closeModal}
          handleInvite={handler.inviteUser}
        />
      </Modal>
    </>
  );
};

export default MainUI;
