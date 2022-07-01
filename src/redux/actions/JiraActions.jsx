import { USER_SIGNIN_API, USER_SIGNUP_API } from "../contants/UserConstants";
export const SIGNIN_ACTION = (email, password) => {
  return {
    type: USER_SIGNIN_API,
    userLogin: {
      email: email,
      password: password,
    },
  };
};

export const SIGN_UP_ACTION = (email, password, name, phone) => {
  return {
    type: USER_SIGNUP_API,
    userSignUp: {
      email: email,
      password: password,
      name: name,
      phone: phone,
    },
  };
};
