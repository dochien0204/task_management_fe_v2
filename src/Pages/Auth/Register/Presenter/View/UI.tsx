import React, { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../../../../Assets/scss/auth/register.scss";
import { RegisterProps } from "../../Entity/Entity";

const MainUI = ({ handler }: RegisterProps) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handler.handleRegister();
  };

  return (
    <div className="register-container">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div className="register-form">
          {token && (
            <div>
              Email: <b>invite@email.com</b>
            </div>
          )}
          {!token && (
            <input
              type="text"
              name="email"
              value={handler.formValue.email}
              onChange={handler.handleInputChange}
              placeholder="Email"
              required
            />
          )}
          <input
            type="text"
            name="name"
            value={handler.formValue.name}
            onChange={handler.handleInputChange}
            placeholder="User Name"
            required
          />
          <input
            type="password"
            name="password"
            value={handler.formValue.password}
            onChange={handler.handleInputChange}
            placeholder="Password"
            required
          />
          <input
            type="text"
            name="phone"
            value={handler.formValue.phone}
            onChange={handler.handleInputChange}
            placeholder="Phone number (Optional)"
          />
        </div>
        <div className="register-button">
          <button>Register</button>
        </div>
      </form>
      <div className="login-link">
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default MainUI;
