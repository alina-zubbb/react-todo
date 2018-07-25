import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { save, remove } from "../../actions/pageActions";
import PropTypes from "prop-types";

class ItemTodo extends Component {
  state = {
    textInputValue: this.props.text,
    doneValue: false,
    edit: false
  };

  remove = () => {
    this.props.remove(this.props.id);
  };

  save = e => {
    this.setState({
      edit: false
    });
    this.props.save(this.props.id, this.state.textInputValue);
  };

  editHandler = e => {
    this.setState({
      edit: true
    });
  };

  textChangeHandler = e => {
    this.setState({
      textInputValue: e.target.value
    });
  };

  doneChangeHandler = e => {
    this.setState({
      doneValue: !this.state.doneValue
    });
  };

  render() {
    return (
      <div>
        <li className="item-todo">
          <Input type="checkbox" changeHandler={this.doneChangeHandler} />
          {this.state.edit ? (
            <span>
              <Input
                value={this.state.textInputValue}
                changeHandler={this.textChangeHandler}
                autoFocus={true}
                className="input-text"
                type="text"
              />
              <Button className="save" text="save" clickHandler={this.save()} />
            </span>
          ) : (
            <span>
              <span className="item-text" onClick={this.editHandler}>
                {this.props.text}
              </span>
              <Button
                className="remove"
                text="remove"
                clickHandler={this.remove}
              />
            </span>
          )}
        </li>
      </div>
    );
  }
}

ItemTodo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string
};

export default connect(
  null,
  { save, remove }
)(ItemTodo);
