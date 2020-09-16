import React from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";
import StoreLog from './StoreLog';

import "../styles.css";

export default class Demo extends React.Component {
  render() {
    return (
      <div class="two column row">
        <div class="column">
          <h1>Todo Application</h1>
          <AddTodo />
          <VisibilityFilters />
          <TodoList />
        </div>
        <div class="column">
          <h1>Store</h1>
          <StoreLog />
        </div>
      </div>
    );
  }
}
