import { Button, Col, Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { SearchOutlined } from "@ant-design/icons";
import UserProfileComponentSider from "./UserProfile";

const SiderComponent = ({ items }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsed={collapsed}
      width={400}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Row className="title" style={{ paddingTop: "10px" }}>
        <Col span={!collapsed ? 19 : 24}>
          <Title
            className="ant-typography-center"
            level={4}
            style={{
              color: "white",
              textAlign: "center",
              fontSize: !collapsed ? "20px" : "16px",
            }}
          >
            TASKC
          </Title>
        </Col>
        {!collapsed && (
          <Col span={5}>
            <Button
              type="primary"
              icon={<SearchOutlined style={{ fontSize: "16px" }} />}
              style={{ backgroundColor: "transparent" }}
            />
          </Col>
        )}
      </Row>
      <UserProfileComponentSider />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};

export default SiderComponent;
