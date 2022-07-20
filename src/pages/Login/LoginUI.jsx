import React from "react";
import { withFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import { connect } from "react-redux";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { SIGNIN_ACTION } from "../../redux/actions/JiraActions";
import { NavLink } from "react-router-dom";
import Background from "../../assets/img/jiraBackground.jpg";

function LoginUI(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const backgroundJira = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-auto" style={backgroundJira}>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto "
        style={{ height: window.innerHeight }}
      >
        <div
          className="flex justify-center items-center text-center flex-col"
          style={{ height: window.innerHeight }}
        >
          <div className="flex text-center flex-col w-96 py-5 px-5 shadow-lg shadow-slate-200 bg-white">
            <div className="mb-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg"
                width={300}
                alt="..."
              />
            </div>
            <h3 className="text-center text-2xl">Log in to continue to:</h3>
            <p className="font-bold text-lg">Your's Dashboard</p>
            <div className="flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                size="large"
                type="email"
                placeholder="Email"
                name="email"
                prefix={<UserOutlined />}
              />
            </div>

            <div className="text-red-500 text-left">{errors.email}</div>

            <div className="flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                className=""
                size="large"
                type="password"
                placeholder="Password"
                name="password"
                prefix={<LockOutlined />}
              />
            </div>
            <div className="text-red-500 text-left">{errors.password}</div>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              style={{ width: "20%", minWidth: 300 }}
              className="mt-3"
            >
              Login
            </Button>
            <small className="my-3">OR</small>
            {/*  login btn */}
            <p>
              Don't have an account yet?
              <NavLink to="/register" className="text-blue-500">
                {" "}
                Register now
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

const LoginJiraWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email invalid"),
    password: Yup.string()
      .min(6, "Password must have min 6 characters")
      .max(32, "Password must not have max 32 characters"),
  }),
  handleSubmit: ({ email, password }, { props, setSubmitting }) => {
    props.dispatch(SIGNIN_ACTION(email, password));
  },

  displayName: "Log in to continue",
})(LoginUI);

export default connect()(LoginJiraWithFormik);
