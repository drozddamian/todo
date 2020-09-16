import { ADD_TODO, TOGGLE_TODO, SET_FILTER, TodoActionTypes, FilterActionTypes } from "./actionTypes";
import { visibilityFilterType } from "../types";

let nextTodoId = 0;

export const addTodo = (content: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter: visibilityFilterType): FilterActionTypes => ({
  type: SET_FILTER,
  payload: { filter }
});
