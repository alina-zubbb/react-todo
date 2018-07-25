import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { getUserData, signout } from "../../actions/loginActions";
import Button from "../../components/Button";
import PrivateRoute from "../PrivateRoute";
import Login from "../Login/";
import Signup from "../Signup";
import ToDoApp from "../ToDoApp";
import Page1 from "../Page1";

class Routes extends Component {
  state = {
    status: false
  };

  signoutHandler = () => {
    localStorage.removeItem("token");
    this.props.signout();
  };

  render() {
    if (this.props.isPending) {
      return <div>loading...</div>;
    }

    return (
      <div className="app">
        <div>{"" + this.props.username}</div>
        <div className="nav">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/protected">Protected</Link>
          {this.props.isLogin ? (
            <Button
              className="remove"
              text="Logout"
              clickHandler={this.signoutHandler}
            />
          ) : null}
        </div>

        <Route exact path="/" component={Start} />
        <PrivateRoute path="/protected" component={ToDoApp} />
        <Route path="/signup" component={Signup} />
        <Route path="/page1" component={Page1} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

const Start = () => <h3>Start Page</h3>;

export default compose(
  withRouter,
  connect(
    ({ loginState }) => ({
      isLogin: loginState.authenticated,
      isPending: loginState.pending,
      isError: loginState.error,
      username: loginState.username
    }),
    { getUserData, signout }
  )
)(Routes);
