import { visibilityFilterType } from "../types";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const MODIFY_TODO_CONTENT = "MODIFY_TODO_CONTENT";
export const SET_FILTER = "SET_FILTER";

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: {
    id: number;
    content: string;
  }
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: {
    id: number;
  }
}

interface ModifyTodoContentAction {
  type: typeof MODIFY_TODO_CONTENT
  payload: {
    id: number;
    newContent: string;
  }
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | ModifyTodoContentAction

interface SetFilterAction {
  type: typeof SET_FILTER
  payload: {
    filter: visibilityFilterType;
  }
}

export type FilterActionTypes = SetFilterAction
