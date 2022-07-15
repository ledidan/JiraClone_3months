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

export const SIGN_UP_ACTION = (email, passWord, name, phoneNumber) => {
  return {
    type: USER_SIGNUP_API,
    userSignUp: {
      email: email,
      passWord: passWord,
      name: name,
      phoneNumber: phoneNumber,
    },
  };
};
