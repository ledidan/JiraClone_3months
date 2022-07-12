import React from "react";
import { Avatar, Breadcrumb, Layout, Menu } from "antd";
import {
  FileAddOutlined,
  FundProjectionScreenOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;
export default function MenuJiraTest() {
  return (
    <Layout>
      <Header
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
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
              className="ml-1  text-base"
            >
              Project Management
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
