const initialState = {
  pending: false,
  error: false,
  username: null,
  authenticated: false
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_PENDING":
      console.log("LOGIN_PENDING");
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "LOGIN_FULFILLED":
      console.log("LOGIN_FULFILLED");
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true
      };
    case "LOGIN_REJECTED":
      console.log("LOGIN_REJECTED");
      return {
        ...state,
        pending: false,
        error: true,
        username: null,
        authenticated: false
      };
    case "SIGNUP_PENDING":
      console.log("SIGNUP_PENDING");
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "SIGNUP_FULFILLED":
      console.log("SIGNUP_FULFILLED");
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: false
      };
    case "SIGNUP_REJECTED":
      console.log("SIGNUP_REJECTED");
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case "GETUSERDATA_PENDING":
      console.log("GETUSERDATA_PENDING");
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "GETUSERDATA_FULFILLED":
      console.log("GETUSERDATA_FULFILLED");
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true
      };
    case "GETUSERDATA_REJECTED":
      console.log("GETUSERDATA_REJECTED");
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case "SIGNOUT":
      console.log("SIGNOUT");
      return {
        ...state,
        pending: false,
        error: false,
        username: null,
        authenticated: false
      };
    default:
      return state;
  }
}
