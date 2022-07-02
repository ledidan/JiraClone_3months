import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginUI from "./pages/Login/LoginUI";
import { JiraDashboard } from "./Template/JiraDashboard";
import IndexJira from "./pages/IndexJiraDashBoard/IndexJira";
import CreateProjectJira from "./pages/CreateProject/CreateProjectJira";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import ModalHOC from "./HOC/ModalHOC";
import LoginTemplate from "./Template/LoginTemplate";
import SignUpTemplate from "./Template/SignUpTemplate";
import Signup from "./pages/Signup/Signup";
function App() {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "ADD_HISTORY", history: history });
  // }, []);

  return (
    <>
      <ModalHOC />
      <Switch>
        {/* Signup Theme */}
        <SignUpTemplate path="/register" exact Component={Signup} />
        {/* Login Theme */}
        <LoginTemplate path="/login" exact Component={LoginUI} />
        <LoginTemplate path="/" exact Component={LoginUI} />
        {/* JiraDashboard */}
        <JiraDashboard exact path="/dashboard" Component={IndexJira} />
        <JiraDashboard
          exact
          path="/projectdetail/:projectId"
          Component={IndexJira}
        />
        <JiraDashboard
          exact
          path="/projectsetting"
          Component={CreateProjectJira}
        />
        <JiraDashboard
          exact
          path="/project-management"
          Component={ProjectManagement}
        />
      </Switch>
    </>
  );
}

export default App;
