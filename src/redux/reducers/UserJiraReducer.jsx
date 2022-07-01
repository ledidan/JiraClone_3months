import { USER_LOGIN } from "../../util/JiraSystem";
import {
  GET_SEARCH_USER,
  USER_SIGNUP_API,
  USER_SIGNUP_REDUCER,
} from "../contants/JiraConstants";
import { GET_USER_BY_PROJECT_REDUCER } from "../contants/UserConstants";
let UsLogin = {};
if (localStorage.getItem(USER_LOGIN)) {
  UsLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: UsLogin,
  userSignup: [],
  userSearch: [],
  arrUser: [],
  userSignup: null,
  loading: false,
  error: "",
};

export const UserLoginJiraReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    case USER_SIGNUP_REDUCER: {
      return { ...state, userSignup: action.userSignup };
    }
    case GET_SEARCH_USER: {
      state.userSearch = action.lstUserSearch;
      return { ...state };
    }
    case GET_USER_BY_PROJECT_REDUCER: {
      return { ...state, arrUser: action.arrUser };
    }
    default:
      return { ...state };
  }
};
