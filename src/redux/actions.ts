import {
  ADD_TODO,
  TOGGLE_TODO,
  MODIFY_TODO_CONTENT,
  SET_FILTER,
  FilterActionTypes,
  TodoActionTypes,
} from "./actionTypes";
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

export const modifyTodoContent = (id: number, newContent: string): TodoActionTypes => ({
  type: MODIFY_TODO_CONTENT,
  payload: {
    id,
    newContent,
  }
});

export const setFilter = (filter: visibilityFilterType): FilterActionTypes => ({
  type: SET_FILTER,
  payload: { filter }
});
