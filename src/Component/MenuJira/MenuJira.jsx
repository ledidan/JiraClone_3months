import {
  FileAddOutlined,
  FundProjectionScreenOutlined,
  TableOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function MenuJira() {
  const userLogin = useSelector((state) => state.UserLoginJiraReducer.userLogin);
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={userLogin.avatar} alt="..." />
        </div>
        <div className="account-info">
          <p>{userLogin.name}</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        <div>
          <FundProjectionScreenOutlined style={{ fontSize: "25px" }} />
          <NavLink
            to="/dashboard"
            activeClassName="active font-weight-bold"
            className="ml-1 text-dark text-base"
          >
            DashBoard
          </NavLink>
        </div>
        <div>
          <FileAddOutlined style={{ fontSize: "25px" }} />
          <NavLink
            to="/projectsetting"
            activeClassName="active font-weight-bold"
            className="ml-1 text-dark text-base"
          >
            Add Project
          </NavLink>
        </div>
        <div>
          <TableOutlined style={{ fontSize: "25px" }} />
          <NavLink
            to="/project-management"
            activeClassName="active font-weight-bold"
            className="ml-1 text-dark text-base"
          >
            Project Management
          </NavLink>
        </div>
      </div>
    </div>
  );
}
