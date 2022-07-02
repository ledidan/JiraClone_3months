import React from "react";
import { Avatar } from "antd";
export default function TestTemplate() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={require("../assets/img/jiraLogo_icon.png")}
          width={30}
          height={30}
          alt="..."
        />
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </li>
      </ul>
    </nav>
  );
}
