import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/scss/header.scss";
import {
  setUserData,
  userData,
  userRole,
} from "../../Pages/Auth/Login/Presenter/Slice/Slice";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInformation = useSelector(userData);
  const roleCheck = useSelector(userRole);

  const handleLogout = () => {
    dispatch(setUserData({}));
    navigate("/");
  };

  return (
    <>
      <div className="header-space"></div>
      <div className="header">
        <div className="navigation-section">
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/chat"}>Conversation</Link>
          {!roleCheck.isUser && <Link to={"/users"}>User Management</Link>}
          {!roleCheck.isUser && (
            <Link to={"/chat-management"}>Conversation Management</Link>
          )}
          {roleCheck.isSystemAdmin && (
            <Link to={"/companies"}>Company Management</Link>
          )}
        </div>

        <div className="user-section">
          <div>{userInformation.firstName + ' ' + userInformation.lastName}</div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
