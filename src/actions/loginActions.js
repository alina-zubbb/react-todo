import { push } from "react-router-redux";

// signout //
export const signout = () => {
  localStorage.removeItem("token");
  return { type: "SIGNOUT" };
};

// signup //
export const signupPending = () => {
  return { type: "SIGNUP_PENDING" };
};

export const signupFulfilled = ({ username, authenticated }) => {
  return {
    type: "SIGNUP_FULFILLED",
    payload: { username, authStatus: authenticated }
  };
};

export const signupRejected = error => {
  return { type: "SIGNUP_REJECTED", payload: { error } };
};

export function signup(data) {
  console.log("signup");
  return dispatch => {
    dispatch(signupPending());
    return fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        console.log("content", content);
        dispatch(signupFulfilled(content));
        localStorage.setItem("token", content.token);
        return content;
      })
      .catch(error => dispatch(signupRejected(error.message)));
  };
}
// login //
export const loginPending = () => {
  return { type: "LOGIN_PENDING" };
};

export const loginFulfilled = ({ username, authenticated }) => {
  return {
    type: "LOGIN_FULFILLED",
    payload: { username, authStatus: authenticated }
  };
};

export const loginRejected = error => {
  return { type: "LOGIN_REJECTED", payload: { error } };
};
export function login(data, cb) {
  return dispatch => {
    dispatch(loginPending());
    return fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        console.log("content", content);
        dispatch(loginFulfilled(content));
        localStorage.setItem("token", content.token);
        console.log(dispatch(push("/protected")));
        dispatch(push("/protected"));
        return content;
      })
      .catch(error => dispatch(loginRejected(error.message)));
  };
}

// getUserData //
export const fetchPending = () => {
  return { type: "GETUSERDATA_PENDING" };
};

export const fetchFulfilled = ({ username, authenticated }) => {
  return {
    type: "GETUSERDATA_FULFILLED",
    payload: { username, authenticated }
  };
};

export const fetchRejected = error => {
  return { type: "GETUSERDATA_REJECTED", payload: { error } };
};

export function getUserData(token) {
  console.log("getUserData");
  return (dispatch, getState) => {
    dispatch(fetchPending());
    return fetch("http://localhost:4000/getuserdata", {
      method: "GET",
      headers: {
        "x-authorization-token": `bearer ${token}`
      }
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        console.log("getUserData response =>", content);
        dispatch(fetchFulfilled(content));
        localStorage.setItem(
          "loginState",
          JSON.stringify(getState().loginState)
        );
        return;
      })
      .catch(error => dispatch(fetchRejected(error.message)));
  };
}
