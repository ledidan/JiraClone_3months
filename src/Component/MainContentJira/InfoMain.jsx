import { AudioOutlined } from "@ant-design/icons";
import Search from "antd/lib/transfer/search";
import React from "react";
import ReactHTMLParser from "react-html-parser";
import { useDispatch } from "react-redux";
export default function InfoMain(props) {
  const { projectDetail } = props;
  const dispatch = useDispatch();
  const renderMembers = () => {
    return projectDetail.members?.map((member, index) => {
      return (
        <div className="avatar" key={index}>
          <img src={member.avatar} alt={member.avatar} />
        </div>
      );
    });
  };
  const onSearch = (value) => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <>
      <h3 className="text-4xl mt-4">{projectDetail.projectName}</h3>
      <section>{ReactHTMLParser(projectDetail.description)}</section>
      <div className="info mb-4" style={{ display: "flex" }}>
        <div className="search-block">
          <Search
            placeholder="Search here..."
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          {renderMembers()}
        </div>
      </div>
    </>
  );
}
