import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import "../../../../../Assets/scss/auth/reset-password.scss";
import { ResetPasswordProps } from "../../Entity/Entity";

const MainUI = ({ handler }: ResetPasswordProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handler.handleResetPassword();
  };

  return (
    <div className="reset-password-container">
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <div className="reset-password-form">
          <input
            type="text"
            name="email"
            value={handler.formValue.email}
            onChange={handler.handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="reset-password-button">
          <button>Reset Password</button>
        </div>
      </form>
      <div className="login-link">
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default MainUI;
