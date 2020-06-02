import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <div className="ui action input" style={{width: '100%'}}>
          <input
            type="text"
            placeholder="What ya gonna do"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <button
            className="add-todo ui primary button"
            onClick={this.handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
