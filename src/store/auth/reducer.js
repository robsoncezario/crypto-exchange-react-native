import { AuthEnum } from "./types";

const initialState = {
  token: null,
  isLoggedIn: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthEnum.LogIn:
      return {
        ...state,
        ...{
          isLoggedIn: true,
        },
        ...{
          token: action.payload,
        },
      };
    case AuthEnum.LogOut:
      return {
        ...state,
        ...{
          token: null,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
