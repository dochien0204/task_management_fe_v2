import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../../../../Assets/scss/auth/login.scss";
import { LoginProps } from "../../Entity/Entity";
import FloatLabel from "../../../../../Components/FloatLabel";
import AuthLayout from "../../../../../Components/Auth/AuthLayout";

const MainUI = ({ handler }: LoginProps) => {
  return (
    <AuthLayout>
      <div className="login-container">
        <div className="login-form">
          <Form form={handler.form} onFinish={handler.handleLogin}>
            <div className="title">Login</div>

            <div className="form-item">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FloatLabel
                  label="Email or username"
                  value={handler.form.getFieldValue("username")}
                >
                  <Input className="input" />
                </FloatLabel>
              </Form.Item>
            </div>

            <div className="form-item">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FloatLabel
                  label="Password"
                  value={handler.form.getFieldValue("password")}
                >
                  <Input.Password className="input" />
                </FloatLabel>
              </Form.Item>
            </div>

            <div className="btn-login">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>

            <div className="reset-link">
              <Link to={"/reset-password"}>Reset password</Link>
            </div>
          </Form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default MainUI;
