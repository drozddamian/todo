import React from "react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { ITodo } from '../types'
import Todo from "./Todo";

const TodoList = () => {
  const visibilityFilter = useSelector(state => state.visibilityFilter)
  const todos = useSelector(state => state.todos)
  const todosByFilter = getTodosByVisibilityFilter(todos, visibilityFilter)
  const hasAnyTodos = todosByFilter && todosByFilter.length

  const mapTodoToItems = (todo: ITodo) => (
    <Todo key={`todo-${todo.id}`} todo={todo} />
  )

  return (
    <ul className="todo-list">
      {hasAnyTodos
        ? todosByFilter.map(mapTodoToItems)
        : "No todos, yay!"
      }
    </ul>
  );
}

export default TodoList;
