import React from "react";
import { Avatar, Layout, Menu } from "antd";
import {
  FileAddOutlined,
  FundProjectionScreenOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header } = Layout;
export default function MenuJiraTest() {
  const userLogin = useSelector((state) => state.UserLoginJiraReducer.userLogin);
  return (
    <Layout style={{ background: "none" }}>
      <Header
        style={{
          position: "relative",
          width: "100%",
          zIndex: 10,
          float: "left",
          background: "none",
        }}
      >
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["0"]}>
          <Menu.Item
            key="dashboard"
            icon={<FundProjectionScreenOutlined style={{ fontSize: "25px" }} />}
          >
            <NavLink
              to="/dashboard"
              activeClassName="active font-weight-bold"
              className="ml-1  text-base"
            >
              DashBoard
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="project-setting"
            icon={<FileAddOutlined style={{ fontSize: "25px" }} />}
          >
            <NavLink
              to="/projectsetting"
              activeClassName="active font-weight-bold"
              className="ml-1 text-base"
            >
              Add Project
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="pjManagement"
            icon={<TableOutlined style={{ fontSize: "25px" }} />}
          >
            <NavLink
              to="/project-management"
              activeClassName="active font-weight-bold"
              className="ml-1 text-base"
            >
              Project Management
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <Avatar
              src={userLogin.avatar}
              status="online"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
            />
            <small className="ml-2">{userLogin.name}</small>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
