import React from "react";
import { UserFormTabProps } from "../../Entity/Entity";

const UserInfoComponent = ({ readonly, handler }: UserFormTabProps) => {
  React.useEffect(() => {
    handler.getUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-info">
      <form onSubmit={handler.updateUserDetail}>
        <div className="detail-item">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            value={handler.detailFormValue.name}
            onChange={handler.handleDetailFormChange}
            placeholder="User Name"
            required
            readOnly={readonly}
          />
        </div>
        <div className="detail-item">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={handler.detailFormValue.email}
            onChange={handler.handleDetailFormChange}
            placeholder="Email"
            required
            readOnly={readonly}
          />
        </div>
        <div className="detail-item">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={handler.detailFormValue.phone}
            onChange={handler.handleDetailFormChange}
            placeholder="Phone number"
            readOnly={readonly}
          />
        </div>
        <div className="detail-item">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={handler.detailFormValue.address}
            onChange={handler.handleDetailFormChange}
            placeholder="Address"
            readOnly={readonly}
          />
        </div>

        {!readonly && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default UserInfoComponent;
