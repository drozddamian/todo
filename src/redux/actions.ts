import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  MODIFY_TODO_CONTENT,
  SET_FILTER,
  TOGGLE_TODO,
  FilterActionTypes,
  TodoActionTypes,
} from "./actionTypes";
import { visibilityFilterType } from "../types";
import { AppThunk } from "./store";


let nextTodoId = 0;

const addTodoStart = (): TodoActionTypes => ({ type: ADD_TODO_START })
export const addTodoSuccess = (id: number, content: string): TodoActionTypes => ({
  type: ADD_TODO_SUCCESS,
  payload: { id, content }
});

export const addTodoWithTimeout = (content: string): AppThunk => (dispatch) => {
  const id = nextTodoId++
  dispatch(addTodoStart())

  setTimeout(() => {
    dispatch(addTodoSuccess(id, content))
  }, 5000)
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
