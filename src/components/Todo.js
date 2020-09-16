import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import * as actions from "../redux/actions";

const Todo = (props) => {
  const { todo, toggleTodo } = props
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
      {todo.content}
    </span>
    </li>
  );
}

// export default Todo;
export default connect(
  null,
  { toggleTodo: actions.toggleTodo }
)(Todo);
