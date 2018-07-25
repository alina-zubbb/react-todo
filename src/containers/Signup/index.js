import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import { signup } from "../../actions/loginActions";

class Signup extends Component {
  state = {
    inputName: "",
    inputPassword: ""
  };

  inputNameChange = e => {
    this.setState({
      inputName: e.target.value
    });
  };

  inputInputPassword = e => {
    this.setState({
      inputPassword: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };
    this.props.signup(data);
  };

  readURL = () => {
    const input = document.getElementById("imgInp");
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        document.getElementById("preview").setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  render() {
    return (
      <form className="auth-form" id="signup" onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={this.state.inputName}
          placeholder="name"
          changeHandler={this.inputNameChange}
          isRequired="true"
        />
        <Input
          type="password"
          value={this.state.inputPassword}
          placeholder="password"
          changeHandler={this.inputInputPassword}
          isRequired="true"
        />
        <div className="profile-photo">
          <Input
            type="file"
            id="imgInp"
            accept="image/*"
            changeHandler={this.readURL}
          />
          <img id="preview" src="#" alt="your_image" />
        </div>
        <Button className="add" text="sign up" type="submit" />
      </form>
    );
  }
}

export default connect(
  null,
  { signup }
)(Signup);
