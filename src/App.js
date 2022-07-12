import "./App.css";
import React from "react";
import { Switch } from "react-router-dom";
import LoginUI from "./pages/Login/LoginUI";
import { JiraDashboard } from "./Template/JiraDashboard";
import IndexJira from "./pages/IndexJiraDashBoard/IndexJira";
import CreateProjectJira from "./pages/CreateProject/CreateProjectJira";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import ModalHOC from "./HOC/ModalHOC";
import LoginTemplate from "./Template/LoginTemplate";
import SignUpTemplate from "./Template/SignUpTemplate";
import Signup from "./pages/Signup/Signup";
import TestTemplate from "./Template/TestTemplate";
import DragDropDemo from "../src/Template/DrogDragDemo";
import DragDropTask from "./pages/DragDropTask/DragDropTask";
function App() {
  return (
    <>
      <LoginTemplate path="/testdrag" exact Component={DragDropDemo} />
      {/* <DragDropTask /> */}
      {/* <TestTemplate /> */}
      <ModalHOC />
      <Switch>
        {/* Signup Theme */}
        <SignUpTemplate path="/register" exact Component={Signup} />
        {/* Login Theme */}
        <LoginTemplate path="/login" exact Component={LoginUI} />
        <LoginTemplate path="/" exact Component={LoginUI} />
        {/* JiraDashboard */}
        <JiraDashboard exact path="/dashboard" Component={IndexJira} />
        <JiraDashboard exact path="/projectdetail/:projectId" Component={IndexJira} />
        <JiraDashboard exact path="/projectsetting" Component={CreateProjectJira} />
        <JiraDashboard exact path="/project-management" Component={ProjectManagement} />
      </Switch>
    </>
  );
}

export default App;
