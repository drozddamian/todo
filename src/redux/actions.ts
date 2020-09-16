import {
  ADD_TODO,
  TOGGLE_TODO,
  MODIFY_TODO_CONTENT,
  SET_FILTER,
  FilterActionTypes,
  TodoActionTypes,
} from "./actionTypes";
import { visibilityFilterType } from "../types";
import { AppThunk } from "./store";


let nextTodoId = 0;

export const addTodo = (id: number, content: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: { id, content }
});

export const addTodoWithTimeout = (content: string): AppThunk => (dispatch) => {
  const id = nextTodoId++

  setTimeout(() => {
    dispatch(addTodo(id, content))
  }, 500)
}

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
