import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import StoreLog from './components/StoreLog';
import "./styles.css";

export default function TodoApp() {
  return (
    <div class="todo-app ui vertically divided grid">
      <div class="two column row">
        <div class="column">
          <h1>Todo List</h1>
          <AddTodo />
          <VisibilityFilters />
          <TodoList />
        </div>
        <div class="column">
          <h1>Store Log</h1>
          <StoreLog />
        </div>
      </div>
    </div>
  );
}
