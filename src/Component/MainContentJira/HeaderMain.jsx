import React from "react";
import { Breadcrumb, Button } from "antd";
import { NavLink } from "react-router-dom";
import { FORM_CREATE_TASK } from "../../redux/contants/JiraConstants";
import FormCreateTask from "../Forms/FormCreateTask/FormCreateTask";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
export default function HeaderMain(props) {
  const { projectDetail } = props;
  const dispatch = useDispatch();
  return (
    <div className="header mt-5 d-flex justify-between">
      <Breadcrumb>
        <Breadcrumb.Item className="text-lg">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="text-lg">
          <NavLink to="/project-management">Project Management</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="text-lg font-weight-normal" aria-current="page">
          <a href={projectDetail.id}>{projectDetail.projectName}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Button
        type="primary"
        size="large"
        className="d-flex align-items-center"
        style={{ fontSize: "18px" }}
        onClick={() => {
          dispatch({
            type: FORM_CREATE_TASK,
            Component: <FormCreateTask />,
            title: "CREATE TASK",
          });
        }}
      >
        <PlusCircleOutlined />
        Create Task
      </Button>
    </div>
  );
}
