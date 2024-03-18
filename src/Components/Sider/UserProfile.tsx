import { Col, Row } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import "../../Assets/scss/image-col.scss"; // Import your SCSS file where you define the styles

const UserProfileComponentSider = ({ user }: any) => {
  const fullName = "Do Chien";
  const role = "Product Owner";

  return (
    <Row
      className="user-profile"
      style={{
        padding: "0 0 0 24px",
        height: "70px",
        margin: "10px 0",
      }}
    >
      <Col span={5} className="image-col">
        <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/06/Hinh-anh-avatar-doi-tinh-yeu-online-cute-cho-nam.jpg?ssl=1" />
      </Col>

      <Col className="custom-col" span={14} style={{ height: "100%" }}>
        <Row
          style={{
            paddingLeft: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Col style={{ fontWeight: "bold" }}>{fullName}</Col>
          <Col>{role}</Col>
        </Row>
      </Col>
      <Col className="custom-col" span={5} style={{ height: "100%" }}>
        <MoreOutlined
          style={{
            color: "white",
            fontSize: "25px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        />
      </Col>
    </Row>
  );
};

export default UserProfileComponentSider;
