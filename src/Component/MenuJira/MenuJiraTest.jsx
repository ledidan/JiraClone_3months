import React from "react";
import { Avatar, Dropdown, Layout, Menu, Space } from "antd";
import {
  DownOutlined,
  FileAddOutlined,
  FundProjectionScreenOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header } = Layout;
export default function MenuJiraTest() {
  const userLogin = useSelector((state) => state.UserLoginJiraReducer.userLogin);
  const menu = (
    <Menu
      items={[
        {
          label: <NavLink to="/login">Sign Out</NavLink>,
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: <NavLink to="/register">Sign Up</NavLink>,
          key: "1",
        },
      ]}
    />
  );
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
            <Dropdown overlay={menu} arrow>
              <Space>
                <Avatar
                  src={userLogin.avatar}
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                />
                <small className="ml-2">{userLogin.name}</small>
                <DownOutlined className="d-flex align-items-center" />
              </Space>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
