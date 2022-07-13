import React from "react";
import { Route } from "react-router-dom";
import ModalJIra from "../Component/MainContentJira/ModalJIra";
import MenuJira from "../Component/MenuJira/MenuJira";
import MenuJiraTest from "../Component/MenuJira/MenuJiraTest";
import SideBarJira from "../Component/SideBarJira/SideBarJira";

export const JiraDashboard = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <MenuJiraTest />
            <div className="jira">
              {/* <SideBarJira /> */}
              {/* <MenuJira /> */}
              <Component {...propsRoute} />
              <ModalJIra />
            </div>
          </>
        );
      }}
    />
  );
};
