import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  MenuOutlined,
  TeamOutlined,
  HomeOutlined,
  NotificationOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "../../../../Assets/scss/dashboard.scss";
import { DashboardProps } from "../../Entity/Entity";
import { Breadcrumb, Layout, MenuProps, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import SiderComponent from "../../../../Components/Sider/Sider";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("MENU", "1", <MenuOutlined />, [
    getItem("Home", "1.1", <HomeOutlined />),
    getItem("Notification", "1.2", <NotificationOutlined />),
    getItem("Task", "1.3", <FormOutlined />),
  ]),
  getItem("MY PROJECTS", "2", <DesktopOutlined />, [
    getItem("Alumni", "2.1"),
    getItem("Groppa", "2.2"),
    getItem("Amazing Pocket", "2.3"),
    getItem("Security App", "2.4"),
    getItem("+ Add New Project", "2.5"),
  ]),
  getItem("TEAMS", "3", <TeamOutlined />, [
    getItem("Team 1", "3.1"),
    getItem("Team 2", "3.2"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const MainUI = ({ handler }: DashboardProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  React.useEffect(() => {
    handler.getStatistics();
  }, []);

  debugger;
  const projects = handler.projectList;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent items={items} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default MainUI;
