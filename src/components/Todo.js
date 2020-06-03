import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <tr onClick={() => toggleTodo(todo.id)}>
    <td>{todo.id}</td>
    <td>{todo.content}</td>
    <td>{todo.completed ? 'Completed' : 'Incomplete'}</td>
  </tr>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
