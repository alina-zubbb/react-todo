import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import { add, change } from "../../actions/pageActions";

class CreateTodo extends Component {
  change = e => {
    this.props.change(e.target.value);
  };

  add = () => {
    this.props.add(Date.now(), this.props.inputValue);
  };

  render() {
    return (
      <div className="create-todo">
        <Input
          type="text"
          value={this.props.inputValue}
          changeHandler={this.change}
        />
        <Button className="add" text="Add" clickHandler={this.add} />
      </div>
    );
  }
}

export default connect(
  ({ inputState: { inputValue } }) => ({ inputValue: inputValue }),
  { add, change }
)(CreateTodo);
