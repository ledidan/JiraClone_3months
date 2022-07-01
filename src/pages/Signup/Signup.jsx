import React from "react";
import { Button, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { SIGN_UP_ACTION } from "../../redux/actions/JiraActions";
import { NavLink } from "react-router-dom";

function SignUpPage(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ height: window.innerHeight }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <div className="py-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg"
            width={300}
            alt="..."
          />
        </div>
        <div className="flex text-center flex-col w-96 py-5 px-5 shadow-lg shadow-slate-200">
          <h3 className="text-center text-2xl">Sign Up to continue to:</h3>
          <p className="font-bold text-lg">Login Page</p>
          <div className="d-flex mt-3">
            <Input
              onChange={handleChange}
              name="name"
              style={{ minWidth: 300 }}
              placeholder="Name"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="text-danger">{errors.name}</div>
          <div className="d-flex mt-3">
            <Input
              type="number"
              onChange={handleChange}
              name="phoneNumber"
              style={{ minWidth: 300 }}
              placeholder="Phone number"
              prefix={<PhoneOutlined />}
            />
          </div>
          <div className="text-danger">{errors.phoneNumber}</div>
          <div className="d-flex mt-3">
            <Input
              onChange={handleChange}
              name="email"
              style={{ minWidth: 300 }}
              placeholder="Email"
              prefix={<MailOutlined />}
            />
          </div>
          <div className="text-danger">{errors.email}</div>
          <div className="d-flex mt-3">
            <Input
              onChange={handleChange}
              style={{ minWidth: 300 }}
              type="password"
              name="passWord"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </div>
          <div className="text-danger">{errors.passWord}</div>
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            style={{ minWidth: 300 }}
            className="mt-3 text-white"
          >
            Signup
          </Button>
          <small className="my-3">OR</small>
          <div className="link-register">
            Already a member?
            <NavLink to="/login"> Log In</NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
const SignUpWithFormik = withFormik({
  mapPropsToValues: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    passWord: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must have min 3 characters")
      .max(30, "Name have max 30 characters"),
    phoneNumber: Yup.number().required("Phone number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid!"),
    passWord: Yup.string()
      .min(6, "Password must have min 6 characters")
      .max(32, "Password have max 32 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch(SIGN_UP_ACTION(values));
  },

  displayName: "Signup",
})(SignUpPage);

export default connect()(SignUpWithFormik);
