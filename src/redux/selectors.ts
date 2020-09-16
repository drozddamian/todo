import { VISIBILITY_FILTERS } from "../constants";
import { ITodo, visibilityFilterType } from "../types";

export const getTodoList = (todos) => {
  return todos ? todos.allIds : [];
}

export const getTodoById = (todos, id) => {
  return todos ? { ...todos.byIds[id], id } : {};
}

export const getTodos = (todos) => {
  return getTodoList(todos).map(id => getTodoById(todos, id));
}

export const getTodosByVisibilityFilter = (todos: ITodo[], visibilityFilter: visibilityFilterType) => {
  const allTodos = getTodos(todos);

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
