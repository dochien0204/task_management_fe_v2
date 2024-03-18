import React from "react";
import "../../Assets/scss/auth/auth.scss";

import AppLogo from "../../Assets/image/logo.svg";
import CoverUpperPart from "../../Assets/image/cloud.svg";
import CoverLowerPart from "../../Assets/image/house.svg";

interface Props {
  children: React.ReactElement;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="auth-container">
      <div className="left-content">
        <div className="app-cover">
          <img src={AppLogo} alt="logo" className="logo" />

          <div className="cover-upper">
            <img src={CoverUpperPart} alt="cover" />
          </div>

          <div className="cover-lower">
            <img src={CoverLowerPart} alt="cover" />
          </div>

          <div className="links">
            <div className="link-item">About</div>
            <div className="link-item">Privacy Policy</div>
            <div className="link-item">Help</div>
          </div>
        </div>
      </div>

      <div className="right-content">{children}</div>
    </div>
  );
};

export default AuthLayout;
