import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { ITodo } from "../types";

interface Props {
  todo: ITodo;
}

const Todo: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch()

  const { todo } = props
  const { id, completed, content } = todo
  const hasCompletedTodo = todo && completed
  const todoIcon = hasCompletedTodo ? "👌" : "👋"

  const handleTodoClick = (todoId: number) => () => {
    dispatch(toggleTodo(todoId))
  }

  return (
    <li className="todo-item" onClick={handleTodoClick(id)}>
      {todoIcon}{" "}
      <span
        className={cx(
          "todo-item__text",
          hasCompletedTodo && "todo-item__text--completed"
        )}
      >
      {content}
    </span>
    </li>
  )
}

export default Todo
