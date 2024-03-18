import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import "../../../../../Assets/scss/auth/change-password.scss";
import { ChangePasswordProps } from "../../Entity/Entity";

const MainUI = ({ handler }: ChangePasswordProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handler.handleChangePassword();
  };

  return (
    <div className="change-password-container">
      <h1>CHANGE PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <div className="change-password-form">
          <input
            type="password"
            name="newsPassword"
            value={handler.formValue.newsPassword}
            onChange={handler.handleInputChange}
            placeholder="New Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={handler.formValue.confirmPassword}
            onChange={handler.handleInputChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="change-password-button">
          <button>Change Password</button>
        </div>
      </form>
      <div className="login-link">
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default MainUI;
